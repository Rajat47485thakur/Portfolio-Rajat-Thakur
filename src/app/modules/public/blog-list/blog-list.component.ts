import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BlogService, Blog } from '../../../core/services/blog.service';
import { ScrollRevealDirective } from '../../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ScrollRevealDirective],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent implements OnInit {
  blogs: Blog[] = [];
  filteredBlogs: Blog[] = [];
  searchQuery: string = '';
  selectedTag: string = '';
  allTags: string[] = [];
  isLoading = true;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.loadBlogs();
  }

  loadBlogs() {
    this.isLoading = true;
    this.blogService.getBlogs({ status: 'published' }).subscribe({
      next: (data) => {
        this.blogs = data;
        this.filteredBlogs = data;
        this.extractAllTags();
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to load published blogs', err);
        this.isLoading = false;
      }
    });
  }

  extractAllTags() {
    const tagsSet = new Set<string>();
    this.blogs.forEach(b => {
      if (b.tags && Array.isArray(b.tags)) {
        b.tags.forEach(t => tagsSet.add(t));
      }
    });
    this.allTags = Array.from(tagsSet);
  }

  filterByTag(tag: string) {
    this.selectedTag = this.selectedTag === tag ? '' : tag;
    this.applyFilters();
  }

  applyFilters() {
    let temp = [...this.blogs];

    if (this.selectedTag) {
      temp = temp.filter(b => b.tags && b.tags.includes(this.selectedTag));
    }

    if (this.searchQuery) {
      const q = this.searchQuery.toLowerCase();
      temp = temp.filter(b => 
        b.title.toLowerCase().includes(q) || 
        b.content.toLowerCase().includes(q)
      );
    }

    this.filteredBlogs = temp;
  }
}
