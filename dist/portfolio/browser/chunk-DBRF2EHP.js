import {
  ContactComponent
} from "./chunk-7CRG7VDR.js";
import {
  ProjectService
} from "./chunk-EIOX7XC7.js";
import {
  SeoService
} from "./chunk-636KREUN.js";
import {
  ScrollRevealDirective
} from "./chunk-IHPYP5LT.js";
import "./chunk-QITNANFH.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-IE2EAVOT.js";
import "./chunk-Q4EEFISQ.js";
import {
  CommonModule,
  HttpClient,
  NgForOf,
  NgIf,
  NgOptimizedImage,
  ViewportScroller,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-XQCDMNXV.js";

// src/app/components/profile/profile.component.ts
var ProfileComponent = class _ProfileComponent {
  constructor(viewportScroller, router) {
    this.viewportScroller = viewportScroller;
    this.router = router;
  }
  scrollTo(section) {
    this.viewportScroller.scrollToAnchor(section);
  }
  navigateToContact() {
    this.router.navigate(["/contact"]);
  }
  openResume() {
    window.open("./assets/Rajat_Thakur_2Y_Experience_Angular_Nodejs_Developer.pdf");
  }
  goToLinkedin() {
    window.open("https://www.linkedin.com/in/rajat-thakur-226b14223/", "_blank");
  }
  goToGithub() {
    window.open("https://github.com/Rajat47485thakur", "_blank");
  }
  static {
    this.\u0275fac = function ProfileComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProfileComponent)(\u0275\u0275directiveInject(ViewportScroller), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-profile"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 65, vars: 0, consts: [["id", "home", 1, "container", "min-vh-100", "d-flex", "flex-column", "justify-content-center", "align-items-center", "position-relative", "py-5"], [1, "glow-bg", 2, "top", "15%", "left", "5%"], [1, "glow-bg", "glow-purple", 2, "bottom", "15%", "right", "5%"], [1, "row", "w-100", "align-items-center"], [1, "col-md-6", "order-md-2", "d-flex", "justify-content-center", "mb-5", "mb-md-0"], ["appScrollReveal", "", 1, "profile-img-container"], ["ngSrc", "assets/profile.png", "alt", "Rajat Thakur - Software Engineer", "width", "400", "height", "400", "priority", "", 1, "img-fluid", "profile-pic"], [1, "glow-ring"], [1, "col-md-6", "order-md-1", "d-flex", "flex-column", "align-items-md-start", "align-items-center", "text-center", "text-md-start"], ["appScrollReveal", ""], [1, "fs-5", "text-muted", "mb-2", "font-outfit"], [1, "display-3", "fw-bold", "mb-3", "font-outfit", "text-gradient"], [1, "subtitle", "fs-4", "mb-4", "text-gradient-emerald"], [1, "text-muted", "mb-5", "lead", 2, "max-width", "530px"], [1, "d-flex", "flex-column", "flex-sm-row", "gap-3", "justify-content-center", "justify-content-md-start", "mb-4"], [1, "bt", 3, "click"], [1, "fas", "fa-file-download", "ms-2"], [1, "bt", "btn-outline", 3, "click"], [1, "fas", "fa-paper-plane", "ms-2"], [1, "social-links", "d-flex", "gap-4", "mt-2", "justify-content-center", "justify-content-md-start"], ["aria-label", "LinkedIn", 1, "social-icon", 2, "cursor", "pointer", 3, "click"], [1, "fab", "fa-linkedin-in"], ["aria-label", "GitHub", 1, "social-icon", 2, "cursor", "pointer", 3, "click"], [1, "fab", "fa-github"], ["appScrollReveal", "", 1, "row", "mt-5", "w-100", "g-4", "justify-content-center", "reveal-up", "reveal-delay-1"], [1, "col-6", "col-lg-3"], [1, "glass-card", "p-4", "text-center", "h-100", "border-dark-subtle"], [1, "d-flex", "justify-content-center", "align-items-center", "mb-2"], [1, "fas", "fa-server", "text-primary", "fs-4", "me-2"], [1, "display-6", "fw-bold", "text-main", "mb-0", "font-outfit"], [1, "text-muted", "small", "uppercase", "tracking-wider", "mb-0"], [1, "fas", "fa-bolt", "text-purple", "fs-4", "me-2"], [1, "fas", "fa-user-shield", "text-emerald", "fs-4", "me-2"], [1, "fas", "fa-sync", "text-primary", "fs-4", "me-2"]], template: function ProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0);
        \u0275\u0275element(1, "div", 1)(2, "div", 2);
        \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275element(6, "img", 6)(7, "div", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 8)(9, "div", 9)(10, "p", 10);
        \u0275\u0275text(11, "Hello, I'm");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "h1", 11);
        \u0275\u0275text(13, "Rajat Thakur");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "p", 12);
        \u0275\u0275text(15, "Software Engineer | Angular & Node.js Specialist");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "p", 13);
        \u0275\u0275text(17, " Building scalable, SEO-optimized, and real-time enterprise web applications using modern Angular (v14-20), SSR, Node.js, and WebSockets. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 14)(19, "button", 15);
        \u0275\u0275listener("click", function ProfileComponent_Template_button_click_19_listener() {
          return ctx.openResume();
        });
        \u0275\u0275elementStart(20, "span");
        \u0275\u0275text(21, "Download Resume");
        \u0275\u0275elementEnd();
        \u0275\u0275element(22, "i", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "button", 17);
        \u0275\u0275listener("click", function ProfileComponent_Template_button_click_23_listener() {
          return ctx.navigateToContact();
        });
        \u0275\u0275elementStart(24, "span");
        \u0275\u0275text(25, "Contact Me");
        \u0275\u0275elementEnd();
        \u0275\u0275element(26, "i", 18);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 19)(28, "a", 20);
        \u0275\u0275listener("click", function ProfileComponent_Template_a_click_28_listener() {
          return ctx.goToLinkedin();
        });
        \u0275\u0275element(29, "i", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "a", 22);
        \u0275\u0275listener("click", function ProfileComponent_Template_a_click_30_listener() {
          return ctx.goToGithub();
        });
        \u0275\u0275element(31, "i", 23);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(32, "div", 24)(33, "div", 25)(34, "div", 26)(35, "div", 27);
        \u0275\u0275element(36, "i", 28);
        \u0275\u0275elementStart(37, "h3", 29);
        \u0275\u0275text(38, "30+");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "p", 30);
        \u0275\u0275text(40, "REST APIs Integrated");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(41, "div", 25)(42, "div", 26)(43, "div", 27);
        \u0275\u0275element(44, "i", 31);
        \u0275\u0275elementStart(45, "h3", 29);
        \u0275\u0275text(46, "60%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "p", 30);
        \u0275\u0275text(48, "Bundle Size Reduction");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(49, "div", 25)(50, "div", 26)(51, "div", 27);
        \u0275\u0275element(52, "i", 32);
        \u0275\u0275elementStart(53, "h3", 29);
        \u0275\u0275text(54, "90%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "p", 30);
        \u0275\u0275text(56, "Security Incidents Blocked");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(57, "div", 25)(58, "div", 26)(59, "div", 27);
        \u0275\u0275element(60, "i", 33);
        \u0275\u0275elementStart(61, "h3", 29);
        \u0275\u0275text(62, "< 2s");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(63, "p", 30);
        \u0275\u0275text(64, "Booking Latency Engine");
        \u0275\u0275elementEnd()()()()();
      }
    }, dependencies: [ScrollRevealDirective, NgOptimizedImage], styles: ['\n\n.profile-img-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 220px;\n  height: 220px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  animation: float 6s ease-in-out infinite;\n}\n@media (min-width: 576px) {\n  .profile-img-container[_ngcontent-%COMP%] {\n    width: 280px;\n    height: 280px;\n  }\n}\n@media (min-width: 768px) {\n  .profile-img-container[_ngcontent-%COMP%] {\n    width: 400px;\n    height: 400px;\n  }\n}\n.profile-pic[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  position: relative;\n  z-index: 2;\n  border: 4px solid var(--border-color);\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);\n}\n.glow-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 110%;\n  height: 110%;\n  border-radius: 50%;\n  border: 2px solid var(--accent-primary);\n  z-index: 1;\n  animation: pulse-glow 3s infinite;\n}\n.social-links[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  background: var(--glass-bg);\n  border: 1px solid var(--border-color);\n  color: var(--text-main);\n  font-size: 1.2rem;\n  cursor: pointer;\n  transition: var(--transition-smooth);\n}\n.social-links[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%]:hover {\n  background: var(--accent-primary);\n  border-color: var(--accent-primary);\n  color: #fff;\n  transform: translateY(-5px);\n  box-shadow: 0 5px 15px rgba(0, 242, 254, 0.4);\n}\n.subtitle[_ngcontent-%COMP%] {\n  font-family: "Outfit", sans-serif;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  font-weight: 600;\n  margin-top: -0.5rem;\n  font-size: 0.85rem !important;\n}\n@media (min-width: 576px) {\n  .subtitle[_ngcontent-%COMP%] {\n    font-size: 1rem !important;\n  }\n}\n@media (min-width: 768px) {\n  .subtitle[_ngcontent-%COMP%] {\n    font-size: 1.25rem !important;\n  }\n}\n.reveal-up[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateY(30px);\n  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.reveal-up.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n/*# sourceMappingURL=profile.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src\\app\\components\\profile\\profile.component.ts", lineNumber: 13 });
})();

