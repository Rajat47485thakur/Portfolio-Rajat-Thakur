import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AdminService } from '../../../core/services/admin.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {
  experiences: any[] = [];
  experienceForm!: FormGroup;
  isEditing = false;
  currentExpId: string | null = null;
  isLoading = true;
  showForm = false;

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadExperiences();
  }

  initForm() {
    this.experienceForm = this.fb.group({
      company: ['', [Validators.required]],
      role: ['', [Validators.required]],
      duration: ['', [Validators.required]],
      ordering: [1, [Validators.required]],
      currentlyWorking: [false],
      technologiesRaw: ['', [Validators.required]], // Comma-separated
      achievementsRaw: ['', [Validators.required]] // Newline-separated
    });
  }

  loadExperiences() {
    this.isLoading = true;
    this.adminService.getExperiences().subscribe({
      next: (data) => {
        this.experiences = data.sort((a, b) => (a.ordering || 99) - (b.ordering || 99));
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to load experiences', err);
        this.isLoading = false;
      }
    });
  }

  editExperience(exp: any) {
    this.isEditing = true;
    this.currentExpId = exp._id;
    this.showForm = true;

    this.experienceForm.patchValue({
      company: exp.company,
      role: exp.role,
      duration: exp.duration,
      ordering: exp.ordering || 1,
      currentlyWorking: exp.currentlyWorking || false,
      technologiesRaw: exp.technologies ? exp.technologies.join(', ') : '',
      achievementsRaw: exp.achievements ? exp.achievements.join('\n') : ''
    });
  }

  deleteExperience(id: string) {
    if (confirm('Are you sure you want to delete this career milestone?')) {
      this.adminService.deleteExperience(id).subscribe({
        next: () => this.loadExperiences()
      });
    }
  }

  cancelEdit() {
    this.isEditing = false;
    this.currentExpId = null;
    this.showForm = false;
    this.experienceForm.reset({ ordering: 1, currentlyWorking: false });
  }

  submitExperience() {
    if (this.experienceForm.invalid) return;

    const val = this.experienceForm.value;
    
    // Parse commas & newlines
    const technologies = val.technologiesRaw.split(',').map((t: string) => t.trim()).filter(Boolean);
    const achievements = val.achievementsRaw.split('\n').map((a: string) => a.trim()).filter(Boolean);

    const payload = {
      company: val.company,
      role: val.role,
      duration: val.duration,
      ordering: val.ordering,
      currentlyWorking: val.currentlyWorking,
      technologies,
      achievements
    };

    if (this.isEditing && this.currentExpId) {
      this.adminService.updateExperience(this.currentExpId, payload).subscribe({
        next: () => {
          this.loadExperiences();
          this.cancelEdit();
        }
      });
    } else {
      this.adminService.createExperience(payload).subscribe({
        next: () => {
          this.loadExperiences();
          this.cancelEdit();
        }
      });
    }
  }
}
