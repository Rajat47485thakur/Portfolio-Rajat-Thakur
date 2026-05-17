import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AdminService } from '../../../core/services/admin.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {
  skills: any[] = [];
  skillForm!: FormGroup;
  isEditing = false;
  currentSkillId: string | null = null;
  isLoading = true;
  showForm = false;

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadSkills();
  }

  initForm() {
    this.skillForm = this.fb.group({
      name: ['', [Validators.required]],
      proficiency: [90, [Validators.required, Validators.min(0), Validators.max(100)]],
      icon: ['./assets/technologies/html.png', [Validators.required]],
      category: ['Frontend', [Validators.required]],
      ordering: [1, [Validators.required]]
    });
  }

  loadSkills() {
    this.isLoading = true;
    this.adminService.getSkills().subscribe({
      next: (data) => {
        this.skills = data.sort((a, b) => {
          if (a.category !== b.category) {
            return a.category.localeCompare(b.category);
          }
          return (a.ordering || 99) - (b.ordering || 99);
        });
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to load skills list', err);
        this.isLoading = false;
      }
    });
  }

  editSkill(skill: any) {
    this.isEditing = true;
    this.currentSkillId = skill._id;
    this.showForm = true;

    this.skillForm.patchValue({
      name: skill.name,
      proficiency: skill.proficiency,
      icon: skill.icon,
      category: skill.category || 'Frontend',
      ordering: skill.ordering || 1
    });
  }

  deleteSkill(id: string) {
    if (confirm('Are you sure you want to delete this technical capability?')) {
      this.adminService.deleteSkill(id).subscribe({
        next: () => this.loadSkills()
      });
    }
  }

  cancelEdit() {
    this.isEditing = false;
    this.currentSkillId = null;
    this.showForm = false;
    this.skillForm.reset({ proficiency: 90, icon: './assets/technologies/html.png', category: 'Frontend', ordering: 1 });
  }

  submitSkill() {
    if (this.skillForm.invalid) return;

    const payload = this.skillForm.value;

    if (this.isEditing && this.currentSkillId) {
      this.adminService.updateSkill(this.currentSkillId, payload).subscribe({
        next: () => {
          this.loadSkills();
          this.cancelEdit();
        }
      });
    } else {
      this.adminService.createSkill(payload).subscribe({
        next: () => {
          this.loadSkills();
          this.cancelEdit();
        }
      });
    }
  }
}
