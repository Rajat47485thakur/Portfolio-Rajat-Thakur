import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  // ==========================================
  // PUBLIC PORTFOLIO MODULES
  // ==========================================
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'project/:id',
        loadComponent: () => import('./components/project-detail/project-detail.component').then(m => m.ProjectDetailComponent)
      },
      {
        path: 'contact',
        loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent)
      },
      {
        path: 'blogs',
        loadComponent: () => import('./modules/public/blog-list/blog-list.component').then(m => m.BlogListComponent)
      },
      {
        path: 'blog/:slug',
        loadComponent: () => import('./modules/public/blog-detail/blog-detail.component').then(m => m.BlogDetailComponent)
      }
    ]
  },

  // ==========================================
  // STANDALONE AUTHENTICATION
  // ==========================================
  {
    path: 'auth/login',
    loadComponent: () => import('./modules/auth/login/login.component').then(m => m.LoginComponent)
  },

  // ==========================================
  // SECURED ADMIN CMS WORKSPACE
  // ==========================================
  {
    path: 'admin',
    loadComponent: () => import('./layouts/admin-layout/admin-layout.component').then(m => m.AdminLayoutComponent),
    canActivate: [authGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./modules/admin/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'resume',
        loadComponent: () => import('./modules/admin/resume/resume.component').then(m => m.ResumeComponent)
      },
      {
        path: 'experience',
        loadComponent: () => import('./modules/admin/experience/experience.component').then(m => m.ExperienceComponent)
      },
      {
        path: 'projects',
        loadComponent: () => import('./modules/admin/projects/projects.component').then(m => m.ProjectsComponent)
      },
      {
        path: 'skills',
        loadComponent: () => import('./modules/admin/skills/skills.component').then(m => m.SkillsComponent)
      },
      {
        path: 'blogs',
        loadComponent: () => import('./modules/admin/blogs/blogs.component').then(m => m.BlogsComponent)
      },
      {
        path: 'contacts',
        loadComponent: () => import('./modules/admin/contacts/contacts.component').then(m => m.ContactsComponent)
      },
      {
        path: 'settings',
        loadComponent: () => import('./modules/admin/settings/settings.component').then(m => m.SettingsComponent)
      }
    ]
  },

  // Fallback Catch-All
  {
    path: '**',
    redirectTo: ''
  }
];
