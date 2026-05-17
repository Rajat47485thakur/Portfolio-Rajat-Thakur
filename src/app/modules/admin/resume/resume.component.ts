import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AdminService } from '../../../core/services/admin.service';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent implements OnInit {
  resumeUrl: string = '';
  safeResumeUrl: SafeResourceUrl | null = null;
  selectedFile: File | null = null;
  isUploading = false;
  successMessage = '';
  errorMessage = '';

  constructor(
    private adminService: AdminService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.loadResume();
  }

  loadResume() {
    this.adminService.getSettings().subscribe({
      next: (settings) => {
        this.resumeUrl = settings.resumePdfUrl;
        if (settings.resumePdfUrl) {
          this.safeResumeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(settings.resumePdfUrl);
        }
      },
      error: (err) => console.error('Failed to load branding settings', err)
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      this.selectedFile = file;
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Please select a valid PDF document.';
      this.selectedFile = null;
    }
  }

  uploadResume() {
    if (!this.selectedFile) return;

    this.isUploading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const formData = new FormData();
    formData.append('resumePdf', this.selectedFile);

    this.adminService.updateSettings(formData).subscribe({
      next: (res) => {
        this.isUploading = false;
        this.resumeUrl = res.resumePdfUrl;
        this.safeResumeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(res.resumePdfUrl);
        this.selectedFile = null;
        this.successMessage = 'Resume PDF uploaded and compiled successfully!';
      },
      error: (err) => {
        this.isUploading = false;
        this.errorMessage = err.error?.message || 'Failed to upload resume PDF file.';
      }
    });
  }
}
