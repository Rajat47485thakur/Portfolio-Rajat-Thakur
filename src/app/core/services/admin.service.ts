import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private readonly apiBase = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  // ==========================================
  // AUTH OPERATORS
  // ==========================================
  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiBase}/auth/login`, credentials).pipe(
      tap((res) => {
        if (res.accessToken && res.refreshToken) {
          localStorage.setItem('accessToken', res.accessToken);
          localStorage.setItem('refreshToken', res.refreshToken);
        }
      })
    );
  }

  // ==========================================
  // EXPERIENCES CMS
  // ==========================================
  getExperiences(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiBase}/experiences`);
  }

  createExperience(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiBase}/experiences`, data);
  }

  updateExperience(id: string, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiBase}/experiences/${id}`, data);
  }

  deleteExperience(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiBase}/experiences/${id}`);
  }

  // ==========================================
  // PROJECTS CMS (Multipart Forms)
  // ==========================================
  createProject(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiBase}/projects`, formData);
  }

  updateProject(id: string, formData: FormData): Observable<any> {
    return this.http.put<any>(`${this.apiBase}/projects/${id}`, formData);
  }

  deleteProject(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiBase}/projects/${id}`);
  }

  // ==========================================
  // SKILLS CMS
  // ==========================================
  getSkills(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiBase}/skills`);
  }

  createSkill(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiBase}/skills`, data);
  }

  updateSkill(id: string, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiBase}/skills/${id}`, data);
  }

  deleteSkill(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiBase}/skills/${id}`);
  }

  // ==========================================
  // BLOGS CMS (Multipart Forms)
  // ==========================================
  createBlog(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiBase}/blogs`, formData);
  }

  updateBlog(id: string, formData: FormData): Observable<any> {
    return this.http.put<any>(`${this.apiBase}/blogs/${id}`, formData);
  }

  deleteBlog(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiBase}/blogs/${id}`);
  }

  // ==========================================
  // INBOX CMS
  // ==========================================
  getMessages(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiBase}/contacts`);
  }

  updateMessageStatus(id: string, status: 'unread' | 'read' | 'replied'): Observable<any> {
    return this.http.put<any>(`${this.apiBase}/contacts/${id}`, { status });
  }

  deleteMessage(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiBase}/contacts/${id}`);
  }

  // ==========================================
  // BRANDING SETTINGS (Multipart Forms)
  // ==========================================
  getSettings(): Observable<any> {
    return this.http.get<any>(`${this.apiBase}/settings`);
  }

  updateSettings(formData: FormData): Observable<any> {
    return this.http.put<any>(`${this.apiBase}/settings`, formData);
  }

  // ==========================================
  // SEO SETTINGS (Multipart Forms)
  // ==========================================
  getSEO(): Observable<any> {
    return this.http.get<any>(`${this.apiBase}/seo`);
  }

  updateSEO(formData: FormData): Observable<any> {
    return this.http.put<any>(`${this.apiBase}/seo`, formData);
  }
}
