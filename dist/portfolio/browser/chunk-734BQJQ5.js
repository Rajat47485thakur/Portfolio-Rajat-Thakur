import {
  AdminService
} from "./chunk-4CEA4EDS.js";
import "./chunk-OP5ZAXAP.js";
import {
  DomSanitizer
} from "./chunk-Q4EEFISQ.js";
import {
  CommonModule,
  NgClass,
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵsanitizeResourceUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-XQCDMNXV.js";

// src/app/modules/admin/resume/resume.component.ts
var _c0 = (a0) => ({ "has-file": a0 });
function ResumeComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "i", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage, " ");
  }
}
function ResumeComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "i", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function ResumeComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "i", 28);
    \u0275\u0275elementStart(2, "span", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.selectedFile.name);
  }
}
function ResumeComponent_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 30);
    \u0275\u0275text(2, " Upload to CDN");
    \u0275\u0275elementEnd();
  }
}
function ResumeComponent_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275element(1, "span", 32);
    \u0275\u0275text(2, " Syncing PDF... ");
    \u0275\u0275elementEnd();
  }
}
function ResumeComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275element(1, "i", 34);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No active resume PDF found in settings. Upload one to configure.");
    \u0275\u0275elementEnd()();
  }
}
function ResumeComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "iframe", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.safeResumeUrl, \u0275\u0275sanitizeResourceUrl);
  }
}
var ResumeComponent = class _ResumeComponent {
  constructor(adminService, sanitizer) {
    this.adminService = adminService;
    this.sanitizer = sanitizer;
    this.resumeUrl = "";
    this.safeResumeUrl = null;
    this.selectedFile = null;
    this.isUploading = false;
    this.successMessage = "";
    this.errorMessage = "";
  }
  ngOnInit() {
    this.loadResume();
  }
  loadResume() {
    this.adminService.getSettings().subscribe({
      next: (settings) => {
        this.resumeUrl = settings.resumePdfUrl;
        if (settings.resumePdfUrl) {
          this.safeResumeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(settings.resumePdfUrl);
        }
      },
      error: (err) => console.error("Failed to load branding settings", err)
    });
  }
  onFileSelected(event) {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      this.selectedFile = file;
      this.errorMessage = "";
    } else {
      this.errorMessage = "Please select a valid PDF document.";
      this.selectedFile = null;
    }
  }
  uploadResume() {
    if (!this.selectedFile)
      return;
    this.isUploading = true;
    this.successMessage = "";
    this.errorMessage = "";
    const formData = new FormData();
    formData.append("resumePdf", this.selectedFile);
    this.adminService.updateSettings(formData).subscribe({
      next: (res) => {
        this.isUploading = false;
        this.resumeUrl = res.resumePdfUrl;
        this.safeResumeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(res.resumePdfUrl);
        this.selectedFile = null;
        this.successMessage = "Resume PDF uploaded and compiled successfully!";
      },
      error: (err) => {
        this.isUploading = false;
        this.errorMessage = err.error?.message || "Failed to upload resume PDF file.";
      }
    });
  }
  static {
    this.\u0275fac = function ResumeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ResumeComponent)(\u0275\u0275directiveInject(AdminService), \u0275\u0275directiveInject(DomSanitizer));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResumeComponent, selectors: [["app-resume"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 29, vars: 11, consts: [[1, "resume-manager-wrapper"], [1, "row", "g-4"], [1, "col-lg-4"], [1, "glass-card", "p-4"], [1, "text-white", "font-outfit", "fw-bold", "mb-4"], [1, "fas", "fa-file-upload", "text-accent", "me-2"], ["class", "alert alert-success-custom mb-3", 4, "ngIf"], ["class", "alert alert-danger-custom mb-3", 4, "ngIf"], [1, "upload-dropzone", "p-4", "text-center", "mb-4", 3, "ngClass"], [1, "far", "fa-file-pdf", "display-4", "text-muted", "mb-3"], [1, "text-white", "small", "mb-2"], [1, "text-muted", "small", "block", "mb-3"], [1, "btn", "btn-sm", "btn-dark-custom", "mb-0"], ["type", "file", "accept", ".pdf", 2, "display", "none", 3, "change"], ["class", "selected-file-badge mt-3 p-2 rounded", 4, "ngIf"], [1, "btn-submit", "font-outfit", 3, "click", "disabled"], [4, "ngIf"], ["class", "d-flex align-items-center justify-content-center", 4, "ngIf"], [1, "col-lg-8"], [1, "glass-card", "p-4", "h-100", "min-h-600"], [1, "far", "fa-eye", "text-accent", "me-2"], ["class", "text-center py-5 text-muted", 4, "ngIf"], ["class", "pdf-iframe-container", 4, "ngIf"], [1, "alert", "alert-success-custom", "mb-3"], [1, "fas", "fa-check-circle", "me-2"], [1, "alert", "alert-danger-custom", "mb-3"], [1, "fas", "fa-exclamation-triangle", "me-2"], [1, "selected-file-badge", "mt-3", "p-2", "rounded"], [1, "fas", "fa-paperclip", "text-accent", "me-2"], [1, "text-white", "small"], [1, "fas", "fa-cloud-upload-alt", "me-2"], [1, "d-flex", "align-items-center", "justify-content-center"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-2"], [1, "text-center", "py-5", "text-muted"], [1, "fas", "fa-file-signature", "display-3", "mb-3"], [1, "pdf-iframe-container"], ["width", "100%", "height", "550px", "frameborder", "0", 3, "src"]], template: function ResumeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h5", 4);
        \u0275\u0275element(5, "i", 5);
        \u0275\u0275text(6, " Upload PDF Resume");
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, ResumeComponent_div_7_Template, 3, 1, "div", 6)(8, ResumeComponent_div_8_Template, 3, 1, "div", 7);
        \u0275\u0275elementStart(9, "div", 8);
        \u0275\u0275element(10, "i", 9);
        \u0275\u0275elementStart(11, "p", 10);
        \u0275\u0275text(12, "Drag and drop your ATS-optimized PDF resume here");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "span", 11);
        \u0275\u0275text(14, "or");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "label", 12);
        \u0275\u0275text(16, " Browse File ");
        \u0275\u0275elementStart(17, "input", 13);
        \u0275\u0275listener("change", function ResumeComponent_Template_input_change_17_listener($event) {
          return ctx.onFileSelected($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(18, ResumeComponent_div_18_Template, 4, 1, "div", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "button", 15);
        \u0275\u0275listener("click", function ResumeComponent_Template_button_click_19_listener() {
          return ctx.uploadResume();
        });
        \u0275\u0275template(20, ResumeComponent_span_20_Template, 3, 0, "span", 16)(21, ResumeComponent_span_21_Template, 3, 0, "span", 17);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "div", 18)(23, "div", 19)(24, "h5", 4);
        \u0275\u0275element(25, "i", 20);
        \u0275\u0275text(26, " Interactive Resume Preview");
        \u0275\u0275elementEnd();
        \u0275\u0275template(27, ResumeComponent_div_27_Template, 4, 0, "div", 21)(28, ResumeComponent_div_28_Template, 2, 1, "div", 22);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.successMessage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.errorMessage);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c0, ctx.selectedFile));
        \u0275\u0275advance(9);
        \u0275\u0275property("ngIf", ctx.selectedFile);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.selectedFile || ctx.isUploading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isUploading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isUploading);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", !ctx.resumeUrl);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.safeResumeUrl);
      }
    }, dependencies: [CommonModule, NgClass, NgIf], styles: ["\n\n.resume-manager-wrapper[_ngcontent-%COMP%] {\n  padding-bottom: 2rem;\n}\n.min-h-600[_ngcontent-%COMP%] {\n  min-height: 600px;\n}\n.upload-dropzone[_ngcontent-%COMP%] {\n  border: 2px dashed rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.01);\n  transition: all 0.3s ease;\n}\n.upload-dropzone.has-file[_ngcontent-%COMP%] {\n  border-color: #00f2fe;\n  background: rgba(0, 242, 254, 0.02);\n}\n.upload-dropzone[_ngcontent-%COMP%]:hover {\n  border-color: rgba(0, 242, 254, 0.3);\n}\n.selected-file-badge[_ngcontent-%COMP%] {\n  background: rgba(0, 242, 254, 0.05);\n  border: 1px solid rgba(0, 242, 254, 0.15);\n  display: inline-flex;\n  align-items: center;\n  max-width: 100%;\n}\n.alert-success-custom[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  border: 1px solid rgba(16, 185, 129, 0.2);\n  color: #a7f3d0;\n  padding: 0.75rem 1rem;\n  border-radius: 8px;\n  font-size: 0.85rem;\n}\n.alert-danger-custom[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  border: 1px solid rgba(239, 68, 68, 0.2);\n  color: #f87171;\n  padding: 0.75rem 1rem;\n  border-radius: 8px;\n  font-size: 0.85rem;\n}\n.pdf-iframe-container[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  overflow: hidden;\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  background: #0f172a;\n}\n/*# sourceMappingURL=resume.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResumeComponent, { className: "ResumeComponent", filePath: "src\\app\\modules\\admin\\resume\\resume.component.ts", lineNumber: 13 });
})();
export {
  ResumeComponent
};
//# sourceMappingURL=chunk-734BQJQ5.js.map
