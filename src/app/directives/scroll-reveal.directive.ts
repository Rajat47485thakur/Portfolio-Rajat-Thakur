import { Directive, ElementRef, Renderer2, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // Initially add the 'reveal' class
    if (!this.el.nativeElement.classList.contains('reveal') &&
        !this.el.nativeElement.classList.contains('reveal-left') &&
        !this.el.nativeElement.classList.contains('reveal-right')) {
      this.renderer.addClass(this.el.nativeElement, 'reveal');
    }

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.01
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'active');
        } else {
          // Optional: Remove active class if you want it to re-animate when scrolling back
          // this.renderer.removeClass(this.el.nativeElement, 'active');
        }
      });
    }, options);

    this.observer.observe(this.el.nativeElement);

    // Initial check in case it's already in view
    setTimeout(() => {
      const rect = this.el.nativeElement.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      // If the top of the element is visible, or if the element covers the viewport
      const inView = rect.top < windowHeight && rect.bottom > 0;
      
      if (inView) {
        this.renderer.addClass(this.el.nativeElement, 'active');
      }
    }, 200);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
