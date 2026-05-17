import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { forkJoin } from 'rxjs';
import { AdminService } from '../../../core/services/admin.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  stats = {
    messagesCount: 0,
    unreadMessages: 0,
    projectsCount: 3, // Initial seeded value
    skillsCount: 0
  };
  recentMessages: any[] = [];
  isLoading = true;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData() {
    this.isLoading = true;
    
    forkJoin({
      messages: this.adminService.getMessages(),
      skills: this.adminService.getSkills()
    }).subscribe({
      next: (res) => {
        this.stats.messagesCount = res.messages.length;
        this.stats.unreadMessages = res.messages.filter((m: any) => m.status === 'unread').length;
        this.recentMessages = res.messages.slice(0, 5);
        this.stats.skillsCount = res.skills.length;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to load dashboard data', err);
        this.isLoading = false;
      }
    });
  }

  markAsRead(id: string) {
    this.adminService.updateMessageStatus(id, 'read').subscribe({
      next: () => this.loadDashboardData()
    });
  }

  deleteMessage(id: string) {
    if (confirm('Are you sure you want to delete this message log?')) {
      this.adminService.deleteMessage(id).subscribe({
        next: () => this.loadDashboardData()
      });
    }
  }
}
