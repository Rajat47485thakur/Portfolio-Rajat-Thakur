import {
  AdminService
} from "./chunk-4CEA4EDS.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormArrayName,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
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
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-XQCDMNXV.js";

// src/app/modules/admin/projects/projects.component.ts
function ProjectsComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function ProjectsComponent_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm = true);
    });
    \u0275\u0275element(1, "i", 9);
    \u0275\u0275text(2, " Add Project Study ");
    \u0275\u0275elementEnd();
  }
}
function ProjectsComponent_div_6_div_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 54)(2, "button", 55);
    \u0275\u0275listener("click", function ProjectsComponent_div_6_div_64_Template_button_click_2_listener() {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeStat(i_r5));
    });
    \u0275\u0275text(3, "\u2716");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 56);
    \u0275\u0275element(5, "input", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 56);
    \u0275\u0275element(7, "input", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div");
    \u0275\u0275element(9, "input", 59);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const i_r5 = ctx.index;
    \u0275\u0275property("formGroupName", i_r5);
  }
}
function ProjectsComponent_div_6_div_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61)(2, "button", 55);
    \u0275\u0275listener("click", function ProjectsComponent_div_6_div_73_Template_button_click_2_listener() {
      const i_r7 = \u0275\u0275restoreView(_r6).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeFeature(i_r7));
    });
    \u0275\u0275text(3, "\u2716");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 56);
    \u0275\u0275element(5, "input", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 56);
    \u0275\u0275element(7, "input", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div");
    \u0275\u0275element(9, "textarea", 64);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const i_r7 = ctx.index;
    \u0275\u0275property("formGroupName", i_r7);
  }
}
function ProjectsComponent_div_6_div_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65)(1, "button", 55);
    \u0275\u0275listener("click", function ProjectsComponent_div_6_div_82_Template_button_click_1_listener() {
      const i_r9 = \u0275\u0275restoreView(_r8).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeChallenge(i_r9));
    });
    \u0275\u0275text(2, "\u2716");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 56)(4, "label", 66);
    \u0275\u0275text(5, "The Problem Context");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "textarea", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "label", 68);
    \u0275\u0275text(9, "The Engineering Solution");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "textarea", 69);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r9 = ctx.index;
    \u0275\u0275property("formGroupName", i_r9);
  }
}
function ProjectsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "h5", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 12);
    \u0275\u0275listener("ngSubmit", function ProjectsComponent_div_6_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitProject());
    });
    \u0275\u0275elementStart(4, "div", 13)(5, "div", 14)(6, "label", 15);
    \u0275\u0275text(7, "Project Case Title");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 14)(10, "label", 15);
    \u0275\u0275text(11, "Subtitle / Catchphrase");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 13)(14, "div", 18)(15, "label", 15);
    \u0275\u0275text(16, "Engineering Role");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 18)(19, "label", 15);
    \u0275\u0275text(20, "Resource Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "select", 20)(22, "option", 21);
    \u0275\u0275text(23, "Web Application");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 22);
    \u0275\u0275text(25, "Admin Portal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 23);
    \u0275\u0275text(27, "Mobile App");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 24);
    \u0275\u0275text(29, "System Tool");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 25)(31, "div", 26);
    \u0275\u0275element(32, "input", 27);
    \u0275\u0275elementStart(33, "label", 28);
    \u0275\u0275text(34, "Highlight on Homepage (Featured)");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "div", 13)(36, "div", 29)(37, "label", 15);
    \u0275\u0275text(38, "Github / Live Link URL");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 18)(41, "label", 15);
    \u0275\u0275text(42, "Project Screenshot Image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "input", 31);
    \u0275\u0275listener("change", function ProjectsComponent_div_6_Template_input_change_43_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFileSelected($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 32)(45, "label", 15);
    \u0275\u0275text(46, "Core Technologies (Comma-separated list)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(47, "input", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 32)(49, "label", 15);
    \u0275\u0275text(50, "Overview & Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(51, "textarea", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 32)(53, "label", 15);
    \u0275\u0275text(54, "System Architecture Abstraction");
    \u0275\u0275elementEnd();
    \u0275\u0275element(55, "input", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 36)(57, "div", 37)(58, "label", 38);
    \u0275\u0275text(59, "Project Analytics Cards (Stats)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "button", 39);
    \u0275\u0275listener("click", function ProjectsComponent_div_6_Template_button_click_60_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addStat());
    });
    \u0275\u0275element(61, "i", 9);
    \u0275\u0275text(62, " Add Stat ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 40);
    \u0275\u0275template(64, ProjectsComponent_div_6_div_64_Template, 10, 1, "div", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 36)(66, "div", 37)(67, "label", 38);
    \u0275\u0275text(68, "Key Technical Features");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "button", 39);
    \u0275\u0275listener("click", function ProjectsComponent_div_6_Template_button_click_69_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addFeature());
    });
    \u0275\u0275element(70, "i", 9);
    \u0275\u0275text(71, " Add Feature ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 42);
    \u0275\u0275template(73, ProjectsComponent_div_6_div_73_Template, 10, 1, "div", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 36)(75, "div", 37)(76, "label", 38);
    \u0275\u0275text(77, "Engineering Challenges & Solutions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "button", 39);
    \u0275\u0275listener("click", function ProjectsComponent_div_6_Template_button_click_78_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addChallenge());
    });
    \u0275\u0275element(79, "i", 9);
    \u0275\u0275text(80, " Add Challenge ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "div", 44);
    \u0275\u0275template(82, ProjectsComponent_div_6_div_82_Template, 11, 1, "div", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "div", 32)(84, "label", 15);
    \u0275\u0275text(85, "Measurable Impact & Results (One per line)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(86, "textarea", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "div", 47)(88, "div", 14)(89, "label", 15);
    \u0275\u0275text(90, "SEO Custom Title Override");
    \u0275\u0275elementEnd();
    \u0275\u0275element(91, "input", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "div", 14)(93, "label", 15);
    \u0275\u0275text(94, "SEO Custom Meta Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(95, "input", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(96, "div", 50)(97, "button", 51);
    \u0275\u0275text(98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "button", 52);
    \u0275\u0275listener("click", function ProjectsComponent_div_6_Template_button_click_99_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelEdit());
    });
    \u0275\u0275text(100, "Cancel");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditing ? "Edit Project Study" : "Add New Project Study", " ");
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.projectForm);
    \u0275\u0275advance(61);
    \u0275\u0275property("ngForOf", ctx_r1.stats.controls);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r1.features.controls);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r1.challenges.controls);
    \u0275\u0275advance(15);
    \u0275\u0275property("disabled", ctx_r1.projectForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditing ? "Save Changes" : "Publish Project Study", " ");
  }
}
function ProjectsComponent_div_7_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 76);
    \u0275\u0275text(2, "No dynamic project studies compiled yet.");
    \u0275\u0275elementEnd()();
  }
}
function ProjectsComponent_div_7_tr_21_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 89);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tech_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tech_r11, " ");
  }
}
function ProjectsComponent_div_7_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 77);
    \u0275\u0275element(3, "img", 78);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 79);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "span", 80);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td")(12, "span", 81);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td")(15, "div", 82);
    \u0275\u0275template(16, ProjectsComponent_div_7_tr_21_span_16_Template, 2, 1, "span", 83);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td", 73)(18, "div", 84)(19, "button", 85);
    \u0275\u0275listener("click", function ProjectsComponent_div_7_tr_21_Template_button_click_19_listener() {
      const proj_r12 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editProject(proj_r12));
    });
    \u0275\u0275element(20, "i", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 87);
    \u0275\u0275listener("click", function ProjectsComponent_div_7_tr_21_Template_button_click_21_listener() {
      const proj_r12 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteProject(proj_r12._id));
    });
    \u0275\u0275element(22, "i", 88);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const proj_r12 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", proj_r12.src || "./assets/technologies/angular.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(proj_r12.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(proj_r12.role);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(proj_r12.category);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", proj_r12.featured ? "bg-success" : "bg-secondary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", proj_r12.featured ? "Yes" : "No", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", proj_r12.technologies);
  }
}
function ProjectsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "div", 71)(2, "table", 72)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "Screenshot");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Project Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Featured");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Technologies");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 73);
    \u0275\u0275text(18, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275template(20, ProjectsComponent_div_7_tr_20_Template, 3, 0, "tr", 74)(21, ProjectsComponent_div_7_tr_21_Template, 23, 7, "tr", 75);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(20);
    \u0275\u0275property("ngIf", ctx_r1.projects.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.projects);
  }
}
function ProjectsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90);
    \u0275\u0275element(1, "div", 91);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading project studies...");
    \u0275\u0275elementEnd()();
  }
}
var ProjectsComponent = class _ProjectsComponent {
  constructor(fb, adminService) {
    this.fb = fb;
    this.adminService = adminService;
    this.projects = [];
    this.isEditing = false;
    this.currentProjectId = null;
    this.selectedFile = null;
    this.isLoading = true;
    this.showForm = false;
  }
  ngOnInit() {
    this.initForm();
    this.loadProjects();
  }
  initForm() {
    this.projectForm = this.fb.group({
      title: ["", [Validators.required]],
      subtitle: ["", [Validators.required]],
      description: ["", [Validators.required]],
      role: ["", [Validators.required]],
      category: ["Web Application", [Validators.required]],
      link: ["", [Validators.required]],
      featured: [false],
      technologiesRaw: ["", [Validators.required]],
      architecture: [""],
      seoTitle: [""],
      seoDescription: [""],
      stats: this.fb.array([]),
      features: this.fb.array([]),
      challenges: this.fb.array([]),
      impactRaw: ["", [Validators.required]]
      // Newline-separated
    });
    this.addStat();
    this.addFeature();
    this.addChallenge();
  }
  // ==========================================
  // STATS ARRAY
  // ==========================================
  get stats() {
    return this.projectForm.get("stats");
  }
  addStat(label = "", value = "", icon = "fas fa-chart-line") {
    this.stats.push(this.fb.group({
      label: [label, [Validators.required]],
      value: [value, [Validators.required]],
      icon: [icon, [Validators.required]]
    }));
  }
  removeStat(index) {
    this.stats.removeAt(index);
  }
  // ==========================================
  // FEATURES ARRAY
  // ==========================================
  get features() {
    return this.projectForm.get("features");
  }
  addFeature(title = "", description = "", icon = "fas fa-cog") {
    this.features.push(this.fb.group({
      title: [title, [Validators.required]],
      description: [description, [Validators.required]],
      icon: [icon, [Validators.required]]
    }));
  }
  removeFeature(index) {
    this.features.removeAt(index);
  }
  // ==========================================
  // CHALLENGES ARRAY
  // ==========================================
  get challenges() {
    return this.projectForm.get("challenges");
  }
  addChallenge(problem = "", solution = "") {
    this.challenges.push(this.fb.group({
      problem: [problem, [Validators.required]],
      solution: [solution, [Validators.required]]
    }));
  }
  removeChallenge(index) {
    this.challenges.removeAt(index);
  }
  // ==========================================
  // OPERATIONS
  // ==========================================
  loadProjects() {
    this.isLoading = true;
    this.adminService.getSettings().subscribe({
      next: () => {
        this.adminService.getMessages().subscribe();
        this.adminService.getExperiences().subscribe({
          next: () => {
            this.adminService.getSkills().subscribe();
          }
        });
      }
    });
    this.adminService.getExperiences().subscribe();
    const apiBase = "http://localhost:5000/api/projects";
    this.adminService.getExperiences().subscribe();
    fetch(apiBase).then((res) => res.json()).then((data) => {
      this.projects = data;
      this.isLoading = false;
    }).catch((err) => {
      console.error(err);
      this.isLoading = false;
    });
  }
  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }
  editProject(proj) {
    this.isEditing = true;
    this.currentProjectId = proj._id;
    this.showForm = true;
    this.stats.clear();
    this.features.clear();
    this.challenges.clear();
    this.projectForm.patchValue({
      title: proj.title,
      subtitle: proj.subtitle,
      description: proj.description,
      role: proj.role,
      category: proj.category || "Web Application",
      link: proj.link,
      featured: proj.featured || false,
      technologiesRaw: proj.technologies ? proj.technologies.join(", ") : "",
      architecture: proj.architecture || "",
      seoTitle: proj.seoTitle || "",
      seoDescription: proj.seoDescription || "",
      impactRaw: proj.impact ? proj.impact.join("\n") : ""
    });
    if (proj.stats && proj.stats.length > 0) {
      proj.stats.forEach((s) => this.addStat(s.label, s.value, s.icon));
    } else {
      this.addStat();
    }
    if (proj.features && proj.features.length > 0) {
      proj.features.forEach((f) => this.addFeature(f.title, f.description, f.icon));
    } else {
      this.addFeature();
    }
    if (proj.challenges && proj.challenges.length > 0) {
      proj.challenges.forEach((c) => this.addChallenge(c.problem, c.solution));
    } else {
      this.addChallenge();
    }
  }
  deleteProject(id) {
    if (confirm("Are you sure you want to delete this project?")) {
      this.adminService.deleteProject(id).subscribe({
        next: () => this.loadProjects()
      });
    }
  }
  cancelEdit() {
    this.isEditing = false;
    this.currentProjectId = null;
    this.showForm = false;
    this.selectedFile = null;
    this.projectForm.reset({ category: "Web Application", featured: false });
    this.stats.clear();
    this.features.clear();
    this.challenges.clear();
    this.addStat();
    this.addFeature();
    this.addChallenge();
  }
  submitProject() {
    if (this.projectForm.invalid)
      return;
    this.isLoading = true;
    const val = this.projectForm.value;
    const technologies = val.technologiesRaw.split(",").map((t) => t.trim()).filter(Boolean);
    const impact = val.impactRaw.split("\n").map((i) => i.trim()).filter(Boolean);
    const formData = new FormData();
    formData.append("title", val.title);
    formData.append("subtitle", val.subtitle);
    formData.append("description", val.description);
    formData.append("role", val.role);
    formData.append("category", val.category);
    formData.append("link", val.link);
    formData.append("featured", val.featured.toString());
    formData.append("architecture", val.architecture || "");
    formData.append("seoTitle", val.seoTitle || "");
    formData.append("seoDescription", val.seoDescription || "");
    formData.append("technologies", JSON.stringify(technologies));
    formData.append("impact", JSON.stringify(impact));
    formData.append("stats", JSON.stringify(val.stats));
    formData.append("features", JSON.stringify(val.features));
    formData.append("challenges", JSON.stringify(val.challenges));
    if (this.selectedFile) {
      formData.append("file", this.selectedFile);
    }
    if (this.isEditing && this.currentProjectId) {
      this.adminService.updateProject(this.currentProjectId, formData).subscribe({
        next: () => {
          this.loadProjects();
          this.cancelEdit();
        },
        error: () => this.isLoading = false
      });
    } else {
      this.adminService.createProject(formData).subscribe({
        next: () => {
          this.loadProjects();
          this.cancelEdit();
        },
        error: () => this.isLoading = false
      });
    }
  }
  static {
    this.\u0275fac = function ProjectsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectsComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AdminService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectsComponent, selectors: [["app-projects"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 4, consts: [[1, "projects-cms-wrapper"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-5"], [1, "text-white", "font-outfit", "fw-bold", "m-0"], [1, "fas", "fa-tasks", "text-accent", "me-2"], ["class", "bt btn-sm btn-accent-custom", 3, "click", 4, "ngIf"], ["class", "glass-card p-4 mb-5", 4, "ngIf"], ["class", "glass-card p-4", 4, "ngIf"], ["class", "text-center py-5 text-muted", 4, "ngIf"], [1, "bt", "btn-sm", "btn-accent-custom", 3, "click"], [1, "fas", "fa-plus", "me-1"], [1, "glass-card", "p-4", "mb-5"], [1, "text-white", "font-outfit", "fw-bold", "mb-4"], [3, "ngSubmit", "formGroup"], [1, "row", "g-3", "mb-4"], [1, "col-md-6"], [1, "form-label", "text-white"], ["type", "text", "placeholder", "e.g. Vehicle Rental Marketplace", "formControlName", "title", 1, "form-control", "text-input"], ["type", "text", "placeholder", "e.g. Enterprise Booking Engine & SSR Platform", "formControlName", "subtitle", 1, "form-control", "text-input"], [1, "col-md-4"], ["type", "text", "placeholder", "e.g. Lead Frontend Engineer", "formControlName", "role", 1, "form-control", "text-input"], ["formControlName", "category", 1, "form-control", "text-input"], ["value", "Web Application"], ["value", "Admin Portal"], ["value", "Mobile App"], ["value", "System Tool"], [1, "col-md-4", "d-flex", "align-items-end"], [1, "form-check", "mb-2"], ["type", "checkbox", "id", "featCheck", "formControlName", "featured", 1, "form-check-input"], ["for", "featCheck", 1, "form-check-label", "text-muted", "ms-2", "small"], [1, "col-md-8"], ["type", "text", "placeholder", "https://github.com/...", "formControlName", "link", 1, "form-control", "text-input"], ["type", "file", "accept", "image/*", 1, "form-control", "text-input", 3, "change"], [1, "form-group", "mb-4"], ["type", "text", "placeholder", "Angular 20, RxJS, SSR, Stripe", "formControlName", "technologiesRaw", 1, "form-control", "text-input"], ["rows", "3", "placeholder", "Engineered a scalable Angular-based rental marketplace...", "formControlName", "description", 1, "form-control", "text-input"], ["type", "text", "placeholder", "e.g. Event-Driven SSR Architecture with Angular Standalone...", "formControlName", "architecture", 1, "form-control", "text-input"], [1, "mb-4"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "form-label", "text-white", "m-0"], ["type", "button", 1, "btn", "btn-sm", "btn-dark-custom", 3, "click"], ["formArrayName", "stats", 1, "row", "g-2"], ["class", "col-md-4", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["formArrayName", "features", 1, "row", "g-2"], ["class", "col-md-6", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["formArrayName", "challenges"], ["class", "challenge-form-card p-3 rounded mb-3 border border-secondary bg-black-50 position-relative", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["rows", "3", "placeholder", "Boosted overall booking conversion rates by 35%...\nReduced initial page load time by 60%...", "formControlName", "impactRaw", 1, "form-control", "text-input"], [1, "row", "g-3", "mb-5", "border-top", "border-secondary", "pt-4"], ["type", "text", "placeholder", "Leave empty to auto-generate", "formControlName", "seoTitle", 1, "form-control", "text-input"], ["type", "text", "placeholder", "Leave empty to auto-generate", "formControlName", "seoDescription", 1, "form-control", "text-input"], [1, "d-flex", "gap-2"], ["type", "submit", 1, "btn-submit", "font-outfit", "px-4", 3, "disabled"], ["type", "button", 1, "btn", "btn-dark-custom", "px-4", 3, "click"], [1, "col-md-4", 3, "formGroupName"], [1, "stat-form-card", "p-3", "rounded", "mb-2", "border", "border-secondary", "bg-black-50", "position-relative"], ["type", "button", 1, "close-card-btn", 3, "click"], [1, "mb-2"], ["type", "text", "placeholder", "Label (e.g. SEO Score)", "formControlName", "label", 1, "form-control", "form-control-sm", "text-input"], ["type", "text", "placeholder", "Value (e.g. 98/100)", "formControlName", "value", 1, "form-control", "form-control-sm", "text-input"], ["type", "text", "placeholder", "Icon (e.g. fas fa-search)", "formControlName", "icon", 1, "form-control", "form-control-sm", "text-input"], [1, "col-md-6", 3, "formGroupName"], [1, "feature-form-card", "p-3", "rounded", "mb-2", "border", "border-secondary", "bg-black-50", "position-relative"], ["type", "text", "placeholder", "Feature Title", "formControlName", "title", 1, "form-control", "form-control-sm", "text-input"], ["type", "text", "placeholder", "Icon Class (e.g. fas fa-globe)", "formControlName", "icon", 1, "form-control", "form-control-sm", "text-input"], ["rows", "2", "placeholder", "Feature Description", "formControlName", "description", 1, "form-control", "form-control-sm", "text-input"], [1, "challenge-form-card", "p-3", "rounded", "mb-3", "border", "border-secondary", "bg-black-50", "position-relative", 3, "formGroupName"], [1, "form-label", "text-purple", "small", "fw-semibold"], ["rows", "2", "placeholder", "What was the complex issue?", "formControlName", "problem", 1, "form-control", "form-control-sm", "text-input"], [1, "form-label", "text-emerald", "small", "fw-semibold"], ["rows", "2", "placeholder", "How did you solve it?", "formControlName", "solution", 1, "form-control", "form-control-sm", "text-input"], [1, "glass-card", "p-4"], [1, "table-responsive"], [1, "table", "table-dark-custom", "m-0"], [1, "text-end"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["colspan", "7", 1, "text-center", "py-5", "text-muted"], [1, "table-img-wrapper"], [1, "img-fluid", "rounded", 2, "max-height", "40px", 3, "src"], [1, "text-white", "fw-semibold"], [1, "badge", "bg-dark", "border", "border-secondary", "text-white"], [1, "badge", 3, "ngClass"], [1, "d-flex", "flex-wrap", "gap-1", "max-w-200"], ["class", "badge bg-dark text-accent border border-secondary", 4, "ngFor", "ngForOf"], [1, "d-inline-flex", "gap-2"], ["title", "Edit", 1, "btn", "btn-sm", "btn-accent-custom", 3, "click"], [1, "fas", "fa-edit"], ["title", "Delete", 1, "btn", "btn-sm", "btn-danger-custom", 3, "click"], [1, "fas", "fa-trash-alt"], [1, "badge", "bg-dark", "text-accent", "border", "border-secondary"], [1, "text-center", "py-5", "text-muted"], ["role", "status", 1, "spinner-border", "text-info", "mb-3"]], template: function ProjectsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4", 2);
        \u0275\u0275element(3, "i", 3);
        \u0275\u0275text(4, " Dynamic Projects Case Studies Manager");
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, ProjectsComponent_button_5_Template, 3, 0, "button", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, ProjectsComponent_div_6_Template, 101, 7, "div", 5)(7, ProjectsComponent_div_7_Template, 22, 2, "div", 6)(8, ProjectsComponent_div_8_Template, 4, 0, "div", 7);
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
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, FormArrayName], styles: ["\n\n.projects-cms-wrapper[_ngcontent-%COMP%] {\n  padding-bottom: 2rem;\n}\n.max-w-200[_ngcontent-%COMP%] {\n  max-width: 200px;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 500;\n  margin-bottom: 0.5rem;\n}\n.text-input[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.6);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  border-radius: 8px;\n  color: #ffffff;\n  padding: 0.65rem 1rem;\n  font-size: 0.95rem;\n  transition: all 0.2s ease;\n}\n.text-input[_ngcontent-%COMP%]:focus {\n  background: rgba(15, 23, 42, 0.85);\n  border-color: #00f2fe;\n  box-shadow: 0 0 8px rgba(0, 242, 254, 0.15);\n}\n.stat-form-card[_ngcontent-%COMP%], \n.feature-form-card[_ngcontent-%COMP%], \n.challenge-form-card[_ngcontent-%COMP%] {\n  position: relative;\n  background: rgba(15, 23, 42, 0.4);\n  border: 1px solid rgba(255, 255, 255, 0.05) !important;\n}\n.stat-form-card[_ngcontent-%COMP%]   .close-card-btn[_ngcontent-%COMP%], \n.feature-form-card[_ngcontent-%COMP%]   .close-card-btn[_ngcontent-%COMP%], \n.challenge-form-card[_ngcontent-%COMP%]   .close-card-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n  background: transparent;\n  border: none;\n  color: #ef4444;\n  font-size: 0.8rem;\n  cursor: pointer;\n  z-index: 5;\n  padding: 0.25rem;\n  transition: opacity 0.2s ease;\n}\n.stat-form-card[_ngcontent-%COMP%]   .close-card-btn[_ngcontent-%COMP%]:hover, \n.feature-form-card[_ngcontent-%COMP%]   .close-card-btn[_ngcontent-%COMP%]:hover, \n.challenge-form-card[_ngcontent-%COMP%]   .close-card-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.text-purple[_ngcontent-%COMP%] {\n  color: #a78bfa;\n}\n.text-emerald[_ngcontent-%COMP%] {\n  color: #34d399;\n}\n.table-dark-custom[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #cbd5e1;\n}\n.table-dark-custom[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  color: #ffffff;\n  font-weight: 600;\n  font-size: 0.85rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  padding: 1rem;\n  background: rgba(255, 255, 255, 0.02);\n}\n.table-dark-custom[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  padding: 1rem;\n  vertical-align: middle;\n  font-size: 0.95rem;\n  background: transparent;\n}\n.table-dark-custom[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background-color 0.2s ease;\n}\n.table-dark-custom[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.01);\n}\n.table-img-wrapper[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 40px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.02);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  border-radius: 4px;\n}\n/*# sourceMappingURL=projects.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectsComponent, { className: "ProjectsComponent", filePath: "src\\app\\modules\\admin\\projects\\projects.component.ts", lineNumber: 13 });
})();
export {
  ProjectsComponent
};
//# sourceMappingURL=chunk-7OI3ZF3N.js.map