// src/app/components/about/about.component.ts
var AboutComponent = class _AboutComponent {
  constructor() {
  }
  getExperienceYears() {
    const startDate = new Date(2024, 1);
    const currentDate = /* @__PURE__ */ new Date();
    const years = currentDate.getFullYear() - startDate.getFullYear();
    const m = currentDate.getMonth() - startDate.getMonth();
    return m < 0 || m === 0 && currentDate.getDate() < startDate.getDate() ? years - 1 : years;
  }
  static {
    this.\u0275fac = function AboutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AboutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutComponent, selectors: [["app-about"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 67, vars: 2, consts: [["id", "about", 1, "container", "col-11", "col-lg-10", "mx-auto"], ["appScrollReveal", ""], [1, "fs-5", "text-center", "text-muted", "mb-2", "font-outfit"], [1, "display-4", "fw-bold", "text-center", "mb-5", "font-outfit", "text-gradient"], [1, "row", "align-items-center"], ["appScrollReveal", "", 1, "col-12", "col-lg-5", "mb-5", "mb-lg-0", "reveal-left"], [1, "about-img-container", "position-relative"], [1, "glow-bg", "glow-purple", 2, "top", "10%", "left", "10%"], ["src", "./assets/full-rajat-img.jpg", "alt", "Rajat's profile image", 1, "img-fluid", "rounded-4", "shadow-lg", "position-relative", "z-1", "about-pic"], [1, "col-12", "col-lg-7"], [1, "row", "g-4", "mb-4"], ["appScrollReveal", "", 1, "col-12", "col-md-6"], [1, "glass-card", "p-4", "h-100", "text-center"], [1, "icon-container", "mb-3", "mx-auto"], [1, "fa", "fa-award", "fs-3"], [1, "fw-bold", "fs-4", "mb-3", "font-outfit"], [1, "text-muted", "small", "mb-0"], [1, "text-main"], ["appScrollReveal", "", 1, "col-12", "col-md-6", "reveal-delay-1"], [1, "icon-container", "mb-3", "mx-auto", 2, "background", "rgba(16, 185, 129, 0.1)", "color", "var(--accent-emerald)"], [1, "fa", "fa-laptop-code", "fs-3"], ["appScrollReveal", "", 1, "glass-panel", "p-4"], [1, "text-muted", "mb-0", "lh-lg"]], template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "p", 2);
        \u0275\u0275text(3, "Get to know me better");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h1", 3);
        \u0275\u0275text(5, "About Me");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6);
        \u0275\u0275element(9, "div", 7)(10, "img", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "div", 13);
        \u0275\u0275element(16, "i", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "h3", 15);
        \u0275\u0275text(18, "Professional Experience");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "p", 16)(20, "strong", 17);
        \u0275\u0275text(21);
        \u0275\u0275elementEnd();
        \u0275\u0275text(22, " architecting and delivering high-performance web applications. ");
        \u0275\u0275element(23, "br")(24, "br");
        \u0275\u0275text(25, " Specialized in modern ");
        \u0275\u0275elementStart(26, "strong", 17);
        \u0275\u0275text(27, "Angular");
        \u0275\u0275elementEnd();
        \u0275\u0275text(28, ", SSR, and ");
        \u0275\u0275elementStart(29, "strong", 17);
        \u0275\u0275text(30, "Node.js");
        \u0275\u0275elementEnd();
        \u0275\u0275text(31, " backend integration. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(32, "div", 18)(33, "div", 12)(34, "div", 19);
        \u0275\u0275element(35, "i", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "h3", 15);
        \u0275\u0275text(37, "Core Expertise");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "p", 16)(39, "strong", 17);
        \u0275\u0275text(40, "Angular 14\u201319");
        \u0275\u0275elementEnd();
        \u0275\u0275text(41, " for modular UI/UX. ");
        \u0275\u0275element(42, "br")(43, "br");
        \u0275\u0275elementStart(44, "strong", 17);
        \u0275\u0275text(45, "Node.js, Express, JWT");
        \u0275\u0275elementEnd();
        \u0275\u0275text(46, " for secure APIs. ");
        \u0275\u0275element(47, "br")(48, "br");
        \u0275\u0275elementStart(49, "strong", 17);
        \u0275\u0275text(50, "MongoDB & SQL");
        \u0275\u0275elementEnd();
        \u0275\u0275text(51, " for scalable data models. ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(52, "div", 21)(53, "p", 22);
        \u0275\u0275text(54, " I'm ");
        \u0275\u0275elementStart(55, "strong", 17);
        \u0275\u0275text(56, "Rajat Thakur");
        \u0275\u0275elementEnd();
        \u0275\u0275text(57, ", a Results-driven Software Engineer based in Mohali, India, with ");
        \u0275\u0275elementStart(58, "strong", 17);
        \u0275\u0275text(59);
        \u0275\u0275elementEnd();
        \u0275\u0275text(60, " of experience architecting and delivering high-performance web applications. I specialize in modern ");
        \u0275\u0275elementStart(61, "strong", 17);
        \u0275\u0275text(62, "Angular development");
        \u0275\u0275elementEnd();
        \u0275\u0275text(63, ", Angular SSR for SEO optimization, and ");
        \u0275\u0275elementStart(64, "strong", 17);
        \u0275\u0275text(65, "Node.js");
        \u0275\u0275elementEnd();
        \u0275\u0275text(66, " backend integration. My expertise lies in engineering scalable frontend architectures, delivering seamless user experiences, and building real-time interactive systems. Always eager to innovate, I thrive in fast-paced production environments that value continuous learning. ");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate1("", ctx.getExperienceYears(), "+ Years");
        \u0275\u0275advance(38);
        \u0275\u0275textInterpolate1("", ctx.getExperienceYears(), " Years");
      }
    }, dependencies: [
      CommonModule,
      ScrollRevealDirective
    ], styles: ["\n\n.icon-container[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(0, 242, 254, 0.1);\n  color: var(--accent-primary);\n  margin-bottom: 1rem;\n  transition: var(--transition-smooth);\n}\n.glass-card[_ngcontent-%COMP%]:hover   .icon-container[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n  box-shadow: 0 0 20px rgba(0, 242, 254, 0.2);\n}\n.text-main[_ngcontent-%COMP%] {\n  color: var(--text-main);\n}\n.about-pic[_ngcontent-%COMP%] {\n  max-height: 500px;\n  width: 100%;\n  object-fit: cover;\n  border: 1px solid var(--border-color);\n}\n/*# sourceMappingURL=about.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutComponent, { className: "AboutComponent", filePath: "src\\app\\components\\about\\about.component.ts", lineNumber: 15 });
})();

