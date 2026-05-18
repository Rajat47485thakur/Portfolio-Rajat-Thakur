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
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-QITNANFH.js";
import "./chunk-OP5ZAXAP.js";
import {
  CommonModule,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-XQCDMNXV.js";

// src/app/modules/admin/settings/settings.component.ts
function SettingsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "i", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage, " ");
  }
}
function SettingsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "i", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function SettingsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "div", 15)(3, "h5", 16);
    \u0275\u0275element(4, "i", 17);
    \u0275\u0275text(5, " Contact & Social Profiles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "form", 18);
    \u0275\u0275listener("ngSubmit", function SettingsComponent_div_9_Template_form_ngSubmit_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submitSettings());
    });
    \u0275\u0275elementStart(7, "div", 19)(8, "label", 20);
    \u0275\u0275text(9, "Contact Email Address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 22)(12, "div", 23)(13, "label", 20);
    \u0275\u0275text(14, "Active Phone (Redirection Target)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 23)(17, "label", 20);
    \u0275\u0275text(18, "WhatsApp Target ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 19)(21, "label", 20);
    \u0275\u0275text(22, "GitHub Account Link");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 19)(25, "label", 20);
    \u0275\u0275text(26, "LinkedIn Account Link");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 28)(29, "label", 20);
    \u0275\u0275text(30, "Twitter / X Account Link");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "input", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 30);
    \u0275\u0275text(33, " Save Branding Profile ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(34, "div", 14)(35, "div", 15)(36, "h5", 16);
    \u0275\u0275element(37, "i", 31);
    \u0275\u0275text(38, " Site-Wide SEO Catalog");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "form", 18);
    \u0275\u0275listener("ngSubmit", function SettingsComponent_div_9_Template_form_ngSubmit_39_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submitSEO());
    });
    \u0275\u0275elementStart(40, "div", 19)(41, "label", 20);
    \u0275\u0275text(42, "Meta Title Template (Homepage Title)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(43, "input", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 19)(45, "label", 20);
    \u0275\u0275text(46, "Meta Description Statement");
    \u0275\u0275elementEnd();
    \u0275\u0275element(47, "textarea", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 28)(49, "label", 20);
    \u0275\u0275text(50, "Global Meta Search Keywords (Comma-separated)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(51, "textarea", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "button", 30);
    \u0275\u0275text(53, " Sync Search Attributes ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r0.settingsForm);
    \u0275\u0275advance(26);
    \u0275\u0275property("disabled", ctx_r0.settingsForm.invalid);
    \u0275\u0275advance(7);
    \u0275\u0275property("formGroup", ctx_r0.seoForm);
    \u0275\u0275advance(13);
    \u0275\u0275property("disabled", ctx_r0.seoForm.invalid);
  }
}
function SettingsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "div", 36);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading configurations data...");
    \u0275\u0275elementEnd()();
  }
}
var SettingsComponent = class _SettingsComponent {
  constructor(fb, adminService) {
    this.fb = fb;
    this.adminService = adminService;
    this.isLoading = true;
    this.successMessage = "";
    this.errorMessage = "";
  }
  ngOnInit() {
    this.initForms();
    this.loadData();
  }
  initForms() {
    this.settingsForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      phone: ["7018683789", [Validators.required]],
      // Bound to primary requirement!
      whatsapp: ["917018683789", [Validators.required]],
      // Redirect target requirement!
      githubUrl: [""],
      linkedinUrl: [""],
      twitterUrl: [""],
      themeMode: ["dark"]
    });
    this.seoForm = this.fb.group({
      globalTitle: ["", [Validators.required]],
      globalDescription: ["", [Validators.required]],
      keywordsRaw: ["", [Validators.required]]
      // Comma-separated
    });
  }
  loadData() {
    this.isLoading = true;
    this.adminService.getSettings().subscribe({
      next: (settings) => {
        this.settingsForm.patchValue({
          email: settings.email || "rajatthakurdev24@gmail.com",
          phone: settings.phone || "7018683789",
          whatsapp: settings.whatsapp || "917018683789",
          githubUrl: settings.socialLinks?.github || "",
          linkedinUrl: settings.socialLinks?.linkedin || "",
          twitterUrl: settings.socialLinks?.twitter || "",
          themeMode: settings.themeMode || "dark"
        });
        this.adminService.getSEO().subscribe({
          next: (seo) => {
            this.seoForm.patchValue({
              globalTitle: seo.globalTitle || "Rajat Thakur | Professional Angular Engineer",
              globalDescription: seo.globalDescription || "Production-level Software Engineer with 2 years of real business application experience.",
              keywordsRaw: seo.keywords ? seo.keywords.join(", ") : "Rajat Thakur, Angular Developer, Software Engineer"
            });
            this.isLoading = false;
          },
          error: () => this.isLoading = false
        });
      },
      error: () => this.isLoading = false
    });
  }
  submitSettings() {
    if (this.settingsForm.invalid)
      return;
    this.isLoading = true;
    this.successMessage = "";
    this.errorMessage = "";
    const val = this.settingsForm.value;
    const formData = new FormData();
    formData.append("email", val.email);
    formData.append("phone", val.phone);
    formData.append("whatsapp", val.whatsapp);
    formData.append("themeMode", val.themeMode);
    const socialLinks = {
      github: val.githubUrl,
      linkedin: val.linkedinUrl,
      twitter: val.twitterUrl
    };
    formData.append("socialLinks", JSON.stringify(socialLinks));
    this.adminService.updateSettings(formData).subscribe({
      next: () => {
        this.successMessage = "Branding settings synchronized successfully!";
        this.loadData();
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err.error?.message || "Failed to sync branding settings.";
      }
    });
  }
  submitSEO() {
    if (this.seoForm.invalid)
      return;
    this.isLoading = true;
    this.successMessage = "";
    this.errorMessage = "";
    const val = this.seoForm.value;
    const keywords = val.keywordsRaw.split(",").map((k) => k.trim()).filter(Boolean);
    const formData = new FormData();
    formData.append("globalTitle", val.globalTitle);
    formData.append("globalDescription", val.globalDescription);
    formData.append("keywords", JSON.stringify(keywords));
    this.adminService.updateSEO(formData).subscribe({
      next: () => {
        this.successMessage = "Global search indexing attributes updated successfully!";
        this.loadData();
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err.error?.message || "Failed to update SEO indexing settings.";
      }
    });
  }
  static {
    this.\u0275fac = function SettingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SettingsComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AdminService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["app-settings"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 4, consts: [[1, "settings-cms-wrapper"], [1, "mb-5"], [1, "text-white", "font-outfit", "fw-bold", "m-0"], [1, "fas", "fa-sliders-h", "text-accent", "me-2"], [1, "text-muted", "small", "m-0"], ["class", "alert alert-success-custom mb-4", 4, "ngIf"], ["class", "alert alert-danger-custom mb-4", 4, "ngIf"], ["class", "row g-4", 4, "ngIf"], ["class", "text-center py-5 text-muted", 4, "ngIf"], [1, "alert", "alert-success-custom", "mb-4"], [1, "fas", "fa-check-circle", "me-2"], [1, "alert", "alert-danger-custom", "mb-4"], [1, "fas", "fa-exclamation-triangle", "me-2"], [1, "row", "g-4"], [1, "col-lg-6"], [1, "glass-card", "p-4", "h-100"], [1, "text-white", "font-outfit", "fw-bold", "mb-4"], [1, "fas", "fa-id-card", "text-accent", "me-2"], [3, "ngSubmit", "formGroup"], [1, "form-group", "mb-4"], [1, "form-label", "text-white"], ["type", "email", "formControlName", "email", 1, "form-control", "text-input"], [1, "row", "g-3", "mb-4"], [1, "col-md-6"], ["type", "text", "formControlName", "phone", "placeholder", "7018683789", 1, "form-control", "text-input"], ["type", "text", "formControlName", "whatsapp", "placeholder", "917018683789", 1, "form-control", "text-input"], ["type", "text", "formControlName", "githubUrl", 1, "form-control", "text-input"], ["type", "text", "formControlName", "linkedinUrl", 1, "form-control", "text-input"], [1, "form-group", "mb-5"], ["type", "text", "formControlName", "twitterUrl", 1, "form-control", "text-input"], ["type", "submit", 1, "btn-submit", "font-outfit", "px-4", 3, "disabled"], [1, "fas", "fa-search-dollar", "text-accent", "me-2"], ["type", "text", "formControlName", "globalTitle", 1, "form-control", "text-input"], ["rows", "4", "formControlName", "globalDescription", 1, "form-control", "text-input"], ["rows", "3", "formControlName", "keywordsRaw", 1, "form-control", "text-input"], [1, "text-center", "py-5", "text-muted"], ["role", "status", 1, "spinner-border", "text-info", "mb-3"]], template: function SettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4", 2);
        \u0275\u0275element(3, "i", 3);
        \u0275\u0275text(4, " System Configuration & Branding Controls");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 4);
        \u0275\u0275text(6, "Synchronize corporate contact coordinates, social hooks, and search engine optimization (SEO) configurations.");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, SettingsComponent_div_7_Template, 3, 1, "div", 5)(8, SettingsComponent_div_8_Template, 3, 1, "div", 6)(9, SettingsComponent_div_9_Template, 54, 4, "div", 7)(10, SettingsComponent_div_10_Template, 4, 0, "div", 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.successMessage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.errorMessage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoading);
      }
    }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.settings-cms-wrapper[_ngcontent-%COMP%] {\n  padding-bottom: 2rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 500;\n  margin-bottom: 0.5rem;\n}\n.text-input[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.6);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  border-radius: 8px;\n  color: #ffffff;\n  padding: 0.65rem 1rem;\n  font-size: 0.95rem;\n  transition: all 0.2s ease;\n}\n.text-input[_ngcontent-%COMP%]:focus {\n  background: rgba(15, 23, 42, 0.85);\n  border-color: #00f2fe;\n  box-shadow: 0 0 8px rgba(0, 242, 254, 0.15);\n}\n.alert-success-custom[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  border: 1px solid rgba(16, 185, 129, 0.2);\n  color: #a7f3d0;\n  padding: 0.75rem 1rem;\n  border-radius: 8px;\n  font-size: 0.85rem;\n}\n.alert-danger-custom[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  border: 1px solid rgba(239, 68, 68, 0.2);\n  color: #f87171;\n  padding: 0.75rem 1rem;\n  border-radius: 8px;\n  font-size: 0.85rem;\n}\n/*# sourceMappingURL=settings.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "src\\app\\modules\\admin\\settings\\settings.component.ts", lineNumber: 13 });
})();
export {
  SettingsComponent
};
//# sourceMappingURL=chunk-DHKSIGLE.js.map
