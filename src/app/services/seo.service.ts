import { Injectable, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(DOCUMENT) private document: Document
  ) { }

  generateTags(config: {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    slug?: string;
  }) {
    // 1. Set Page Title
    this.titleService.setTitle(config.title);

    // 2. Core Search Engine Meta Tags
    this.metaService.updateTag({ name: 'description', content: config.description });
    
    const keywordsVal = config.keywords || 
      'Angular Developer, Software Engineer, Angular SSR, Node.js Developer, WebSockets, RxJS, Enterprise Dashboards, Web Development, Frontend Architect';
    this.metaService.updateTag({ name: 'keywords', content: keywordsVal });

    // Open Graph / Facebook Meta Tags
    this.metaService.updateTag({ property: 'og:title', content: config.title });
    this.metaService.updateTag({ property: 'og:description', content: config.description });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:url', content: `https://rajatthakur.dev/${config.slug || ''}` });
    this.metaService.updateTag({ property: 'og:image', content: config.image || 'https://rajatthakur.dev/assets/profile.png' });

    // Twitter Card Meta Tags
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: config.title });
    this.metaService.updateTag({ name: 'twitter:description', content: config.description });
    this.metaService.updateTag({ name: 'twitter:image', content: config.image || 'https://rajatthakur.dev/assets/profile.png' });

    // 3. Manage Canonical URL dynamically
    this.setCanonicalURL(`https://rajatthakur.dev/${config.slug || ''}`);
  }

  private setCanonicalURL(url: string) {
    let link: HTMLLinkElement | null = this.document.querySelector("link[rel='canonical']");
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