// src/app/components/engineering-expertise/engineering-expertise.component.ts
var _forTrack0 = ($index, $item) => $item.title;
function EngineeringExpertiseComponent_For_11_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tech_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tech_r1);
  }
}
function EngineeringExpertiseComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "div", 10);
    \u0275\u0275element(4, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h4", 11);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 12);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "p", 13);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 14);
    \u0275\u0275repeaterCreate(13, EngineeringExpertiseComponent_For_11_For_14_Template, 2, 1, "span", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275classMap(item_r2.icon + " fs-4 text-primary");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.subtitle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(item_r2.techs);
  }
}
var EngineeringExpertiseComponent = class _EngineeringExpertiseComponent {
  constructor() {
    this.expertiseList = [
      {
        title: "Angular SSR & SEO Optimization",
        subtitle: "Server-Side Rendering / Pre-rendering",
        description: "Implementing high-performance Server-Side Rendering (SSR) for instantaneous page loads, complete search crawler indexing, dynamic structured data, and rich social sharing previews.",
        icon: "fas fa-globe-americas",
        techs: ["Angular SSR", "Dynamic Meta Service", "JSON-LD Schema", "Lighthouse Optimization"]
      },
      {
        title: "Scalable Frontend Architecture",
        subtitle: "Reactive Standalone Engineering",
        description: "Designing highly decoupled frontend applications using standalone components, strict route guards, centralized HTTP interceptors, reusable UI modules, and reactive RxJS state management.",
        icon: "fas fa-cubes",
        techs: ["Standalone Engine", "RxJS BehaviorSubjects", "Guards & Interceptors", "Modular Design"]
      },
      {
        title: "Real-Time Systems & Maps",
        subtitle: "Bi-directional Event Streaming",
        description: "Developing low-latency real-time applications integrating Socket.io WebSockets, live Google Maps tracking with customized marker clustering, and interactive live admin data dashboards.",
        icon: "fas fa-sync-alt",
        techs: ["Socket.io", "Google Maps API", "Firebase Messaging", "Ngx-Charts"]
      },
      {
        title: "Security & Access Control",
        subtitle: "JWT & Role-Based UI Guarding",
        description: "Securing administrative and consumer products with JWT authorization workflows, automatic silent token refresh interceptors, and strict Role-Based Access Control (RBAC) frontend rendering.",
        icon: "fas fa-user-shield",
        techs: ["JWT Auth Workflows", "RBAC Control Layers", "Silent Token Refresh", "HTTPS Interceptors"]
      },
      {
        title: "Performance Engineering",
        subtitle: "Data Grid Scalability",
        description: "Tuning complex data-dense grids handling 10k+ active order/inventory items using Virtual Scrolling, OnPush change detection strategies, and lazy-loading route bundles.",
        icon: "fas fa-tachometer-alt",
        techs: ["Virtual Scrolling", "OnPush Strategy", "Lazy Loading", "Bundle Splitting"]
      }
    ];
  }
  static {
    this.\u0275fac = function EngineeringExpertiseComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EngineeringExpertiseComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EngineeringExpertiseComponent, selectors: [["app-engineering-expertise"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 0, consts: [["id", "expertise", 1, "container", "col-11", "col-lg-10", "mx-auto", "py-5"], ["appScrollReveal", "", 1, "row", "mb-5"], [1, "col-12", "text-center"], [1, "section-label", "mb-2"], [1, "display-3", "fw-bold", "font-outfit", "text-gradient", "mb-3"], [1, "fs-5", "text-muted", "max-w-2xl", "mx-auto"], ["appScrollReveal", "", 1, "row", "g-4", "justify-content-center", "reveal-up"], [1, "col-12", "col-md-6", "col-lg-4"], [1, "expertise-card", "h-100", "d-flex", "flex-column"], [1, "d-flex", "align-items-center", "mb-3"], [1, "icon-box", "me-3"], [1, "mb-1", "text-main", "font-outfit", "fs-5"], [1, "text-primary", "small", "uppercase", "tracking-wider", "mb-0", "font-outfit", "opacity-75", 2, "font-size", "0.7rem"], [1, "text-muted", "small", "flex-grow-1", "mb-4", 2, "line-height", "1.6"], [1, "d-flex", "flex-wrap", "gap-2", "mt-auto"], [1, "tech-badge-sm"]], template: function EngineeringExpertiseComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
        \u0275\u0275text(4, "Capabilities");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1", 4);
        \u0275\u0275text(6, "Engineering Expertise");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 5);
        \u0275\u0275text(8, " Beyond simple code templates, I architect production-grade features built for scale, speed, and absolute reliability. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 6);
        \u0275\u0275repeaterCreate(10, EngineeringExpertiseComponent_For_11_Template, 15, 5, "div", 7, _forTrack0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275repeater(ctx.expertiseList);
      }
    }, dependencies: [CommonModule, ScrollRevealDirective], styles: ['\n\n.expertise-card[_ngcontent-%COMP%] {\n  background: var(--glass-bg);\n  border: 1px solid var(--glass-border);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  border-radius: 20px;\n  padding: 2.2rem 1.8rem;\n  transition: var(--transition-smooth);\n  position: relative;\n  overflow: hidden;\n}\n.expertise-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background:\n    radial-gradient(\n      circle at 10% 10%,\n      rgba(0, 242, 254, 0.05) 0%,\n      transparent 60%);\n  opacity: 0;\n  transition: var(--transition-smooth);\n  pointer-events: none;\n}\n.expertise-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  border-color: var(--accent-primary);\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 15px rgba(0, 242, 254, 0.1);\n}\n.expertise-card[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.expertise-card[_ngcontent-%COMP%]:hover   .icon-box[_ngcontent-%COMP%] {\n  background: rgba(0, 242, 254, 0.15);\n  border-color: var(--accent-primary);\n  transform: scale(1.1) rotate(5deg);\n}\n.expertise-card[_ngcontent-%COMP%]:hover   .icon-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff !important;\n  text-shadow: 0 0 10px var(--accent-primary);\n}\n.icon-box[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  background: rgba(0, 242, 254, 0.05);\n  border: 1px solid rgba(0, 242, 254, 0.15);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: var(--transition-smooth);\n  flex-shrink: 0;\n}\n.icon-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transition: var(--transition-smooth);\n}\n.tech-badge-sm[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.02);\n  color: var(--text-muted);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  padding: 0.25rem 0.6rem;\n  border-radius: 6px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  transition: var(--transition-fast);\n}\n.tech-badge-sm[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 242, 254, 0.05);\n  color: var(--accent-primary);\n  border-color: rgba(0, 242, 254, 0.2);\n}\n/*# sourceMappingURL=engineering-expertise.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EngineeringExpertiseComponent, { className: "EngineeringExpertiseComponent", filePath: "src\\app\\components\\engineering-expertise\\engineering-expertise.component.ts", lineNumber: 20 });
})();

// src/app/components/professional-experience/professional-experience.component.ts
var _forTrack02 = ($index, $item) => $item.company;
function ProfessionalExperienceComponent_For_12_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bullet_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(bullet_r1);
  }
}
function ProfessionalExperienceComponent_For_12_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(skill_r2);
  }
}
function ProfessionalExperienceComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9);
    \u0275\u0275element(2, "i", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11)(4, "h3", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h4", 13);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 14);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 15)(11, "div", 16)(12, "ul", 17);
    \u0275\u0275repeaterCreate(13, ProfessionalExperienceComponent_For_12_For_14_Template, 2, 1, "li", 18, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 19);
    \u0275\u0275repeaterCreate(16, ProfessionalExperienceComponent_For_12_For_17_Template, 2, 1, "span", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r3.role);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.company);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.period);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(item_r3.highlights);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(item_r3.skills);
  }
}
var ProfessionalExperienceComponent = class _ProfessionalExperienceComponent {
  constructor(http) {
    this.http = http;
    this.milestones = [];
  }
  ngOnInit() {
    this.http.get("http://localhost:5000/api/experiences").subscribe({
      next: (exps) => {
        const sorted = exps.sort((a, b) => (a.ordering || 99) - (b.ordering || 99));
        this.milestones = sorted.map((e) => ({
          role: e.role,
          company: e.company,
          period: e.duration,
          // Mapped from duration in Mongoose
          highlights: e.achievements,
          // Mapped from achievements in Mongoose
          skills: e.technologies
          // Mapped from technologies in Mongoose
        }));
      },
      error: (err) => {
        console.error("Failed to load career milestones", err);
        this.milestones = [
          {
            role: "Associate Software Engineer (Full-Stack)",
            company: "Rebuild Technologies",
            period: "June 2024 \u2013 Present",
            highlights: [
              "Led frontend module development for a scalable rental management admin platform including SSR integration, reusable architecture patterns, and real-time operational dashboards.",
              "Developed and maintained 30+ RESTful APIs using Node.js, Express.js, and MongoDB, cutting backend latency by 25%.",
              "Architected JWT secure authentication and Role-Based Access Control (RBAC), reducing unauthorized incidents by over 90%.",
              "Integrated Google Maps Location Services and Socket.io WebSockets, increasing live driver tracking visibility by 50%.",
              "Refactored 60% of legacy core frontend structures, cutting compiled code bundle size by 40% using lazy loading."
            ],
            skills: ["Angular 18/20", "SSR", "Node.js", "Express", "MongoDB", "Socket.io", "Google Maps API", "RxJS", "JWT"]
          },
          {
            role: "Backend Intern (Node.js)",
            company: "Apptunix",
            period: "February 2024 \u2013 May 2024",
            highlights: [
              "Refactored and optimized 25+ internal business APIs, achieving a 20% improvement in endpoint response times.",
              "Contributed to the deployment of production-grade database querying modules, scaling concurrent user handling by 2x.",
              "Collaborated actively in agile sprints, CI/CD automated deployments, and comprehensive backend integration tests."
            ],
            skills: ["Node.js", "Express", "MongoDB", "REST APIs", "Git", "Agile Sprints", "Postman"]
          }
        ];
      }
    });
  }
  static {
    this.\u0275fac = function ProfessionalExperienceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProfessionalExperienceComponent)(\u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfessionalExperienceComponent, selectors: [["app-professional-experience"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 0, consts: [["id", "timeline", 1, "container", "col-11", "col-lg-10", "mx-auto", "py-5"], ["appScrollReveal", "", 1, "row", "mb-5"], [1, "col-12", "text-center"], [1, "section-label", "mb-2"], [1, "display-3", "fw-bold", "font-outfit", "text-gradient", "mb-3"], [1, "fs-5", "text-muted", "max-w-2xl", "mx-auto"], ["appScrollReveal", "", 1, "timeline-container", "position-relative", "reveal-up"], [1, "timeline-line"], [1, "timeline-item", "d-flex", "flex-column", "flex-md-row", "justify-content-between", "mb-5", "position-relative"], [1, "timeline-dot"], [1, "fas", "fa-briefcase"], [1, "timeline-info", "col-12", "col-md-5", "text-md-end", "mb-3", "mb-md-0", "pe-md-5", "ps-md-3"], [1, "fw-bold", "text-main", "font-outfit", "fs-4", "mb-1"], [1, "text-primary", "fw-bold", "font-outfit", "fs-5", "mb-3"], [1, "badge-date"], [1, "timeline-content", "col-12", "col-md-6", "ps-md-5", "pe-md-3"], [1, "glass-panel", "p-4", "border-dark-subtle"], [1, "achievement-list", "mb-4"], [1, "text-muted", "small", "mb-3", 2, "line-height", "1.6"], [1, "d-flex", "flex-wrap", "gap-2"], [1, "tech-badge"]], template: function ProfessionalExperienceComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
        \u0275\u0275text(4, "History");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1", 4);
        \u0275\u0275text(6, "Professional Experience");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 5);
        \u0275\u0275text(8, " A track record of engineering scalable backend modules, building complex admin controllers, and refactoring performance flows. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 6);
        \u0275\u0275element(10, "div", 7);
        \u0275\u0275repeaterCreate(11, ProfessionalExperienceComponent_For_12_Template, 18, 3, "div", 8, _forTrack02);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275repeater(ctx.milestones);
      }
    }, dependencies: [CommonModule, ScrollRevealDirective], styles: ['@charset "UTF-8";\n\n\n\n.timeline-container[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n}\n.timeline-line[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  top: 0;\n  width: 2px;\n  height: 100%;\n  background:\n    linear-gradient(\n      180deg,\n      var(--accent-primary) 0%,\n      var(--accent-purple) 60%,\n      transparent 100%);\n  opacity: 0.15;\n  z-index: 1;\n}\n.timeline-item[_ngcontent-%COMP%] {\n  z-index: 2;\n  transition: var(--transition-smooth);\n}\n.timeline-item[_ngcontent-%COMP%]:hover   .timeline-dot[_ngcontent-%COMP%] {\n  background: var(--accent-primary);\n  color: #fff;\n  box-shadow: 0 0 25px var(--accent-primary);\n  transform: translate(-50%, 0) scale(1.1);\n  border-color: transparent;\n}\n.timeline-item[_ngcontent-%COMP%]:hover   .timeline-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--accent-primary);\n}\n.timeline-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 0;\n  transform: translate(-50%, 0);\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: var(--bg-color);\n  border: 2px solid var(--accent-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10;\n  color: var(--accent-primary);\n  font-size: 0.9rem;\n  box-shadow: 0 0 15px rgba(0, 242, 254, 0.2);\n  transition: var(--transition-smooth);\n}\n.badge-date[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  color: var(--text-muted);\n  padding: 0.45rem 1.1rem;\n  border-radius: 100px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 0.05em;\n  display: inline-block;\n  font-family: "Outfit", sans-serif;\n  transition: var(--transition-fast);\n}\n.timeline-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  transition: var(--transition-smooth);\n}\n.achievement-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0;\n}\n.achievement-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 1.5rem;\n}\n.achievement-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "\\2192";\n  position: absolute;\n  left: 0;\n  color: var(--accent-emerald);\n  font-weight: 800;\n  font-size: 0.95rem;\n}\n@media (max-width: 767.98px) {\n  .timeline-container[_ngcontent-%COMP%] {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n  }\n  .timeline-line[_ngcontent-%COMP%] {\n    left: 20px !important;\n    transform: none !important;\n  }\n  .timeline-dot[_ngcontent-%COMP%] {\n    left: 20px !important;\n    transform: translateX(-50%) !important;\n    width: 32px !important;\n    height: 32px !important;\n    font-size: 0.75rem !important;\n  }\n  .timeline-item[_ngcontent-%COMP%]:hover   .timeline-dot[_ngcontent-%COMP%] {\n    transform: translateX(-50%) scale(1.1) !important;\n  }\n  .timeline-info[_ngcontent-%COMP%] {\n    text-align: left !important;\n    padding-left: 45px !important;\n    padding-right: 0 !important;\n  }\n  .timeline-content[_ngcontent-%COMP%] {\n    padding-left: 45px !important;\n    padding-right: 0 !important;\n  }\n}\n/*# sourceMappingURL=professional-experience.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfessionalExperienceComponent, { className: "ProfessionalExperienceComponent", filePath: "src\\app\\components\\professional-experience\\professional-experience.component.ts", lineNumber: 21 });
})();

// src/app/components/experience/experience.component.ts
var _forTrack03 = ($index, $item) => $item.index;
function ExperienceComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "img", 9);
    \u0275\u0275elementStart(2, "span", 10);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("ngSrc", item_r1.src);
    \u0275\u0275property("alt", item_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.name);
  }
}
var ExperienceComponent = class _ExperienceComponent {
  constructor(http) {
    this.http = http;
    this.experienceItems = [];
  }
  ngOnInit() {
    this.http.get("http://localhost:5000/api/skills").subscribe({
      next: (skills) => {
        this.experienceItems = skills.map((s) => ({
          name: s.name,
          src: s.icon
          // Matches asset image paths
        }));
      },
      error: (err) => {
        console.error("Failed to load dynamic skills ticker", err);
        this.experienceItems = [
          { name: "HTML", src: "./assets/technologies/html.png" },
          { name: "CSS", src: "./assets/technologies/css.png" },
          { name: "Bootstrap", src: "./assets/technologies/bootstrap.png" },
          { name: "TailwindCSS", src: "./assets/technologies/tailwind.png" },
          { name: "Javascript", src: "./assets/technologies/js.png" },
          { name: "Typescript", src: "./assets/technologies/ts.png" },
          { name: "Angular", src: "./assets/technologies/angular.png" },
          { name: "Node.js", src: "./assets/technologies/node.png" },
          { name: "Express", src: "./assets/technologies/express.png" },
          { name: "MongoDB", src: "./assets/technologies/mongo.png" },
          { name: "MySQL", src: "./assets/technologies/mysql.png" },
          { name: "GIT", src: "./assets/technologies/git.png" }
        ];
      }
    });
  }
  // needed to create an infinite-like scroll effect
  get getExperience() {
    if (!this.experienceItems || this.experienceItems.length === 0)
      return [];
    return Array.from({ length: 10 }, (_, i) => this.experienceItems.map((item, index) => __spreadProps(__spreadValues({}, item), {
      index: i * this.experienceItems.length + index
    }))).flat();
  }
  static {
    this.\u0275fac = function ExperienceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExperienceComponent)(\u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExperienceComponent, selectors: [["app-experience"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 0, consts: [["id", "skill-set", 1, "container", "mx-auto", "py-5"], ["appScrollReveal", "", 1, "row", "mb-5"], [1, "col-12", "text-center"], [1, "fs-5", "text-muted", "mb-2", "font-outfit"], [1, "display-5", "fw-bold", "font-outfit", "text-gradient"], ["appScrollReveal", "", 1, "glass-card", "py-4", "reveal-up"], [1, "experience-items"], [1, "experience-slide"], [1, "tech-icon-wrapper"], ["width", "60", "height", "60", 1, "item-img", 3, "ngSrc", "alt"], [1, "tech-name"]], template: function ExperienceComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
        \u0275\u0275text(4, "Technologies I work with");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1", 4);
        \u0275\u0275text(6, "Tech Stack");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "div", 7);
        \u0275\u0275repeaterCreate(10, ExperienceComponent_For_11_Template, 4, 3, "div", 8, _forTrack03);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275repeater(ctx.getExperience);
      }
    }, dependencies: [
      NgOptimizedImage,
      CommonModule,
      ScrollRevealDirective
    ], styles: ['\n\n@keyframes _ngcontent-%COMP%_slide {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(-50%);\n  }\n}\n.experience-items[_ngcontent-%COMP%] {\n  overflow: hidden;\n  white-space: nowrap;\n  position: relative;\n  width: 100%;\n  display: flex;\n  padding: 20px 0;\n}\n.experience-items[_ngcontent-%COMP%]::before, \n.experience-items[_ngcontent-%COMP%]::after {\n  position: absolute;\n  top: 0;\n  width: 150px;\n  height: 100%;\n  content: "";\n  z-index: 2;\n  pointer-events: none;\n}\n.experience-items[_ngcontent-%COMP%]::before {\n  left: 0;\n  background:\n    linear-gradient(\n      to right,\n      var(--bg-secondary) 0%,\n      transparent 100%);\n}\n.experience-items[_ngcontent-%COMP%]::after {\n  right: 0;\n  background:\n    linear-gradient(\n      to left,\n      var(--bg-secondary) 0%,\n      transparent 100%);\n}\n.experience-slide[_ngcontent-%COMP%] {\n  display: inline-flex;\n  animation: _ngcontent-%COMP%_slide 50s infinite linear;\n}\n.experience-slide[_ngcontent-%COMP%]:hover {\n  animation-play-state: paused;\n}\n.tech-icon-wrapper[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 0 30px;\n  padding: 1.5rem;\n  background: var(--glass-bg);\n  border: 1px solid var(--glass-border);\n  border-radius: 20px;\n  transition: var(--transition-smooth);\n  cursor: pointer;\n  min-width: 120px;\n}\n.tech-icon-wrapper[_ngcontent-%COMP%]:hover {\n  position: relative;\n  z-index: 3;\n  transform: translateY(-10px) scale(1.05);\n  background: rgba(255, 255, 255, 0.05);\n  border-color: var(--accent-primary);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);\n}\n.tech-icon-wrapper[_ngcontent-%COMP%]:hover   .item-img[_ngcontent-%COMP%] {\n  filter: drop-shadow(0 0 15px var(--accent-primary));\n}\n.tech-icon-wrapper[_ngcontent-%COMP%]:hover   .tech-name[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n  color: var(--accent-primary);\n}\n.item-img[_ngcontent-%COMP%] {\n  height: 60px !important;\n  width: auto !important;\n  object-fit: contain;\n  transition: var(--transition-smooth);\n}\n.tech-name[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-family: "Inter", sans-serif;\n  font-size: 0.85rem;\n  color: var(--text-main);\n  opacity: 0;\n  transform: translateY(10px);\n  transition: var(--transition-smooth);\n}\n/*# sourceMappingURL=experience.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExperienceComponent, { className: "ExperienceComponent", filePath: "src\\app\\components\\experience\\experience.component.ts", lineNumber: 23 });
})();

