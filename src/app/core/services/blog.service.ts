import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../config/api.config';

export interface Blog {
  _id?: string;
  title: string;
  content: string;
  slug: string;
  tags: string[];
  featuredImage?: string;
  status: 'draft' | 'published';
  seoTitle?: string;
  seoDescription?: string;
  createdAt?: string;
  updatedAt?: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private readonly apiBase = `${API_BASE_URL}/blogs`;

  constructor(private http: HttpClient) {}

  getBlogs(filters?: { status?: 'draft' | 'published'; tag?: string; search?: string }): Observable<Blog[]> {
    let params = new HttpParams();
    if (filters) {
      if (filters.status) params = params.set('status', filters.status);
      if (filters.tag) params = params.set('tag', filters.tag);
      if (filters.search) params = params.set('search', filters.search);
    }
    return this.http.get<Blog[]>(this.apiBase, { params });
  }

  getBlogBySlug(slug: string): Observable<Blog> {
    return this.http.get<Blog>(`${this.apiBase}/${slug}`);
  }
}
