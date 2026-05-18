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
  NumberValueAccessor,
  RangeValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
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
  ɵɵpureFunction3,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-XQCDMNXV.js";

// src/app/modules/admin/skills/skills.component.ts
var _c0 = (a0, a1, a2) => ({ "bg-info text-dark": a0, "bg-purple": a1, "bg-secondary": a2 });
function SkillsComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function SkillsComponent_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm = true);
    });
    \u0275\u0275element(1, "i", 9);
    \u0275\u0275text(2, " Add Tech Skill ");
    \u0275\u0275elementEnd();
  }
}
function SkillsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "h5", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 12);
    \u0275\u0275listener("ngSubmit", function SkillsComponent_div_6_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitSkill());
    });
    \u0275\u0275elementStart(4, "div", 13)(5, "div", 14)(6, "label", 15);
    \u0275\u0275text(7, "Skill Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 14)(10, "label", 15);
    \u0275\u0275text(11, "Tech Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 17)(13, "option", 18);
    \u0275\u0275text(14, "Frontend");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 19);
    \u0275\u0275text(16, "Backend");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 20);
    \u0275\u0275text(18, "Tools / Utilities");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(19, "div", 13)(20, "div", 21)(21, "label", 15);
    \u0275\u0275text(22, "Icon Local Asset Path");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 23)(25, "label", 15);
    \u0275\u0275text(26, "Sort / Ordering Rank");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 25)(29, "div", 26)(30, "label", 27);
    \u0275\u0275text(31, "Proficiency Competency Scale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 28);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(34, "input", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 30)(36, "button", 31);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 32);
    \u0275\u0275listener("click", function SkillsComponent_div_6_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelEdit());
    });
    \u0275\u0275text(39, "Cancel");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditing ? "Edit Tech Skill" : "Add New Tech Skill", " ");
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.skillForm);
    \u0275\u0275advance(30);
    \u0275\u0275textInterpolate1("", (tmp_3_0 = ctx_r1.skillForm.get("proficiency")) == null ? null : tmp_3_0.value, "%");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.skillForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditing ? "Save Changes" : "Create Skill Card", " ");
  }
}
function SkillsComponent_div_7_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 39);
    \u0275\u0275text(2, "No capability elements configured yet.");
    \u0275\u0275elementEnd()();
  }
}
function SkillsComponent_div_7_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 40);
    \u0275\u0275element(3, "img", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 42);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "span", 43);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "div", 44)(11, "div", 45);
    \u0275\u0275element(12, "div", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 47);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "td", 48);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 36)(18, "div", 49)(19, "button", 50);
    \u0275\u0275listener("click", function SkillsComponent_div_7_tr_19_Template_button_click_19_listener() {
      const skill_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editSkill(skill_r5));
    });
    \u0275\u0275element(20, "i", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 52);
    \u0275\u0275listener("click", function SkillsComponent_div_7_tr_19_Template_button_click_21_listener() {
      const skill_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteSkill(skill_r5._id));
    });
    \u0275\u0275element(22, "i", 53);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const skill_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", skill_r5.icon, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(skill_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(8, _c0, skill_r5.category === "Frontend", skill_r5.category === "Backend", skill_r5.category === "Tools"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", skill_r5.category, " ");
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", skill_r5.proficiency + "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", skill_r5.proficiency, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", skill_r5.ordering || 1, "");
  }
}
function SkillsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34)(2, "table", 35)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "Icon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Capability Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Proficiency Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Sorting Rank");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 36);
    \u0275\u0275text(16, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275template(18, SkillsComponent_div_7_tr_18_Template, 3, 0, "tr", 37)(19, SkillsComponent_div_7_tr_19_Template, 23, 12, "tr", 38);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275property("ngIf", ctx_r1.skills.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.skills);
  }
}
function SkillsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275element(1, "div", 55);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading capabilities catalog...");
    \u0275\u0275elementEnd()();
  }
}
var SkillsComponent = class _SkillsComponent {
  constructor(fb, adminService) {
    this.fb = fb;
    this.adminService = adminService;
    this.skills = [];
    this.isEditing = false;
    this.currentSkillId = null;
    this.isLoading = true;
    this.showForm = false;
  }
  ngOnInit() {
    this.initForm();
    this.loadSkills();
  }
  initForm() {
    this.skillForm = this.fb.group({
      name: ["", [Validators.required]],
      proficiency: [90, [Validators.required, Validators.min(0), Validators.max(100)]],
      icon: ["./assets/technologies/html.png", [Validators.required]],
      category: ["Frontend", [Validators.required]],
      ordering: [1, [Validators.required]]
    });
  }
  loadSkills() {
    this.isLoading = true;
    this.adminService.getSkills().subscribe({
      next: (data) => {
        this.skills = data.sort((a, b) => {
          if (a.category !== b.category) {
            return a.category.localeCompare(b.category);
          }
          return (a.ordering || 99) - (b.ordering || 99);
        });
        this.isLoading = false;
      },
      error: (err) => {
        console.error("Failed to load skills list", err);
        this.isLoading = false;
      }
    });
  }
  editSkill(skill) {
    this.isEditing = true;
    this.currentSkillId = skill._id;
    this.showForm = true;
    this.skillForm.patchValue({
      name: skill.name,
      proficiency: skill.proficiency,
      icon: skill.icon,
      category: skill.category || "Frontend",
      ordering: skill.ordering || 1
    });
  }
  deleteSkill(id) {
    if (confirm("Are you sure you want to delete this technical capability?")) {
      this.adminService.deleteSkill(id).subscribe({
        next: () => this.loadSkills()
      });
    }
  }
  cancelEdit() {
    this.isEditing = false;
    this.currentSkillId = null;
    this.showForm = false;
    this.skillForm.reset({ proficiency: 90, icon: "./assets/technologies/html.png", category: "Frontend", ordering: 1 });
  }
  submitSkill() {
    if (this.skillForm.invalid)
      return;
    const payload = this.skillForm.value;
    if (this.isEditing && this.currentSkillId) {
      this.adminService.updateSkill(this.currentSkillId, payload).subscribe({
        next: () => {
          this.loadSkills();
          this.cancelEdit();
        }
      });
    } else {
      this.adminService.createSkill(payload).subscribe({
        next: () => {
          this.loadSkills();
          this.cancelEdit();
        }
      });
    }
  }
  static {
    this.\u0275fac = function SkillsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SkillsComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AdminService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SkillsComponent, selectors: [["app-skills"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 4, consts: [[1, "skills-cms-wrapper"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-5"], [1, "text-white", "font-outfit", "fw-bold", "m-0"], [1, "fas", "fa-graduation-cap", "text-accent", "me-2"], ["class", "bt btn-sm btn-accent-custom", 3, "click", 4, "ngIf"], ["class", "glass-card p-4 mb-5", 4, "ngIf"], ["class", "glass-card p-4", 4, "ngIf"], ["class", "text-center py-5 text-muted", 4, "ngIf"], [1, "bt", "btn-sm", "btn-accent-custom", 3, "click"], [1, "fas", "fa-plus", "me-1"], [1, "glass-card", "p-4", "mb-5"], [1, "text-white", "font-outfit", "fw-bold", "mb-4"], [3, "ngSubmit", "formGroup"], [1, "row", "g-3", "mb-4"], [1, "col-md-6"], [1, "form-label", "text-white"], ["type", "text", "placeholder", "e.g. Angular 20 / TypeScript", "formControlName", "name", 1, "form-control", "text-input"], ["formControlName", "category", 1, "form-control", "text-input"], ["value", "Frontend"], ["value", "Backend"], ["value", "Tools"], [1, "col-md-8"], ["type", "text", "placeholder", "./assets/technologies/angular.png", "formControlName", "icon", 1, "form-control", "text-input"], [1, "col-md-4"], ["type", "number", "formControlName", "ordering", 1, "form-control", "text-input"], [1, "form-group", "mb-5"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "form-label", "text-white", "m-0"], [1, "badge", "bg-dark", "text-accent", "border", "border-secondary", "fs-6"], ["type", "range", "min", "0", "max", "100", "formControlName", "proficiency", 1, "form-range", "custom-range"], [1, "d-flex", "gap-2"], ["type", "submit", 1, "btn-submit", "font-outfit", "px-4", 3, "disabled"], ["type", "button", 1, "btn", "btn-dark-custom", "px-4", 3, "click"], [1, "glass-card", "p-4"], [1, "table-responsive"], [1, "table", "table-dark-custom", "m-0"], [1, "text-end"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["colspan", "6", 1, "text-center", "py-5", "text-muted"], [1, "skill-icon-frame"], [1, "img-fluid", 2, "max-height", "28px", 3, "src"], [1, "text-white", "fw-semibold"], [1, "badge", 3, "ngClass"], [1, "d-flex", "align-items-center", "gap-2"], [1, "progress", "flex-grow-1", 2, "height", "6px", "background", "rgba(255,255,255,0.05)"], ["role", "progressbar", 1, "progress-bar", "bg-accent"], [1, "small", "fw-bold", "text-accent"], [1, "fw-bold", "text-muted"], [1, "d-inline-flex", "gap-2"], ["title", "Edit", 1, "btn", "btn-sm", "btn-accent-custom", 3, "click"], [1, "fas", "fa-edit"], ["title", "Delete", 1, "btn", "btn-sm", "btn-danger-custom", 3, "click"], [1, "fas", "fa-trash-alt"], [1, "text-center", "py-5", "text-muted"], ["role", "status", 1, "spinner-border", "text-info", "mb-3"]], template: function SkillsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4", 2);
        \u0275\u0275element(3, "i", 3);
        \u0275\u0275text(4, " Tech Capabilities Catalog Manager");
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, SkillsComponent_button_5_Template, 3, 0, "button", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, SkillsComponent_div_6_Template, 40, 5, "div", 5)(7, SkillsComponent_div_7_Template, 20, 2, "div", 6)(8, SkillsComponent_div_8_Template, 4, 0, "div", 7);
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
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.skills-cms-wrapper[_ngcontent-%COMP%] {\n  padding-bottom: 2rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 500;\n  margin-bottom: 0.5rem;\n}\n.text-input[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.6);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  border-radius: 8px;\n  color: #ffffff;\n  padding: 0.65rem 1rem;\n  font-size: 0.95rem;\n  transition: all 0.2s ease;\n}\n.text-input[_ngcontent-%COMP%]:focus {\n  background: rgba(15, 23, 42, 0.85);\n  border-color: #00f2fe;\n  box-shadow: 0 0 8px rgba(0, 242, 254, 0.15);\n}\n.custom-range[_ngcontent-%COMP%]::-webkit-slider-runnable-track {\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 4px;\n  height: 6px;\n}\n.custom-range[_ngcontent-%COMP%]::-webkit-slider-thumb {\n  background: #00f2fe;\n  border: none;\n  border-radius: 50%;\n  width: 16px;\n  height: 16px;\n  margin-top: -5px;\n  box-shadow: 0 0 8px rgba(0, 242, 254, 0.5);\n}\n.progress-bar.bg-accent[_ngcontent-%COMP%] {\n  background-color: #00f2fe;\n  box-shadow: 0 0 8px rgba(0, 242, 254, 0.4);\n}\n.bg-purple[_ngcontent-%COMP%] {\n  background-color: #a78bfa;\n  color: #000000;\n}\n.table-dark-custom[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #cbd5e1;\n}\n.table-dark-custom[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  color: #ffffff;\n  font-weight: 600;\n  font-size: 0.85rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  padding: 1rem;\n  background: rgba(255, 255, 255, 0.02);\n}\n.table-dark-custom[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  padding: 1rem;\n  vertical-align: middle;\n  font-size: 0.95rem;\n  background: transparent;\n}\n.table-dark-custom[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background-color 0.2s ease;\n}\n.table-dark-custom[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.01);\n}\n.skill-icon-frame[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.02);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n}\n/*# sourceMappingURL=skills.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SkillsComponent, { className: "SkillsComponent", filePath: "src\\app\\modules\\admin\\skills\\skills.component.ts", lineNumber: 13 });
})();
export {
  SkillsComponent
};
//# sourceMappingURL=chunk-3R2K6YNC.js.map
