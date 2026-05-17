import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ProjectFeature {
  title: string;
  description: string;
  icon: string;
}

export interface ProjectChallenge {
  problem: string;
  solution: string;
}

export interface ProjectStat {
  label: string;
  value: string;
  icon: string;
}

export interface Project {
  _id?: string;
  id?: string;       // Dynamic backward-compatibility mapping
  name?: string;     // Dynamic backward-compatibility mapping
  title: string;
  subtitle: string;
  description: string;
  role: string;
  technologies: string[];
  src: string;
  link: string;
  features: ProjectFeature[];
  challenges: ProjectChallenge[];
  impact: string[];
  stats: ProjectStat[];
  architecture?: string;
  featured?: boolean;
  slug: string;
  category: string;
  seoTitle?: string;
  seoDescription?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private readonly apiBase = 'http://localhost:5000/api/projects';

  constructor(private http: HttpClient) {}

  getProjects(filters?: { category?: string; featured?: boolean; search?: string }): Observable<Project[]> {
    let params = new HttpParams();
    if (filters) {
      if (filters.category) params = params.set('category', filters.category);
      if (filters.featured !== undefined) params = params.set('featured', filters.featured.toString());
      if (filters.search) params = params.set('search', filters.search);
    }
    return this.http.get<Project[]>(this.apiBase, { params }).pipe(
      map(projects => projects.map(p => ({
        ...p,
        id: p._id,
        name: p.title
      })))
    );
  }

  getProjectById(idOrSlug: string): Observable<Project> {
    return this.http.get<Project>(`${this.apiBase}/${idOrSlug}`).pipe(
      map(p => ({
        ...p,
        id: p._id,
        name: p.title
      }))
    );
  }
}
