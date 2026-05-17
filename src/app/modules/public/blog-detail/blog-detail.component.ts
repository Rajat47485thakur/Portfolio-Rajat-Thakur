import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BlogService, Blog } from '../../../core/services/blog.service';
import { SeoService } from '../../../services/seo.service';
import { ScrollRevealDirective } from '../../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, ScrollRevealDirective],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss'
})
export class BlogDetailComponent implements OnInit {
  blog: Blog | null = null;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private seoService: SeoService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.loadBlog(slug);
    }
  }

  loadBlog(slug: string) {
    this.isLoading = true;
    this.blogService.getBlogBySlug(slug).subscribe({
      next: (data) => {
        this.blog = data;
        this.isLoading = false;
        
        // Dynamically optimize SEO for tech blog page
        this.seoService.generateTags({
          title: `${data.seoTitle || data.title} | Rajat Thakur`,
          description: data.seoDescription || data.content.slice(0, 150),
          keywords: `Rajat Thakur, Technical Blog, ${data.tags.join(', ')}`,
          slug: `blog/${data.slug}`,
          image: data.featuredImage
        });
      },
      error: (err) => {
        console.error('Failed to load blog post', err);
        this.isLoading = false;
      }
    });
  }

  goBack() {
    this.location.back();
  }
}
