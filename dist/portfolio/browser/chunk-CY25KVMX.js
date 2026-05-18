import {
  ProjectService
} from "./chunk-EIOX7XC7.js";
import {
  SeoService
} from "./chunk-636KREUN.js";
import {
  ScrollRevealDirective
} from "./chunk-IHPYP5LT.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-IE2EAVOT.js";
import "./chunk-Q4EEFISQ.js";
import {
  CommonModule,
  Location,
  NgForOf,
  NgIf,
  __spreadProps,
  __spreadValues,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵtextInterpolate
} from "./chunk-XQCDMNXV.js";

// src/app/components/project-detail/project-detail.component.ts
function ProjectDetailComponent_div_0_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tech_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tech_r3);
  }
}
function ProjectDetailComponent_div_0_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementStart(3, "h3", 45);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 46);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const stat_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classMap(stat_r4.icon + " fs-3 text-primary mb-3");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r4.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r4.label);
  }
}
function ProjectDetailComponent_div_0_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 48)(2, "div", 49)(3, "div", 50);
    \u0275\u0275element(4, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4", 51);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 52);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const feature_r5 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275classMap(feature_r5.icon + " fs-4 text-primary");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r5.description);
  }
}
function ProjectDetailComponent_div_0_div_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 53)(2, "h5", 54);
    \u0275\u0275element(3, "i", 55);
    \u0275\u0275text(4, " The Problem");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 56);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 57)(8, "h5", 54);
    \u0275\u0275element(9, "i", 58);
    \u0275\u0275text(10, " The Solution");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 56);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const challenge_r6 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(challenge_r6.problem);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(challenge_r6.solution);
  }
}
function ProjectDetailComponent_div_0_li_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r7);
  }
}
function ProjectDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "button", 4);
    \u0275\u0275listener("click", function ProjectDetailComponent_div_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275element(3, "i", 5);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Back to Work");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "header", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "span", 10);
    \u0275\u0275text(11, "Case Study");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "h1", 11);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 12);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 13);
    \u0275\u0275template(17, ProjectDetailComponent_div_0_span_17_Template, 2, 1, "span", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 15)(19, "div", 16);
    \u0275\u0275element(20, "img", 17);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(21, "section", 18)(22, "div", 19);
    \u0275\u0275template(23, ProjectDetailComponent_div_0_div_23_Template, 7, 4, "div", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "section", 21)(25, "div", 7)(26, "div", 22)(27, "div", 23)(28, "span", 10);
    \u0275\u0275text(29, "Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "h2", 24);
    \u0275\u0275text(31, "The Mission");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 15)(33, "p", 25);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 26)(36, "div", 27)(37, "h4", 28);
    \u0275\u0275text(38, "My Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "p");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 27)(42, "h4", 28);
    \u0275\u0275text(43, "Architecture");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "p");
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(46, "section", 29)(47, "div", 7)(48, "div", 30)(49, "span", 10);
    \u0275\u0275text(50, "Capabilities");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "h2", 31);
    \u0275\u0275text(52, "Key Engineering Features");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 19);
    \u0275\u0275template(54, ProjectDetailComponent_div_0_div_54_Template, 9, 4, "div", 32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "section", 21)(56, "div", 7)(57, "div", 22)(58, "div", 23)(59, "span", 10);
    \u0275\u0275text(60, "Challenges");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "h2", 24);
    \u0275\u0275text(62, "Overcoming Complexity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "p", 33);
    \u0275\u0275text(64, "Every high-end project comes with unique engineering hurdles. Here's how I navigated them.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 15);
    \u0275\u0275template(66, ProjectDetailComponent_div_0_div_66_Template, 13, 2, "div", 34);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(67, "section", 35)(68, "div", 7)(69, "div", 8)(70, "div", 36)(71, "span", 10);
    \u0275\u0275text(72, "Impact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "h2", 24);
    \u0275\u0275text(74, "Measurable Results");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "ul", 37);
    \u0275\u0275template(76, ProjectDetailComponent_div_0_li_76_Template, 2, 1, "li", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "div", 15)(78, "div", 38)(79, "h3", 39);
    \u0275\u0275text(80, "Project Ready?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "p", 40);
    \u0275\u0275text(82, "Interested in a similar high-performance solution for your business?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "button", 41);
    \u0275\u0275text(84, "Let's Discuss");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r1.project.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.project.subtitle);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.project.technologies);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r1.project.src, \u0275\u0275sanitizeUrl)("alt", ctx_r1.project.name);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.project.stats);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.project.description);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.project.role);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.project.architecture);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r1.project.features);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngForOf", ctx_r1.project.challenges);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r1.project.impact);
  }
}
function ProjectDetailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "h2", 60);
    \u0275\u0275text(2, "Case Study Not Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 33);
    \u0275\u0275text(4, "The project details you are looking for might have been moved.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 61);
    \u0275\u0275listener("click", function ProjectDetailComponent_div_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(6, "Back to Portfolio");
    \u0275\u0275elementEnd()();
  }
}
var ProjectDetailComponent = class _ProjectDetailComponent {
  constructor(route, projectService, location, seoService) {
    this.route = route;
    this.projectService = projectService;
    this.location = location;
    this.seoService = seoService;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.projectService.getProjectById(id).subscribe({
        next: (proj) => {
          this.project = __spreadProps(__spreadValues({}, proj), {
            name: proj.title
            // Dynamic backward-compatibility mapping
          });
          if (this.project) {
            this.seoService.generateTags({
              title: `${this.project.title} | Rajat Thakur Case Study`,
              description: this.project.description,
              keywords: `Rajat Thakur, ${this.project.title}, Case Study, ${this.project.role}, ${this.project.technologies.join(", ")}`,
              slug: `project/${id}`
            });
          }
        },
        error: (err) => console.error("Failed to load project details", err)
      });
    }
  }
  goBack() {
    this.location.back();
  }
  static {
    this.\u0275fac = function ProjectDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ProjectService), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(SeoService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectDetailComponent, selectors: [["app-project-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 2, consts: [["class", "case-study", 4, "ngIf"], ["class", "text-center my-5 py-5", 4, "ngIf"], [1, "case-study"], [1, "container", "position-relative"], [1, "bt", "btn-outline", "position-absolute", "top-0", "start-0", "mt-4", "d-inline-flex", "align-items-center", 2, "z-index", "100", 3, "click"], [1, "fa", "fa-arrow-left", "me-2"], [1, "case-study-header"], [1, "container"], [1, "row", "align-items-center"], ["appScrollReveal", "", 1, "col-lg-7"], [1, "section-label"], [1, "display-3", "fw-bold", "mb-3", "font-outfit", "text-gradient"], [1, "fs-4", "text-main", "mb-4", "opacity-75"], [1, "d-flex", "flex-wrap", "gap-2", "mb-5"], ["class", "tech-badge", 4, "ngFor", "ngForOf"], ["appScrollReveal", "", 1, "reveal-right"], [1, "mockup-container"], [1, "img-fluid", "w-100", 3, "src", "alt"], [1, "container", "py-5"], ["appScrollReveal", "", 1, "row", "g-4"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "case-study-section"], [1, "row"], ["appScrollReveal", "", 1, "col-lg-4"], [1, "display-5", "fw-bold", "mb-4"], [1, "fs-5", "mb-5"], [1, "row", "g-4"], [1, "col-md-6"], [1, "text-main", "fw-bold", "mb-2"], [1, "case-study-section", "bg-black-50"], ["appScrollReveal", "", 1, "text-center", "mb-5"], [1, "display-5", "fw-bold"], ["class", "col-lg-4", 4, "ngFor", "ngForOf"], [1, "text-muted"], [4, "ngFor", "ngForOf"], [1, "case-study-section", "mb-5"], ["appScrollReveal", "", 1, "col-lg-6"], [1, "impact-list"], [1, "glass-panel", "p-5", "text-center"], [1, "display-6", "fw-bold", "text-gradient", "mb-3"], [1, "mb-4"], ["routerLink", "/contact", 1, "bt", "px-5"], [1, "tech-badge"], [1, "col-md-4"], [1, "stat-card"], [1, "display-6", "fw-bold", "text-main"], [1, "text-muted", "mb-0", "uppercase", "tracking-wide", "small"], [1, "col-lg-4"], [1, "feature-item"], [1, "d-flex", "align-items-center", "mb-4"], [1, "icon-box", "me-3"], [1, "mb-0", "text-main"], [1, "text-muted", "mb-0"], [1, "challenge-card"], [1, "text-main", "fw-bold", "mb-3"], [1, "fas", "fa-exclamation-triangle", "me-2", "text-purple"], [1, "mb-0"], [1, "solution-card"], [1, "fas", "fa-check-circle", "me-2", "text-emerald"], [1, "text-center", "my-5", "py-5"], [1, "text-gradient"], [1, "bt", "mt-4", 3, "click"]], template: function ProjectDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ProjectDetailComponent_div_0_Template, 85, 12, "div", 0)(1, ProjectDetailComponent_div_1_Template, 7, 0, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.project);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.project);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, ScrollRevealDirective] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectDetailComponent, { className: "ProjectDetailComponent", filePath: "src\\app\\components\\project-detail\\project-detail.component.ts", lineNumber: 15 });
})();
export {
  ProjectDetailComponent
};
//# sourceMappingURL=chunk-CY25KVMX.js.map
