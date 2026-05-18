import {
  AdminService
} from "./chunk-4CEA4EDS.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-QITNANFH.js";
import "./chunk-OP5ZAXAP.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-XQCDMNXV.js";

// src/app/modules/admin/blogs/blogs.component.ts
function BlogsComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function BlogsComponent_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm = true);
    });
    \u0275\u0275element(1, "i", 9);
    \u0275\u0275text(2, " Compose Article ");
    \u0275\u0275elementEnd();
  }
}
function BlogsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "h5", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 12);
    \u0275\u0275listener("ngSubmit", function BlogsComponent_div_6_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitBlog());
    });
    \u0275\u0275elementStart(4, "div", 13)(5, "div", 14)(6, "label", 15);
    \u0275\u0275text(7, "Article Title");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 17)(10, "label", 15);
    \u0275\u0275text(11, "Log Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 18)(13, "option", 19);
    \u0275\u0275text(14, "Published (Visible)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 20);
    \u0275\u0275text(16, "Draft (Restricted)");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "div", 13)(18, "div", 21)(19, "label", 15);
    \u0275\u0275text(20, "Category Tags (Comma-separated list)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 21)(23, "label", 15);
    \u0275\u0275text(24, "Cover Featured Image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 23);
    \u0275\u0275listener("change", function BlogsComponent_div_6_Template_input_change_25_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFileSelected($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 24)(27, "label", 15);
    \u0275\u0275text(28, "Article Content (Supports clean Markdown syntax)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "textarea", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 26)(31, "div", 21)(32, "label", 15);
    \u0275\u0275text(33, "SEO Custom Title Override");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "input", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 21)(36, "label", 15);
    \u0275\u0275text(37, "SEO Custom Meta Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "input", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 29)(40, "button", 30);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 31);
    \u0275\u0275listener("click", function BlogsComponent_div_6_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelEdit());
    });
    \u0275\u0275text(43, "Cancel");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditing ? "Edit Engineering Log" : "Compose New Engineering Log", " ");
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.blogForm);
    \u0275\u0275advance(37);
    \u0275\u0275property("disabled", ctx_r1.blogForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditing ? "Save Changes" : "Publish Article", " ");
  }
}
function BlogsComponent_div_7_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 38);
    \u0275\u0275text(2, "No technical articles composed yet.");
    \u0275\u0275elementEnd()();
  }
}
function BlogsComponent_div_7_tr_19_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" #", tag_r5, " ");
  }
}
function BlogsComponent_div_7_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 39);
    \u0275\u0275element(3, "img", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 41);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "span", 42);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "div", 43);
    \u0275\u0275template(11, BlogsComponent_div_7_tr_19_span_11_Template, 2, 1, "span", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 35)(16, "div", 45)(17, "button", 46);
    \u0275\u0275listener("click", function BlogsComponent_div_7_tr_19_Template_button_click_17_listener() {
      const blog_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editBlog(blog_r6));
    });
    \u0275\u0275element(18, "i", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 48);
    \u0275\u0275listener("click", function BlogsComponent_div_7_tr_19_Template_button_click_19_listener() {
      const blog_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteBlog(blog_r6._id));
    });
    \u0275\u0275element(20, "i", 49);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const blog_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", blog_r6.featuredImage || "./assets/technologies/js.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(blog_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", blog_r6.status === "published" ? "bg-success" : "bg-warning text-dark");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", blog_r6.status, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", blog_r6.tags);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 6, blog_r6.createdAt, "mediumDate"));
  }
}
function BlogsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "table", 34)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "Cover");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Article Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Category Tags");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Date Published");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 35);
    \u0275\u0275text(16, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275template(18, BlogsComponent_div_7_tr_18_Template, 3, 0, "tr", 36)(19, BlogsComponent_div_7_tr_19_Template, 21, 9, "tr", 37);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275property("ngIf", ctx_r1.blogs.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.blogs);
  }
}
function BlogsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275element(1, "div", 52);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading career logs catalog...");
    \u0275\u0275elementEnd()();
  }
}
var BlogsComponent = class _BlogsComponent {
  constructor(fb, adminService) {
    this.fb = fb;
    this.adminService = adminService;
    this.blogs = [];
    this.isEditing = false;
    this.currentBlogId = null;
    this.selectedFile = null;
    this.isLoading = true;
    this.showForm = false;
  }
  ngOnInit() {
    this.initForm();
    this.loadBlogs();
  }
  initForm() {
    this.blogForm = this.fb.group({
      title: ["", [Validators.required]],
      content: ["", [Validators.required]],
      tagsRaw: ["", [Validators.required]],
      status: ["published", [Validators.required]],
      seoTitle: [""],
      seoDescription: [""]
    });
  }
  loadBlogs() {
    this.isLoading = true;
    const apiBase = "http://localhost:5000/api/blogs";
    this.adminService.getSettings().subscribe();
    fetch(apiBase).then((res) => res.json()).then((data) => {
      this.blogs = data;
      this.isLoading = false;
    }).catch((err) => {
      console.error(err);
      this.isLoading = false;
    });
  }
  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }
  editBlog(blog) {
    this.isEditing = true;
    this.currentBlogId = blog._id;
    this.showForm = true;
    this.blogForm.patchValue({
      title: blog.title,
      content: blog.content,
      tagsRaw: blog.tags ? blog.tags.join(", ") : "",
      status: blog.status || "published",
      seoTitle: blog.seoTitle || "",
      seoDescription: blog.seoDescription || ""
    });
  }
  deleteBlog(id) {
    if (confirm("Are you sure you want to delete this technical article?")) {
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
    this.blogForm.reset({ status: "published" });
  }
  submitBlog() {
    if (this.blogForm.invalid)
      return;
    this.isLoading = true;
    const val = this.blogForm.value;
    const tags = val.tagsRaw.split(",").map((t) => t.trim()).filter(Boolean);
    const formData = new FormData();
    formData.append("title", val.title);
    formData.append("content", val.content);
    formData.append("status", val.status);
    formData.append("seoTitle", val.seoTitle || "");
    formData.append("seoDescription", val.seoDescription || "");
    formData.append("tags", JSON.stringify(tags));
    if (this.selectedFile) {
      formData.append("file", this.selectedFile);
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
  static {
    this.\u0275fac = function BlogsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BlogsComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AdminService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogsComponent, selectors: [["app-blogs"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 4, consts: [[1, "blogs-cms-wrapper"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-5"], [1, "text-white", "font-outfit", "fw-bold", "m-0"], [1, "fas", "fa-pen-nib", "text-accent", "me-2"], ["class", "bt btn-sm btn-accent-custom", 3, "click", 4, "ngIf"], ["class", "glass-card p-4 mb-5", 4, "ngIf"], ["class", "glass-card p-4", 4, "ngIf"], ["class", "text-center py-5 text-muted", 4, "ngIf"], [1, "bt", "btn-sm", "btn-accent-custom", 3, "click"], [1, "fas", "fa-plus", "me-1"], [1, "glass-card", "p-4", "mb-5"], [1, "text-white", "font-outfit", "fw-bold", "mb-4"], [3, "ngSubmit", "formGroup"], [1, "row", "g-3", "mb-4"], [1, "col-md-8"], [1, "form-label", "text-white"], ["type", "text", "placeholder", "e.g. Advanced Routing Abstractions in Angular SSR", "formControlName", "title", 1, "form-control", "text-input"], [1, "col-md-4"], ["formControlName", "status", 1, "form-control", "text-input"], ["value", "published"], ["value", "draft"], [1, "col-md-6"], ["type", "text", "placeholder", "Angular, SSR, Architecture", "formControlName", "tagsRaw", 1, "form-control", "text-input"], ["type", "file", "accept", "image/*", 1, "form-control", "text-input", 3, "change"], [1, "form-group", "mb-4"], ["rows", "12", "placeholder", "## Understanding SSR Pipelines...\n\nAngular server-side rendering loads static tags quickly...", "formControlName", "content", 1, "form-control", "text-input", "font-inter"], [1, "row", "g-3", "mb-5", "border-top", "border-secondary", "pt-4"], ["type", "text", "placeholder", "Leave empty to auto-generate", "formControlName", "seoTitle", 1, "form-control", "text-input"], ["type", "text", "placeholder", "Leave empty to auto-generate", "formControlName", "seoDescription", 1, "form-control", "text-input"], [1, "d-flex", "gap-2"], ["type", "submit", 1, "btn-submit", "font-outfit", "px-4", 3, "disabled"], ["type", "button", 1, "btn", "btn-dark-custom", "px-4", 3, "click"], [1, "glass-card", "p-4"], [1, "table-responsive"], [1, "table", "table-dark-custom", "m-0"], [1, "text-end"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["colspan", "6", 1, "text-center", "py-5", "text-muted"], [1, "table-img-wrapper"], [1, "img-fluid", "rounded", 2, "max-height", "40px", 3, "src"], [1, "text-white", "fw-semibold", "max-w-200", "truncate"], [1, "badge", 3, "ngClass"], [1, "d-flex", "flex-wrap", "gap-1", "max-w-200"], ["class", "badge bg-dark text-accent border border-secondary", 4, "ngFor", "ngForOf"], [1, "d-inline-flex", "gap-2"], ["title", "Edit", 1, "btn", "btn-sm", "btn-accent-custom", 3, "click"], [1, "fas", "fa-edit"], ["title", "Delete", 1, "btn", "btn-sm", "btn-danger-custom", 3, "click"], [1, "fas", "fa-trash-alt"], [1, "badge", "bg-dark", "text-accent", "border", "border-secondary"], [1, "text-center", "py-5", "text-muted"], ["role", "status", 1, "spinner-border", "text-info", "mb-3"]], template: function BlogsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4", 2);
        \u0275\u0275element(3, "i", 3);
        \u0275\u0275text(4, " Dynamic Technical Articles Manager");
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, BlogsComponent_button_5_Template, 3, 0, "button", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, BlogsComponent_div_6_Template, 44, 4, "div", 5)(7, BlogsComponent_div_7_Template, 20, 2, "div", 6)(8, BlogsComponent_div_8_Template, 4, 0, "div", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", !ctx.showForm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showForm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoading);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DatePipe, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.blogs-cms-wrapper[_ngcontent-%COMP%] {\n  padding-bottom: 2rem;\n}\n.max-w-200[_ngcontent-%COMP%] {\n  max-width: 200px;\n}\n.truncate[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 500;\n  margin-bottom: 0.5rem;\n}\n.text-input[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.6);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  border-radius: 8px;\n  color: #ffffff;\n  padding: 0.65rem 1rem;\n  font-size: 0.95rem;\n  transition: all 0.2s ease;\n}\n.text-input[_ngcontent-%COMP%]:focus {\n  background: rgba(15, 23, 42, 0.85);\n  border-color: #00f2fe;\n  box-shadow: 0 0 8px rgba(0, 242, 254, 0.15);\n}\n.table-dark-custom[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #cbd5e1;\n}\n.table-dark-custom[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  color: #ffffff;\n  font-weight: 600;\n  font-size: 0.85rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  padding: 1rem;\n  background: rgba(255, 255, 255, 0.02);\n}\n.table-dark-custom[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  padding: 1rem;\n  vertical-align: middle;\n  font-size: 0.95rem;\n  background: transparent;\n}\n.table-dark-custom[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background-color 0.2s ease;\n}\n.table-dark-custom[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.01);\n}\n.table-img-wrapper[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 40px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.02);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  border-radius: 4px;\n}\n/*# sourceMappingURL=blogs.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogsComponent, { className: "BlogsComponent", filePath: "src\\app\\modules\\admin\\blogs\\blogs.component.ts", lineNumber: 13 });
})();
export {
  BlogsComponent
};
//# sourceMappingURL=chunk-LDZVC4HO.js.map
