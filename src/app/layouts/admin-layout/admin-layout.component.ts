import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss'
})
export class AdminLayoutComponent {
  isSidebarOpen = true;

  sidebarLinks = [
    { label: 'Overview', path: 'dashboard', icon: 'fas fa-chart-line' },
    { label: 'Resume Manager', path: 'resume', icon: 'fas fa-file-pdf' },
    { label: 'Experience Timeline', path: 'experience', icon: 'fas fa-briefcase' },
    { label: 'Project CMS', path: 'projects', icon: 'fas fa-tasks' },
    { label: 'Skills Grid', path: 'skills', icon: 'fas fa-tools' },
    { label: 'Technical Blogs', path: 'blogs', icon: 'fas fa-blog' },
    { label: 'Inquiries Inbox', path: 'contacts', icon: 'fas fa-envelope' },
    { label: 'Branding & SEO', path: 'settings', icon: 'fas fa-cogs' }
  ];

  constructor(private router: Router) {}

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  logout() {
    // Clear credentials
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    this.router.navigate(['/auth/login']);
  }
}
