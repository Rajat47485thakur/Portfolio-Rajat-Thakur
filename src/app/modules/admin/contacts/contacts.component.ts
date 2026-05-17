import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../../core/services/admin.service';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent implements OnInit {
  messages: any[] = [];
  selectedMessage: any = null;
  isLoading = true;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadMessages();
  }

  loadMessages() {
    this.isLoading = true;
    this.adminService.getMessages().subscribe({
      next: (data) => {
        this.messages = data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        this.isLoading = false;
        
        // Keep active selection in sync if open
        if (this.selectedMessage) {
          const fresh = this.messages.find(m => m._id === this.selectedMessage._id);
          if (fresh) this.selectedMessage = fresh;
        }
      },
      error: (err) => {
        console.error('Failed to load messages inbox', err);
        this.isLoading = false;
      }
    });
  }

  selectMessage(msg: any) {
    this.selectedMessage = msg;
    if (msg.status === 'unread') {
      this.markAsRead(msg._id);
    }
  }

  markAsRead(id: string) {
    this.adminService.updateMessageStatus(id, 'read').subscribe({
      next: () => this.loadMessages()
    });
  }

  markAsReplied(id: string) {
    this.adminService.updateMessageStatus(id, 'replied').subscribe({
      next: () => this.loadMessages()
    });
  }

  deleteMessage(id: string) {
    if (confirm('Are you sure you want to delete this message log?')) {
      this.adminService.deleteMessage(id).subscribe({
        next: () => {
          if (this.selectedMessage?._id === id) {
            this.selectedMessage = null;
          }
          this.loadMessages();
        }
      });
    }
  }
}
