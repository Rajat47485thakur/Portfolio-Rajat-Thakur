import {
  ElementRef,
  Renderer2,
  ɵɵdefineDirective,
  ɵɵdirectiveInject
} from "./chunk-XQCDMNXV.js";

// src/app/directives/scroll-reveal.directive.ts
var ScrollRevealDirective = class _ScrollRevealDirective {
  constructor(el, renderer) {
    this.el = el;
    this.renderer = renderer;
  }
  ngOnInit() {
    if (!this.el.nativeElement.classList.contains("reveal") && !this.el.nativeElement.classList.contains("reveal-left") && !this.el.nativeElement.classList.contains("reveal-right")) {
      this.renderer.addClass(this.el.nativeElement, "reveal");
    }
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.01
    };
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, "active");
        } else {
        }
      });
    }, options);
    this.observer.observe(this.el.nativeElement);
    setTimeout(() => {
      const rect = this.el.nativeElement.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const inView = rect.top < windowHeight && rect.bottom > 0;
      if (inView) {
        this.renderer.addClass(this.el.nativeElement, "active");
      }
    }, 200);
  }
  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
  static {
    this.\u0275fac = function ScrollRevealDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScrollRevealDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _ScrollRevealDirective, selectors: [["", "appScrollReveal", ""]], standalone: true });
  }
};

export {
  ScrollRevealDirective
};
//# sourceMappingURL=chunk-IHPYP5LT.js.map
