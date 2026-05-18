import {
  SeoService
} from "./chunk-636KREUN.js";
import {
  BlogService
} from "./chunk-FXOGO3PJ.js";
import {
  ScrollRevealDirective
} from "./chunk-IHPYP5LT.js";
import "./chunk-OP5ZAXAP.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-IE2EAVOT.js";
import "./chunk-Q4EEFISQ.js";
import {
  CommonModule,
  DatePipe,
  Location,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-XQCDMNXV.js";

// src/app/modules/public/blog-detail/blog-detail.component.ts
function BlogDetailComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 9);
    \u0275\u0275elementStart(2, "p", 10);
    \u0275\u0275text(3, "Loading dynamic engineering log...");
    \u0275\u0275elementEnd()();
  }
}
function BlogDetailComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "i", 12);
    \u0275\u0275elementStart(2, "h3", 13);
    \u0275\u0275text(3, "Article Not Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 10);
    \u0275\u0275text(5, "This log might have been drafted, deleted, or moved by the author.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 14);
    \u0275\u0275text(7, "Browse All Articles");
    \u0275\u0275elementEnd()();
  }
}
function BlogDetailComponent_article_9_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("#", tag_r1, "");
  }
}
function BlogDetailComponent_article_9_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "img", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.blog.featuredImage, \u0275\u0275sanitizeUrl)("alt", ctx_r1.blog.title);
  }
}
function BlogDetailComponent_article_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 15)(1, "header", 16)(2, "div", 17);
    \u0275\u0275template(3, BlogDetailComponent_article_9_span_3_Template, 2, 1, "span", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h1", 19);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 20)(7, "span");
    \u0275\u0275element(8, "i", 21);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275element(14, "i", 22);
    \u0275\u0275text(15, " Rajat Thakur");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(16, BlogDetailComponent_article_9_div_16_Template, 2, 2, "div", 23);
    \u0275\u0275elementStart(17, "section", 24)(18, "div", 25);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "footer", 26)(21, "div", 27)(22, "div", 28)(23, "h5", 29);
    \u0275\u0275text(24, "Share this Article");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 30)(26, "a", 31);
    \u0275\u0275element(27, "i", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "a", 33);
    \u0275\u0275element(29, "i", 34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 35)(31, "button", 36);
    \u0275\u0275text(32, "Have a Question? Let's Talk");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.blog.tags);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.blog.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 5, ctx_r1.blog.createdAt, "longDate"), "");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.blog.featuredImage);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.blog.content, " ");
  }
}
var BlogDetailComponent = class _BlogDetailComponent {
  constructor(route, blogService, seoService, location) {
    this.route = route;
    this.blogService = blogService;
    this.seoService = seoService;
    this.location = location;
    this.blog = null;
    this.isLoading = true;
  }
  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get("slug");
    if (slug) {
      this.loadBlog(slug);
    }
  }
  loadBlog(slug) {
    this.isLoading = true;
    this.blogService.getBlogBySlug(slug).subscribe({
      next: (data) => {
        this.blog = data;
        this.isLoading = false;
        this.seoService.generateTags({
          title: `${data.seoTitle || data.title} | Rajat Thakur`,
          description: data.seoDescription || data.content.slice(0, 150),
          keywords: `Rajat Thakur, Technical Blog, ${data.tags.join(", ")}`,
          slug: `blog/${data.slug}`,
          image: data.featuredImage
        });
      },
      error: (err) => {
        console.error("Failed to load blog post", err);
        this.isLoading = false;
      }
    });
  }
  goBack() {
    this.location.back();
  }
  static {
    this.\u0275fac = function BlogDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BlogDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(BlogService), \u0275\u0275directiveInject(SeoService), \u0275\u0275directiveInject(Location));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogDetailComponent, selectors: [["app-blog-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 3, consts: [[1, "blog-detail-wrapper", "py-5"], [1, "container", "py-5"], ["appScrollReveal", "", 1, "mb-4"], [1, "bt", "btn-outline", "d-inline-flex", "align-items-center", 3, "click"], [1, "fa", "fa-arrow-left", "me-2"], ["class", "glass-article p-5 text-center", 4, "ngIf"], ["class", "glass-article p-5 text-center", "appScrollReveal", "", 4, "ngIf"], ["class", "glass-article", "appScrollReveal", "", 4, "ngIf"], [1, "glass-article", "p-5", "text-center"], ["role", "status", 1, "spinner-border", "text-info", "mb-3"], [1, "text-muted"], ["appScrollReveal", "", 1, "glass-article", "p-5", "text-center"], [1, "fas", "fa-exclamation-circle", "display-4", "text-danger", "mb-3"], [1, "text-white", "fw-bold"], ["routerLink", "/blogs", 1, "bt", "btn-outline", "mt-3"], ["appScrollReveal", "", 1, "glass-article"], [1, "article-header", "mb-4"], [1, "d-flex", "flex-wrap", "gap-2", "mb-3"], ["class", "article-tag", 4, "ngFor", "ngForOf"], [1, "display-4", "fw-bold", "font-outfit", "text-gradient", "mb-3"], [1, "article-meta", "text-muted", "d-flex", "align-items-center", "gap-3"], [1, "far", "fa-calendar-alt", "me-1"], [1, "far", "fa-user", "me-1"], ["class", "featured-image-box mb-5", 4, "ngIf"], [1, "article-body", "font-inter", "leading-relaxed"], [1, "content-markdown", "text-white"], [1, "article-footer", "mt-5", "pt-4", "border-top", "border-secondary-subtle"], [1, "row", "align-items-center"], [1, "col-md-6"], [1, "text-white", "font-outfit", "mb-2"], [1, "d-flex", "gap-2"], ["href", "https://linkedin.com", "target", "_blank", "title", "Share on LinkedIn", 1, "social-share-btn", "linkedin"], [1, "fab", "fa-linkedin-in"], ["href", "https://twitter.com", "target", "_blank", "title", "Share on Twitter", 1, "social-share-btn", "twitter"], [1, "fab", "fa-twitter"], [1, "col-md-6", "text-md-end", "mt-4", "mt-md-0"], ["routerLink", "/contact", 1, "bt"], [1, "article-tag"], [1, "featured-image-box", "mb-5"], [1, "img-fluid", "w-100", "rounded-3", 3, "src", "alt"]], template: function BlogDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
        \u0275\u0275listener("click", function BlogDetailComponent_Template_button_click_3_listener() {
          return ctx.goBack();
        });
        \u0275\u0275element(4, "i", 4);
        \u0275\u0275elementStart(5, "span");
        \u0275\u0275text(6, "Back to Articles");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(7, BlogDetailComponent_div_7_Template, 4, 0, "div", 5)(8, BlogDetailComponent_div_8_Template, 8, 0, "div", 6)(9, BlogDetailComponent_article_9_Template, 33, 8, "article", 7);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && !ctx.blog);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.blog);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, RouterModule, RouterLink, ScrollRevealDirective], styles: ['\n\n.blog-detail-wrapper[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background-color: #0b0f19;\n  font-family: "Inter", sans-serif;\n}\n.glass-article[_ngcontent-%COMP%] {\n  background: rgba(13, 17, 23, 0.5);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  border-radius: 16px;\n  padding: 3rem;\n  max-width: 900px;\n  margin: 0 auto;\n}\n.article-tag[_ngcontent-%COMP%] {\n  color: #00f2fe;\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n.article-meta[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.featured-image-box[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  overflow: hidden;\n  border: 1px solid rgba(255, 255, 255, 0.05);\n}\n.featured-image-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 450px;\n  object-fit: cover;\n}\n.article-body[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  line-height: 1.8;\n  color: #e2e8f0;\n}\n.article-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.article-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: #ffffff;\n  margin-top: 2rem;\n  margin-bottom: 1rem;\n  font-family: "Outfit", sans-serif;\n}\n.article-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #ffffff;\n  margin-top: 1.75rem;\n  margin-bottom: 0.75rem;\n  font-family: "Outfit", sans-serif;\n}\n.article-body[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  padding: 0.2rem 0.4rem;\n  border-radius: 4px;\n  color: #f43f5e;\n  font-size: 0.9em;\n}\n.article-body[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.85);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  border-radius: 8px;\n  padding: 1.5rem;\n  overflow-x: auto;\n  margin-bottom: 1.5rem;\n}\n.article-body[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: transparent;\n  padding: 0;\n  color: #cbd5e1;\n  font-size: 0.95em;\n}\n.article-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], \n.article-body[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  padding-left: 1.5rem;\n}\n.article-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], \n.article-body[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.social-share-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  color: #cbd5e1;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  font-size: 0.95rem;\n  transition: all 0.2s ease;\n  text-decoration: none;\n}\n.social-share-btn[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n  transform: translateY(-2px);\n}\n.social-share-btn.linkedin[_ngcontent-%COMP%]:hover {\n  background: #0077b5;\n  border-color: #0077b5;\n}\n.social-share-btn.twitter[_ngcontent-%COMP%]:hover {\n  background: #1da1f2;\n  border-color: #1da1f2;\n}\n/*# sourceMappingURL=blog-detail.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogDetailComponent, { className: "BlogDetailComponent", filePath: "src\\app\\modules\\public\\blog-detail\\blog-detail.component.ts", lineNumber: 15 });
})();
export {
  BlogDetailComponent
};
//# sourceMappingURL=chunk-FIZTMLTS.js.map
