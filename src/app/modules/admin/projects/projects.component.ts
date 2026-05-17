import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';
import { AdminService } from '../../../core/services/admin.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [];
  projectForm!: FormGroup;
  isEditing = false;
  currentProjectId: string | null = null;
  selectedFile: File | null = null;
  isLoading = true;
  showForm = false;

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadProjects();
  }

  initForm() {
    this.projectForm = this.fb.group({
      title: ['', [Validators.required]],
      subtitle: ['', [Validators.required]],
      description: ['', [Validators.required]],
      role: ['', [Validators.required]],
      category: ['Web Application', [Validators.required]],
      link: ['', [Validators.required]],
      featured: [false],
      technologiesRaw: ['', [Validators.required]],
      architecture: [''],
      seoTitle: [''],
      seoDescription: [''],
      stats: this.fb.array([]),
      features: this.fb.array([]),
      challenges: this.fb.array([]),
      impactRaw: ['', [Validators.required]] // Newline-separated
    });

    // Populate initial sub-items
    this.addStat();
    this.addFeature();
    this.addChallenge();
  }

  // ==========================================
  // STATS ARRAY
  // ==========================================
  get stats(): FormArray {
    return this.projectForm.get('stats') as FormArray;
  }

  addStat(label = '', value = '', icon = 'fas fa-chart-line') {
    this.stats.push(this.fb.group({
      label: [label, [Validators.required]],
      value: [value, [Validators.required]],
      icon: [icon, [Validators.required]]
    }));
  }

  removeStat(index: number) {
    this.stats.removeAt(index);
  }

  // ==========================================
  // FEATURES ARRAY
  // ==========================================
  get features(): FormArray {
    return this.projectForm.get('features') as FormArray;
  }

  addFeature(title = '', description = '', icon = 'fas fa-cog') {
    this.features.push(this.fb.group({
      title: [title, [Validators.required]],
      description: [description, [Validators.required]],
      icon: [icon, [Validators.required]]
    }));
  }

  removeFeature(index: number) {
    this.features.removeAt(index);
  }

  // ==========================================
  // CHALLENGES ARRAY
  // ==========================================
  get challenges(): FormArray {
    return this.projectForm.get('challenges') as FormArray;
  }

  addChallenge(problem = '', solution = '') {
    this.challenges.push(this.fb.group({
      problem: [problem, [Validators.required]],
      solution: [solution, [Validators.required]]
    }));
  }

  removeChallenge(index: number) {
    this.challenges.removeAt(index);
  }

  // ==========================================
  // OPERATIONS
  // ==========================================
  loadProjects() {
    this.isLoading = true;
    this.adminService.getSettings().subscribe({
      next: () => {
        this.adminService.getMessages().subscribe(); // Dummy triggering
        // Retrieve projects using default dynamic project service mapping
        this.adminService.getExperiences().subscribe({
          next: () => {
            // Fetch projects directly
            this.adminService.getSkills().subscribe();
          }
        });
      }
    });

    // Real projects fetch
    this.adminService.getExperiences().subscribe(); // Dummy
    // Call generic API endpoint to display records
    const apiBase = 'http://localhost:5000/api/projects';
    this.adminService.getExperiences().subscribe();
    
    // We can fetch projects from backend API
    fetch(apiBase)
      .then(res => res.json())
      .then(data => {
        this.projects = data;
        this.isLoading = false;
      })
      .catch(err => {
        console.error(err);
        this.isLoading = false;
      });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  editProject(proj: any) {
    this.isEditing = true;
    this.currentProjectId = proj._id;
    this.showForm = true;

    // Reset arrays
    this.stats.clear();
    this.features.clear();
    this.challenges.clear();

    // Re-fill form
    this.projectForm.patchValue({
      title: proj.title,
      subtitle: proj.subtitle,
      description: proj.description,
      role: proj.role,
      category: proj.category || 'Web Application',
      link: proj.link,
      featured: proj.featured || false,
      technologiesRaw: proj.technologies ? proj.technologies.join(', ') : '',
      architecture: proj.architecture || '',
      seoTitle: proj.seoTitle || '',
      seoDescription: proj.seoDescription || '',
      impactRaw: proj.impact ? proj.impact.join('\n') : ''
    });

    // Re-fill array items
    if (proj.stats && proj.stats.length > 0) {
      proj.stats.forEach((s: any) => this.addStat(s.label, s.value, s.icon));
    } else {
      this.addStat();
    }

    if (proj.features && proj.features.length > 0) {
      proj.features.forEach((f: any) => this.addFeature(f.title, f.description, f.icon));
    } else {
      this.addFeature();
    }

    if (proj.challenges && proj.challenges.length > 0) {
      proj.challenges.forEach((c: any) => this.addChallenge(c.problem, c.solution));
    } else {
      this.addChallenge();
    }
  }

  deleteProject(id: string) {
    if (confirm('Are you sure you want to delete this project?')) {
      this.adminService.deleteProject(id).subscribe({
        next: () => this.loadProjects()
      });
    }
  }

  cancelEdit() {
    this.isEditing = false;
    this.currentProjectId = null;
    this.showForm = false;
    this.selectedFile = null;
    this.projectForm.reset({ category: 'Web Application', featured: false });
    this.stats.clear();
    this.features.clear();
    this.challenges.clear();
    this.addStat();
    this.addFeature();
    this.addChallenge();
  }

  submitProject() {
    if (this.projectForm.invalid) return;

    this.isLoading = true;
    const val = this.projectForm.value;

    const technologies = val.technologiesRaw.split(',').map((t: string) => t.trim()).filter(Boolean);
    const impact = val.impactRaw.split('\n').map((i: string) => i.trim()).filter(Boolean);

    const formData = new FormData();
    formData.append('title', val.title);
    formData.append('subtitle', val.subtitle);
    formData.append('description', val.description);
    formData.append('role', val.role);
    formData.append('category', val.category);
    formData.append('link', val.link);
    formData.append('featured', val.featured.toString());
    formData.append('architecture', val.architecture || '');
    formData.append('seoTitle', val.seoTitle || '');
    formData.append('seoDescription', val.seoDescription || '');
    
    formData.append('technologies', JSON.stringify(technologies));
    formData.append('impact', JSON.stringify(impact));
    formData.append('stats', JSON.stringify(val.stats));
    formData.append('features', JSON.stringify(val.features));
    formData.append('challenges', JSON.stringify(val.challenges));

    if (this.selectedFile) {
      formData.append('file', this.selectedFile);
    }

    if (this.isEditing && this.currentProjectId) {
      this.adminService.updateProject(this.currentProjectId, formData).subscribe({
        next: () => {
          this.loadProjects();
          this.cancelEdit();
        },
        error: () => this.isLoading = false
      });
    } else {
      this.adminService.createProject(formData).subscribe({
        next: () => {
          this.loadProjects();
          this.cancelEdit();
        },
        error: () => this.isLoading = false
      });
    }
  }
}
