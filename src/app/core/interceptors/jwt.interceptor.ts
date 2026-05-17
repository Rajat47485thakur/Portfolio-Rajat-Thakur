import { inject } from '@angular/core';
import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, filter, take, switchMap } from 'rxjs/operators';
import { API_BASE_URL } from '../config/api.config';

// Subject to manage token refresh queueing
let isRefreshing = false;
const refreshTokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

export const jwtInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const router = inject(Router);
  const http = inject(HttpClient);
  const token = localStorage.getItem('accessToken');
  
  // Base server API URL (can be customized via environment profile)
  const apiBase = API_BASE_URL;

  let authReq = req;

  // Append Bearer token if targeting our backend API
  if (token && (req.url.startsWith('/api') || req.url.startsWith(apiBase))) {
    authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(authReq).pipe(
    catchError((error: unknown) => {
      if (error instanceof HttpErrorResponse && error.status === 401) {
        // Handle token expiration / unauthorized
        return handle401Error(authReq, next, http, router);
      }
      return throwError(() => error);
    })
  );
};

// Background refresh loop handler
const handle401Error = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn,
  http: HttpClient,
  router: Router
): Observable<HttpEvent<unknown>> => {
  const refreshToken = localStorage.getItem('refreshToken');
  const apiBase = API_BASE_URL;

  if (!refreshToken) {
    // Force log out
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    router.navigate(['/auth/login']);
    return throwError(() => new Error('Refresh token missing, authentication expired'));
  }

  if (!isRefreshing) {
    isRefreshing = true;
    refreshTokenSubject.next(null);

    return http.post<{ accessToken: string; refreshToken: string }>(`${apiBase}/auth/refresh`, { refreshToken }).pipe(
      switchMap((res) => {
        isRefreshing = false;
        localStorage.setItem('accessToken', res.accessToken);
        localStorage.setItem('refreshToken', res.refreshToken);
        refreshTokenSubject.next(res.accessToken);

        // Re-send original request with fresh token
        return next(
          request.clone({
            setHeaders: {
              Authorization: `Bearer ${res.accessToken}`
            }
          })
        );
      }),
      catchError((err) => {
        isRefreshing = false;
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        router.navigate(['/auth/login']);
        return throwError(() => err);
      })
    );
  } else {
    // Queue additional concurrent requests until refresh finishes
    return refreshTokenSubject.pipe(
      filter((token) => token !== null),
      take(1),
      switchMap((token) => {
        return next(
          request.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`
            }
          })
        );
      })
    );
  }
};