// src/app/components/projects/project-item/project-item.component.ts
var _c0 = (a0) => ["/project", a0];
function ProjectItemComponent_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tech_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tech_r1, " ");
  }
}
function ProjectItemComponent_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", ctx_r1.project.technologies.length - 4, " ");
  }
}
var ProjectItemComponent = class _ProjectItemComponent {
  static {
    this.\u0275fac = function ProjectItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectItemComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectItemComponent, selectors: [["app-project-item"]], inputs: { project: "project" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 20, vars: 11, consts: [[1, "project-card", "d-flex", "flex-column", 3, "routerLink"], [1, "project-img-wrapper"], [1, "project-img", 3, "src", "alt"], [1, "project-overlay"], [1, "bt", "btn-sm", "px-4"], [1, "project-role-badge"], [1, "card-body", "p-4", "d-flex", "flex-column", "flex-grow-1"], [1, "mb-2"], [1, "h4", "fw-bold", "text-main", "mb-1", "font-outfit"], [1, "text-primary", "small", "fw-bold", "tracking-widest", "uppercase", "mb-0"], [1, "text-muted", "small", "mb-4", "line-clamp-2"], [1, "mt-auto"], [1, "d-flex", "flex-wrap", "gap-2"], ["class", "tech-badge-sm", 4, "ngFor", "ngForOf"], ["class", "tech-badge-sm opacity-50", 4, "ngIf"], [1, "tech-badge-sm"], [1, "tech-badge-sm", "opacity-50"]], template: function ProjectItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "img", 2);
        \u0275\u0275elementStart(3, "div", 3)(4, "span", 4);
        \u0275\u0275text(5, "View Case Study");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 5);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "h3", 8);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "p", 9);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "p", 10);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 11)(17, "div", 12);
        \u0275\u0275template(18, ProjectItemComponent_span_18_Template, 2, 1, "span", 13)(19, ProjectItemComponent_span_19_Template, 2, 1, "span", 14);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c0, ctx.project.id));
        \u0275\u0275advance(2);
        \u0275\u0275property("src", ctx.project.src, \u0275\u0275sanitizeUrl)("alt", ctx.project.name);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", ctx.project.role, " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.project.name);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.project.subtitle);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.project.description, " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.project.technologies.slice(0, 4));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.project.technologies.length > 4);
      }
    }, dependencies: [RouterModule, RouterLink, CommonModule, NgForOf, NgIf], styles: ["\n\n/*# sourceMappingURL=projects.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectItemComponent, { className: "ProjectItemComponent", filePath: "src\\app\\components\\projects\\project-item\\project-item.component.ts", lineNumber: 13 });
})();

