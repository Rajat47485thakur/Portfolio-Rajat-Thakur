import {
  BlogService
} from "./chunk-FXOGO3PJ.js";
import {
  ScrollRevealDirective
} from "./chunk-IHPYP5LT.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-QITNANFH.js";
import "./chunk-OP5ZAXAP.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-IE2EAVOT.js";
import "./chunk-Q4EEFISQ.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf,
  SlicePipe,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-XQCDMNXV.js";

// src/app/modules/public/blog-list/blog-list.component.ts
var _c0 = (a0) => ({ "active": a0 });
var _c1 = () => [1, 2, 3];
var _c2 = (a0) => ["/blog", a0];
function BlogListComponent_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function BlogListComponent_button_17_Template_button_click_0_listener() {
      const tag_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filterByTag(tag_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c0, ctx_r2.selectedTag === tag_r2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" #", tag_r2, " ");
  }
}
function BlogListComponent_div_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21);
    \u0275\u0275element(2, "div", 22)(3, "div", 23)(4, "div", 24)(5, "div", 25);
    \u0275\u0275elementEnd()();
  }
}
function BlogListComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275template(1, BlogListComponent_div_18_div_1_Template, 6, 0, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c1));
  }
}
function BlogListComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275element(2, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 29);
    \u0275\u0275text(4, "No Articles Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 30);
    \u0275\u0275text(6, "Try adjusting your keywords or clearing the active filters.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 31);
    \u0275\u0275listener("click", function BlogListComponent_div_19_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.searchQuery = "";
      ctx_r2.selectedTag = "";
      return \u0275\u0275resetView(ctx_r2.applyFilters());
    });
    \u0275\u0275text(8, "Reset All Filters");
    \u0275\u0275elementEnd()();
  }
}
function BlogListComponent_div_20_div_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("#", tag_r5, "");
  }
}
function BlogListComponent_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "article", 34)(2, "div", 35);
    \u0275\u0275element(3, "img", 36);
    \u0275\u0275elementStart(4, "span", 37);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 38)(8, "div", 39);
    \u0275\u0275template(9, BlogListComponent_div_20_div_1_span_9_Template, 2, 1, "span", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h3", 41)(11, "a", 42);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "p", 43);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "a", 44)(17, "span");
    \u0275\u0275text(18, "Read Full Article");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "i", 45);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const blog_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", blog_r6.featuredImage || "./assets/technologies/js.png", \u0275\u0275sanitizeUrl)("alt", blog_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 8, blog_r6.createdAt, "longDate"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", blog_r6.tags);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(15, _c2, blog_r6.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(blog_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(15, 11, blog_r6.content, 0, 120), "... ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(17, _c2, blog_r6.slug));
  }
}
function BlogListComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275template(1, BlogListComponent_div_20_div_1_Template, 20, 19, "div", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.filteredBlogs);
  }
}
var BlogListComponent = class _BlogListComponent {
  constructor(blogService) {
    this.blogService = blogService;
    this.blogs = [];
    this.filteredBlogs = [];
    this.searchQuery = "";
    this.selectedTag = "";
    this.allTags = [];
    this.isLoading = true;
  }
  ngOnInit() {
    this.loadBlogs();
  }
  loadBlogs() {
    this.isLoading = true;
    this.blogService.getBlogs({ status: "published" }).subscribe({
      next: (data) => {
        this.blogs = data;
        this.filteredBlogs = data;
        this.extractAllTags();
        this.isLoading = false;
      },
      error: (err) => {
        console.error("Failed to load published blogs", err);
        this.isLoading = false;
      }
    });
  }
  extractAllTags() {
    const tagsSet = /* @__PURE__ */ new Set();
    this.blogs.forEach((b) => {
      if (b.tags && Array.isArray(b.tags)) {
        b.tags.forEach((t) => tagsSet.add(t));
      }
    });
    this.allTags = Array.from(tagsSet);
  }
  filterByTag(tag) {
    this.selectedTag = this.selectedTag === tag ? "" : tag;
    this.applyFilters();
  }
  applyFilters() {
    let temp = [...this.blogs];
    if (this.selectedTag) {
      temp = temp.filter((b) => b.tags && b.tags.includes(this.selectedTag));
    }
    if (this.searchQuery) {
      const q = this.searchQuery.toLowerCase();
      temp = temp.filter((b) => b.title.toLowerCase().includes(q) || b.content.toLowerCase().includes(q));
    }
    this.filteredBlogs = temp;
  }
  static {
    this.\u0275fac = function BlogListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BlogListComponent)(\u0275\u0275directiveInject(BlogService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogListComponent, selectors: [["app-blog-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 5, consts: [[1, "blog-list-container", "py-5"], [1, "container", "py-5"], ["appScrollReveal", "", 1, "text-center", "mb-5"], [1, "section-label"], [1, "display-4", "fw-bold", "font-outfit", "text-gradient", "mb-3"], [1, "fs-5", "text-muted", "max-w-2xl", "mx-auto"], ["appScrollReveal", "", 1, "filter-capsule", "p-4", "mb-5"], [1, "row", "g-3", "align-items-center"], [1, "col-md-6"], [1, "search-input-group"], [1, "fas", "fa-search", "search-icon"], ["type", "text", "placeholder", "Search articles by title or keyword...", 1, "form-control", "search-input", 3, "ngModelChange", "ngModel"], [1, "col-md-6", "text-md-end"], [1, "tags-scroller", "d-flex", "flex-wrap", "gap-2", "justify-content-md-end"], ["class", "tag-pill btn btn-sm", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "row g-4", 4, "ngIf"], ["class", "text-center py-5", "appScrollReveal", "", 4, "ngIf"], [1, "tag-pill", "btn", "btn-sm", 3, "click", "ngClass"], [1, "row", "g-4"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [1, "skeleton-card"], [1, "skeleton-img"], [1, "skeleton-title"], [1, "skeleton-text"], [1, "skeleton-text", "short"], ["appScrollReveal", "", 1, "text-center", "py-5"], [1, "empty-icon-box", "mb-4"], [1, "fas", "fa-search-minus", "display-3", "text-muted"], [1, "font-outfit", "text-white", "fw-bold"], [1, "text-muted"], [1, "bt", "btn-outline", "mt-3", 3, "click"], ["class", "col-md-6 col-lg-4", "appScrollReveal", "", 4, "ngFor", "ngForOf"], ["appScrollReveal", "", 1, "col-md-6", "col-lg-4"], [1, "blog-card", "h-100"], [1, "card-image-box"], [1, "card-img", 3, "src", "alt"], [1, "pub-date"], [1, "card-body-content"], [1, "tags-row", "mb-3"], ["class", "card-tag", 4, "ngFor", "ngForOf"], [1, "card-title", "font-outfit", "h4", "mb-3"], [1, "text-white", "text-decoration-none", "hover-teal", 3, "routerLink"], [1, "card-excerpt", "text-muted", "mb-4"], [1, "read-more-link", "d-inline-flex", "align-items-center", 3, "routerLink"], [1, "fas", "fa-arrow-right", "ms-2"], [1, "card-tag"]], template: function BlogListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "header", 2)(3, "span", 3);
        \u0275\u0275text(4, "Engineering Logs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1", 4);
        \u0275\u0275text(6, "Technical Articles & Insights");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 5);
        \u0275\u0275text(8, "Deep dives into Angular architecture, Node.js scalability, state management patterns, and full-stack web engineering.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "div", 9);
        \u0275\u0275element(13, "i", 10);
        \u0275\u0275elementStart(14, "input", 11);
        \u0275\u0275twoWayListener("ngModelChange", function BlogListComponent_Template_input_ngModelChange_14_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function BlogListComponent_Template_input_ngModelChange_14_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 12)(16, "div", 13);
        \u0275\u0275template(17, BlogListComponent_button_17_Template, 2, 4, "button", 14);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(18, BlogListComponent_div_18_Template, 2, 2, "div", 15)(19, BlogListComponent_div_19_Template, 9, 0, "div", 16)(20, BlogListComponent_div_20_Template, 2, 1, "div", 15);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.allTags);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filteredBlogs.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filteredBlogs.length > 0);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, SlicePipe, DatePipe, RouterModule, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, ScrollRevealDirective], styles: ['\n\n.blog-list-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background-color: #0b0f19;\n  position: relative;\n  overflow: hidden;\n}\n.max-w-2xl[_ngcontent-%COMP%] {\n  max-width: 42rem;\n}\n.filter-capsule[_ngcontent-%COMP%] {\n  background: rgba(13, 17, 23, 0.6);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  border-radius: 16px;\n}\n.search-input-group[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.search-input-group[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1.25rem;\n  color: #94a3b8;\n  font-size: 1rem;\n}\n.search-input-group[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.8);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  border-radius: 12px;\n  padding: 0.75rem 1rem 0.75rem 3rem;\n  color: #ffffff;\n  font-size: 0.95rem;\n  transition: all 0.3s ease;\n}\n.search-input-group[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  background: rgba(15, 23, 42, 0.95);\n  border-color: #00f2fe;\n  box-shadow: 0 0 12px rgba(0, 242, 254, 0.2);\n}\n.search-input-group[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: #64748b;\n}\n.tag-pill[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.02);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  color: #94a3b8;\n  border-radius: 20px;\n  padding: 0.4rem 1rem;\n  font-weight: 500;\n  transition: all 0.2s ease;\n}\n.tag-pill[_ngcontent-%COMP%]:hover {\n  color: #00f2fe;\n  border-color: #00f2fe;\n  background: rgba(0, 242, 254, 0.02);\n}\n.tag-pill.active[_ngcontent-%COMP%] {\n  background: rgba(0, 242, 254, 0.1);\n  color: #00f2fe;\n  border-color: #00f2fe;\n  box-shadow: 0 0 8px rgba(0, 242, 254, 0.15);\n}\n.blog-card[_ngcontent-%COMP%] {\n  background: rgba(13, 17, 23, 0.5);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  border-radius: 16px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.blog-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  border-color: rgba(0, 242, 254, 0.3);\n  box-shadow: 0 10px 30px rgba(0, 242, 254, 0.05);\n}\n.blog-card[_ngcontent-%COMP%]:hover   .card-img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.card-image-box[_ngcontent-%COMP%] {\n  height: 200px;\n  position: relative;\n  overflow: hidden;\n}\n.card-image-box[_ngcontent-%COMP%]   .card-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.5s ease;\n}\n.card-image-box[_ngcontent-%COMP%]   .pub-date[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 1rem;\n  left: 1rem;\n  background: rgba(11, 15, 25, 0.85);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  color: #cbd5e1;\n  font-size: 0.8rem;\n  font-weight: 500;\n  padding: 0.35rem 0.75rem;\n  border-radius: 20px;\n  border: 1px solid rgba(255, 255, 255, 0.05);\n}\n.card-body-content[_ngcontent-%COMP%] {\n  padding: 1.75rem;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.tags-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.tags-row[_ngcontent-%COMP%]   .card-tag[_ngcontent-%COMP%] {\n  color: #00f2fe;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.hover-teal[_ngcontent-%COMP%] {\n  transition: color 0.2s ease;\n}\n.hover-teal[_ngcontent-%COMP%]:hover {\n  color: #00f2fe !important;\n}\n.card-excerpt[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  line-height: 1.6;\n}\n.read-more-link[_ngcontent-%COMP%] {\n  margin-top: auto;\n  color: #00f2fe;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 0.9rem;\n  transition: gap 0.2s ease;\n}\n.read-more-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease;\n}\n.read-more-link[_ngcontent-%COMP%]:hover {\n  color: #00f2fe;\n}\n.read-more-link[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n.skeleton-card[_ngcontent-%COMP%] {\n  background: rgba(13, 17, 23, 0.5);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  border-radius: 16px;\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.skeleton-card[_ngcontent-%COMP%]   .skeleton-img[_ngcontent-%COMP%] {\n  height: 180px;\n  background: rgba(255, 255, 255, 0.02);\n  border-radius: 8px;\n  position: relative;\n  overflow: hidden;\n}\n.skeleton-card[_ngcontent-%COMP%]   .skeleton-img[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.03),\n      transparent);\n  animation: _ngcontent-%COMP%_loading 1.5s infinite;\n}\n.skeleton-card[_ngcontent-%COMP%]   .skeleton-title[_ngcontent-%COMP%] {\n  height: 24px;\n  width: 70%;\n  background: rgba(255, 255, 255, 0.02);\n  border-radius: 4px;\n}\n.skeleton-card[_ngcontent-%COMP%]   .skeleton-text[_ngcontent-%COMP%] {\n  height: 14px;\n  background: rgba(255, 255, 255, 0.02);\n  border-radius: 4px;\n}\n.skeleton-card[_ngcontent-%COMP%]   .skeleton-text.short[_ngcontent-%COMP%] {\n  width: 40%;\n}\n@keyframes _ngcontent-%COMP%_loading {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(100%);\n  }\n}\n/*# sourceMappingURL=blog-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogListComponent, { className: "BlogListComponent", filePath: "src\\app\\modules\\public\\blog-list\\blog-list.component.ts", lineNumber: 15 });
})();
export {
  BlogListComponent
};
//# sourceMappingURL=chunk-4X72KVR2.js.map
