import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AdminService } from '../../../core/services/admin.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent implements OnInit {
  settingsForm!: FormGroup;
  seoForm!: FormGroup;
  isLoading = true;
  successMessage = '';
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.initForms();
    this.loadData();
  }

  initForms() {
    this.settingsForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['7018683789', [Validators.required]], // Bound to primary requirement!
      whatsapp: ['917018683789', [Validators.required]], // Redirect target requirement!
      githubUrl: [''],
      linkedinUrl: [''],
      twitterUrl: [''],
      themeMode: ['dark']
    });

    this.seoForm = this.fb.group({
      globalTitle: ['', [Validators.required]],
      globalDescription: ['', [Validators.required]],
      keywordsRaw: ['', [Validators.required]] // Comma-separated
    });
  }

  loadData() {
    this.isLoading = true;
    
    this.adminService.getSettings().subscribe({
      next: (settings) => {
        this.settingsForm.patchValue({
          email: settings.email || 'rajatthakurdev24@gmail.com',
          phone: settings.phone || '7018683789',
          whatsapp: settings.whatsapp || '917018683789',
          githubUrl: settings.socialLinks?.github || '',
          linkedinUrl: settings.socialLinks?.linkedin || '',
          twitterUrl: settings.socialLinks?.twitter || '',
          themeMode: settings.themeMode || 'dark'
        });

        // Load SEO data in sequence
        this.adminService.getSEO().subscribe({
          next: (seo) => {
            this.seoForm.patchValue({
              globalTitle: seo.globalTitle || 'Rajat Thakur | Professional Angular Engineer',
              globalDescription: seo.globalDescription || 'Production-level Software Engineer with 2 years of real business application experience.',
              keywordsRaw: seo.keywords ? seo.keywords.join(', ') : 'Rajat Thakur, Angular Developer, Software Engineer'
            });
            this.isLoading = false;
          },
          error: () => this.isLoading = false
        });
      },
      error: () => this.isLoading = false
    });
  }

  submitSettings() {
    if (this.settingsForm.invalid) return;

    this.isLoading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const val = this.settingsForm.value;
    
    const formData = new FormData();
    formData.append('email', val.email);
    formData.append('phone', val.phone);
    formData.append('whatsapp', val.whatsapp);
    formData.append('themeMode', val.themeMode);
    
    const socialLinks = {
      github: val.githubUrl,
      linkedin: val.linkedinUrl,
      twitter: val.twitterUrl
    };
    formData.append('socialLinks', JSON.stringify(socialLinks));

    this.adminService.updateSettings(formData).subscribe({
      next: () => {
        this.successMessage = 'Branding settings synchronized successfully!';
        this.loadData();
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err.error?.message || 'Failed to sync branding settings.';
      }
    });
  }

  submitSEO() {
    if (this.seoForm.invalid) return;

    this.isLoading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const val = this.seoForm.value;
    const keywords = val.keywordsRaw.split(',').map((k: string) => k.trim()).filter(Boolean);

    const formData = new FormData();
    formData.append('globalTitle', val.globalTitle);
    formData.append('globalDescription', val.globalDescription);
    formData.append('keywords', JSON.stringify(keywords));

    this.adminService.updateSEO(formData).subscribe({
      next: () => {
        this.successMessage = 'Global search indexing attributes updated successfully!';
        this.loadData();
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err.error?.message || 'Failed to update SEO indexing settings.';
      }
    });
  }
}