// src/app/components/projects/projects.component.ts
var _forTrack04 = ($index, $item) => $item.id;
function ProjectsComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-project-item", 7);
  }
  if (rf & 2) {
    const project_r1 = ctx.$implicit;
    \u0275\u0275property("project", project_r1);
  }
}
var ProjectsComponent = class _ProjectsComponent {
  constructor(projectService) {
    this.projectService = projectService;
    this.projects = [];
  }
  ngOnInit() {
    this.projectService.getProjects().subscribe({
      next: (projs) => {
        this.projects = projs.map((p) => __spreadProps(__spreadValues({}, p), {
          name: p.title,
          id: p.slug
          // Map slug to id dynamically for details URL routing
        }));
      },
      error: (err) => console.error("Failed to load projects list", err)
    });
  }
  static {
    this.\u0275fac = function ProjectsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectsComponent)(\u0275\u0275directiveInject(ProjectService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectsComponent, selectors: [["app-projects"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 0, consts: [["id", "projects", 1, "container", "mx-auto", "py-5"], ["appScrollReveal", "", 1, "row", "mb-5"], [1, "col-12", "text-center"], [1, "section-label", "mb-2"], [1, "display-3", "fw-bold", "font-outfit", "text-gradient", "mb-3"], [1, "fs-5", "text-muted", "max-w-2xl", "mx-auto"], [1, "projects-grid"], ["appScrollReveal", "", 1, "reveal-up", 3, "project"]], template: function ProjectsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
        \u0275\u0275text(4, "Portfolio");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1", 4);
        \u0275\u0275text(6, "Featured Case Studies");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 5);
        \u0275\u0275text(8, "Explore high-performance engineering solutions, from real-time marketplaces to data-intensive admin ecosystems.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 6);
        \u0275\u0275repeaterCreate(10, ProjectsComponent_For_11_Template, 1, 1, "app-project-item", 7, _forTrack04);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275repeater(ctx.projects);
      }
    }, dependencies: [
      ProjectItemComponent,
      ScrollRevealDirective
    ], styles: ["\n\n/*# sourceMappingURL=projects.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectsComponent, { className: "ProjectsComponent", filePath: "src\\app\\components\\projects\\projects.component.ts", lineNumber: 19 });
})();

// src/app/components/home/home.component.ts
var HomeComponent = class _HomeComponent {
  constructor(seoService) {
    this.seoService = seoService;
  }
  ngOnInit() {
    this.seoService.generateTags({
      title: "Rajat Thakur | Enterprise Angular & Node.js Software Engineer",
      description: "Software Engineer with 2 years of experience building high-performance, real-time web applications using Angular 14-20, SSR, Node.js, WebSockets, and scalable frontend architectures.",
      keywords: "Rajat Thakur, Angular Developer, Angular SSR, Software Engineer, Frontend Engineer, Node.js, WebSockets, Socket.io, RxJS, JWT, RBAC, Web Performance, SaaS Dashboards",
      slug: ""
    });
  }
  static {
    this.\u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomeComponent)(\u0275\u0275directiveInject(SeoService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 0, consts: [[1, "main-content-wrapper"]], template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-profile")(2, "app-about")(3, "app-engineering-expertise")(4, "app-professional-experience")(5, "app-experience")(6, "app-projects")(7, "app-contact");
        \u0275\u0275elementEnd();
      }
    }, dependencies: [
      ProfileComponent,
      AboutComponent,
      EngineeringExpertiseComponent,
      ProfessionalExperienceComponent,
      ExperienceComponent,
      ProjectsComponent,
      ContactComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\components\\home\\home.component.ts", lineNumber: 26 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-DBRF2EHP.js.map
