import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('accessToken');

  if (token) {
    return true;
  }

  // Redirect to secure login
  router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
  return false;
};
