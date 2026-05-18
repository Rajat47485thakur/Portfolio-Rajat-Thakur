import {
  AdminService
} from "./chunk-4CEA4EDS.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-QITNANFH.js";
import "./chunk-OP5ZAXAP.js";
import {
  CommonModule,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-XQCDMNXV.js";

// src/app/modules/admin/experience/experience.component.ts
function ExperienceComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function ExperienceComponent_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm = true);
    });
    \u0275\u0275element(1, "i", 9);
    \u0275\u0275text(2, " Add Career Milestone ");
    \u0275\u0275elementEnd();
  }
}
function ExperienceComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "h5", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 12);
    \u0275\u0275listener("ngSubmit", function ExperienceComponent_div_6_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitExperience());
    });
    \u0275\u0275elementStart(4, "div", 13)(5, "div", 14)(6, "label", 15);
    \u0275\u0275text(7, "Company Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 14)(10, "label", 15);
    \u0275\u0275text(11, "Engineering Role");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 13)(14, "div", 18)(15, "label", 15);
    \u0275\u0275text(16, "Duration Period");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 18)(19, "label", 15);
    \u0275\u0275text(20, "Sorting Rank (Ordering)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 21)(23, "div", 22);
    \u0275\u0275element(24, "input", 23);
    \u0275\u0275elementStart(25, "label", 24);
    \u0275\u0275text(26, "Currently Working Here");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "div", 25)(28, "label", 15);
    \u0275\u0275text(29, "Core Technologies (Comma-separated list)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "input", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 27)(32, "label", 15);
    \u0275\u0275text(33, "Key Achievements & Highlights (One per line)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "textarea", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 29)(36, "button", 30);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 31);
    \u0275\u0275listener("click", function ExperienceComponent_div_6_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelEdit());
    });
    \u0275\u0275text(39, "Cancel");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditing ? "Edit Career Milestone" : "Add New Career Milestone", " ");
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.experienceForm);
    \u0275\u0275advance(33);
    \u0275\u0275property("disabled", ctx_r1.experienceForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditing ? "Save Changes" : "Create Milestone", " ");
  }
}
function ExperienceComponent_div_7_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 38);
    \u0275\u0275text(2, "No timeline milestones configured yet.");
    \u0275\u0275elementEnd()();
  }
}
function ExperienceComponent_div_7_tr_19_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tech_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tech_r5, " ");
  }
}
function ExperienceComponent_div_7_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 41);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "div", 42);
    \u0275\u0275template(12, ExperienceComponent_div_7_tr_19_span_12_Template, 2, 1, "span", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 35)(14, "div", 44)(15, "button", 45);
    \u0275\u0275listener("click", function ExperienceComponent_div_7_tr_19_Template_button_click_15_listener() {
      const exp_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editExperience(exp_r6));
    });
    \u0275\u0275element(16, "i", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 47);
    \u0275\u0275listener("click", function ExperienceComponent_div_7_tr_19_Template_button_click_17_listener() {
      const exp_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteExperience(exp_r6._id));
    });
    \u0275\u0275element(18, "i", 48);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const exp_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", exp_r6.ordering || 1, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(exp_r6.company);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(exp_r6.role);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", exp_r6.currentlyWorking ? "bg-success" : "bg-secondary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", exp_r6.duration, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", exp_r6.technologies);
  }
}
function ExperienceComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "table", 34)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "Sort");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Period");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Technologies");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 35);
    \u0275\u0275text(16, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275template(18, ExperienceComponent_div_7_tr_18_Template, 3, 0, "tr", 36)(19, ExperienceComponent_div_7_tr_19_Template, 19, 6, "tr", 37);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275property("ngIf", ctx_r1.experiences.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.experiences);
  }
}
function ExperienceComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275element(1, "div", 51);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading timeline milestones...");
    \u0275\u0275elementEnd()();
  }
}
var ExperienceComponent = class _ExperienceComponent {
  constructor(fb, adminService) {
    this.fb = fb;
    this.adminService = adminService;
    this.experiences = [];
    this.isEditing = false;
    this.currentExpId = null;
    this.isLoading = true;
    this.showForm = false;
  }
  ngOnInit() {
    this.initForm();
    this.loadExperiences();
  }
  initForm() {
    this.experienceForm = this.fb.group({
      company: ["", [Validators.required]],
      role: ["", [Validators.required]],
      duration: ["", [Validators.required]],
      ordering: [1, [Validators.required]],
      currentlyWorking: [false],
      technologiesRaw: ["", [Validators.required]],
      // Comma-separated
      achievementsRaw: ["", [Validators.required]]
      // Newline-separated
    });
  }
  loadExperiences() {
    this.isLoading = true;
    this.adminService.getExperiences().subscribe({
      next: (data) => {
        this.experiences = data.sort((a, b) => (a.ordering || 99) - (b.ordering || 99));
        this.isLoading = false;
      },
      error: (err) => {
        console.error("Failed to load experiences", err);
        this.isLoading = false;
      }
    });
  }
  editExperience(exp) {
    this.isEditing = true;
    this.currentExpId = exp._id;
    this.showForm = true;
    this.experienceForm.patchValue({
      company: exp.company,
      role: exp.role,
      duration: exp.duration,
      ordering: exp.ordering || 1,
      currentlyWorking: exp.currentlyWorking || false,
      technologiesRaw: exp.technologies ? exp.technologies.join(", ") : "",
      achievementsRaw: exp.achievements ? exp.achievements.join("\n") : ""
    });
  }
  deleteExperience(id) {
    if (confirm("Are you sure you want to delete this career milestone?")) {
      this.adminService.deleteExperience(id).subscribe({
        next: () => this.loadExperiences()
      });
    }
  }
  cancelEdit() {
    this.isEditing = false;
    this.currentExpId = null;
    this.showForm = false;
    this.experienceForm.reset({ ordering: 1, currentlyWorking: false });
  }
  submitExperience() {
    if (this.experienceForm.invalid)
      return;
    const val = this.experienceForm.value;
    const technologies = val.technologiesRaw.split(",").map((t) => t.trim()).filter(Boolean);
    const achievements = val.achievementsRaw.split("\n").map((a) => a.trim()).filter(Boolean);
    const payload = {
      company: val.company,
      role: val.role,
      duration: val.duration,
      ordering: val.ordering,
      currentlyWorking: val.currentlyWorking,
      technologies,
      achievements
    };
    if (this.isEditing && this.currentExpId) {
      this.adminService.updateExperience(this.currentExpId, payload).subscribe({
        next: () => {
          this.loadExperiences();
          this.cancelEdit();
        }
      });
    } else {
      this.adminService.createExperience(payload).subscribe({
        next: () => {
          this.loadExperiences();
          this.cancelEdit();
        }
      });
    }
  }
  static {
    this.\u0275fac = function ExperienceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExperienceComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AdminService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExperienceComponent, selectors: [["app-experience"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 4, consts: [[1, "experience-cms-wrapper"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-5"], [1, "text-white", "font-outfit", "fw-bold", "m-0"], [1, "fas", "fa-briefcase", "text-accent", "me-2"], ["class", "bt btn-sm btn-accent-custom", 3, "click", 4, "ngIf"], ["class", "glass-card p-4 mb-5", 4, "ngIf"], ["class", "glass-card p-4", 4, "ngIf"], ["class", "text-center py-5 text-muted", 4, "ngIf"], [1, "bt", "btn-sm", "btn-accent-custom", 3, "click"], [1, "fas", "fa-plus", "me-1"], [1, "glass-card", "p-4", "mb-5"], [1, "text-white", "font-outfit", "fw-bold", "mb-4"], [3, "ngSubmit", "formGroup"], [1, "row", "g-3", "mb-4"], [1, "col-md-6"], [1, "form-label", "text-white"], ["type", "text", "placeholder", "e.g. Rebuild Technologies", "formControlName", "company", 1, "form-control", "text-input"], ["type", "text", "placeholder", "e.g. Associate Software Engineer (Full-Stack)", "formControlName", "role", 1, "form-control", "text-input"], [1, "col-md-4"], ["type", "text", "placeholder", "e.g. June 2024 \u2013 Present", "formControlName", "duration", 1, "form-control", "text-input"], ["type", "number", "formControlName", "ordering", 1, "form-control", "text-input"], [1, "col-md-4", "d-flex", "align-items-end"], [1, "form-check", "mb-2"], ["type", "checkbox", "id", "currentCheck", "formControlName", "currentlyWorking", 1, "form-check-input"], ["for", "currentCheck", 1, "form-check-label", "text-muted", "ms-2", "small"], [1, "form-group", "mb-4"], ["type", "text", "placeholder", "Angular, Node.js, RxJS, Socket.io", "formControlName", "technologiesRaw", 1, "form-control", "text-input"], [1, "form-group", "mb-5"], ["rows", "5", "placeholder", "Led frontend module development for a scalable rental marketplace...\nArchitected JWT secure authentication and RBAC...", "formControlName", "achievementsRaw", 1, "form-control", "text-input"], [1, "d-flex", "gap-2"], ["type", "submit", 1, "btn-submit", "font-outfit", "px-4", 3, "disabled"], ["type", "button", 1, "btn", "btn-dark-custom", "px-4", 3, "click"], [1, "glass-card", "p-4"], [1, "table-responsive"], [1, "table", "table-dark-custom", "m-0"], [1, "text-end"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["colspan", "6", 1, "text-center", "py-5", "text-muted"], [1, "text-accent", "fw-bold"], [1, "text-white", "fw-semibold"], [1, "badge", 3, "ngClass"], [1, "d-flex", "flex-wrap", "gap-1"], ["class", "badge bg-dark text-accent border border-secondary", 4, "ngFor", "ngForOf"], [1, "d-inline-flex", "gap-2"], ["title", "Edit", 1, "btn", "btn-sm", "btn-accent-custom", 3, "click"], [1, "fas", "fa-edit"], ["title", "Delete", 1, "btn", "btn-sm", "btn-danger-custom", 3, "click"], [1, "fas", "fa-trash-alt"], [1, "badge", "bg-dark", "text-accent", "border", "border-secondary"], [1, "text-center", "py-5", "text-muted"], ["role", "status", 1, "spinner-border", "text-info", "mb-3"]], template: function ExperienceComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4", 2);
        \u0275\u0275element(3, "i", 3);
        \u0275\u0275text(4, " Professional Timelines Manager");
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, ExperienceComponent_button_5_Template, 3, 0, "button", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, ExperienceComponent_div_6_Template, 40, 4, "div", 5)(7, ExperienceComponent_div_7_Template, 20, 2, "div", 6)(8, ExperienceComponent_div_8_Template, 4, 0, "div", 7);
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
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.experience-cms-wrapper[_ngcontent-%COMP%] {\n  padding-bottom: 2rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 500;\n  margin-bottom: 0.5rem;\n}\n.text-input[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.6);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  border-radius: 8px;\n  color: #ffffff;\n  padding: 0.65rem 1rem;\n  font-size: 0.95rem;\n  transition: all 0.2s ease;\n}\n.text-input[_ngcontent-%COMP%]:focus {\n  background: rgba(15, 23, 42, 0.85);\n  border-color: #00f2fe;\n  box-shadow: 0 0 8px rgba(0, 242, 254, 0.15);\n}\n.table-dark-custom[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #cbd5e1;\n}\n.table-dark-custom[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  color: #ffffff;\n  font-weight: 600;\n  font-size: 0.85rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  padding: 1rem;\n  background: rgba(255, 255, 255, 0.02);\n}\n.table-dark-custom[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  padding: 1rem;\n  vertical-align: middle;\n  font-size: 0.95rem;\n  background: transparent;\n}\n.table-dark-custom[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background-color 0.2s ease;\n}\n.table-dark-custom[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.01);\n}\n/*# sourceMappingURL=experience.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExperienceComponent, { className: "ExperienceComponent", filePath: "src\\app\\modules\\admin\\experience\\experience.component.ts", lineNumber: 13 });
})();
export {
  ExperienceComponent
};
//# sourceMappingURL=chunk-X2MSD3MO.js.map
