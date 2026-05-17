import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AdminService } from '../../../core/services/admin.service';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent implements OnInit {
  blogs: any[] = [];
  blogForm!: FormGroup;
  isEditing = false;
  currentBlogId: string | null = null;
  selectedFile: File | null = null;
  isLoading = true;
  showForm = false;

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadBlogs();
  }

  initForm() {
    this.blogForm = this.fb.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]],
      tagsRaw: ['', [Validators.required]],
      status: ['published', [Validators.required]],
      seoTitle: [''],
      seoDescription: ['']
    });
  }

  loadBlogs() {
    this.isLoading = true;
    
    // Fallback search route mapping to public blog collection fetches
    const apiBase = 'http://localhost:5000/api/blogs';
    this.adminService.getSettings().subscribe(); // Dummy
    
    fetch(apiBase)
      .then(res => res.json())
      .then(data => {
        this.blogs = data;
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

  editBlog(blog: any) {
    this.isEditing = true;
    this.currentBlogId = blog._id;
    this.showForm = true;

    this.blogForm.patchValue({
      title: blog.title,
      content: blog.content,
      tagsRaw: blog.tags ? blog.tags.join(', ') : '',
      status: blog.status || 'published',
      seoTitle: blog.seoTitle || '',
      seoDescription: blog.seoDescription || ''
    });
  }

  deleteBlog(id: string) {
    if (confirm('Are you sure you want to delete this technical article?')) {
      this.adminService.deleteBlog(id).subscribe({
        next: () => this.loadBlogs()
      });
    }
  }

  cancelEdit() {
    this.isEditing = false;
    this.currentBlogId = null;
    this.showForm = false;
    this.selectedFile = null;
    this.blogForm.reset({ status: 'published' });
  }

  submitBlog() {
    if (this.blogForm.invalid) return;

    this.isLoading = true;
    const val = this.blogForm.value;

    const tags = val.tagsRaw.split(',').map((t: string) => t.trim()).filter(Boolean);

    const formData = new FormData();
    formData.append('title', val.title);
    formData.append('content', val.content);
    formData.append('status', val.status);
    formData.append('seoTitle', val.seoTitle || '');
    formData.append('seoDescription', val.seoDescription || '');
    formData.append('tags', JSON.stringify(tags));

    if (this.selectedFile) {
      formData.append('file', this.selectedFile);
    }

    if (this.isEditing && this.currentBlogId) {
      this.adminService.updateBlog(this.currentBlogId, formData).subscribe({
        next: () => {
          this.loadBlogs();
          this.cancelEdit();
        },
        error: () => this.isLoading = false
      });
    } else {
      this.adminService.createBlog(formData).subscribe({
        next: () => {
          this.loadBlogs();
          this.cancelEdit();
        },
        error: () => this.isLoading = false
      });
    }
  }
}
