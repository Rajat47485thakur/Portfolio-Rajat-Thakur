import {
  API_BASE_URL
} from "./chunk-OP5ZAXAP.js";
import {
  Router,
  RouterOutlet,
  provideRouter
} from "./chunk-IE2EAVOT.js";
import {
  bootstrapApplication
} from "./chunk-Q4EEFISQ.js";
import {
  BehaviorSubject,
  CommonModule,
  EventEmitter,
  HttpClient,
  HttpErrorResponse,
  NgClass,
  ViewportScroller,
  catchError,
  filter,
  inject,
  provideHttpClient,
  provideZoneChangeDetection,
  switchMap,
  take,
  throwError,
  withInterceptors,
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
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-XQCDMNXV.js";

// src/app/core/interceptors/jwt.interceptor.ts
var isRefreshing = false;
var refreshTokenSubject = new BehaviorSubject(null);
var jwtInterceptor = (req, next) => {
  const router = inject(Router);
  const http = inject(HttpClient);
  const token = localStorage.getItem("accessToken");
  const apiBase = API_BASE_URL;
  let authReq = req;
  if (token && (req.url.startsWith("/api") || req.url.startsWith(apiBase))) {
    authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  return next(authReq).pipe(catchError((error) => {
    if (error instanceof HttpErrorResponse && error.status === 401) {
      return handle401Error(authReq, next, http, router);
    }
    return throwError(() => error);
  }));
};
var handle401Error = (request, next, http, router) => {
  const refreshToken = localStorage.getItem("refreshToken");
  const apiBase = API_BASE_URL;
  if (!refreshToken) {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    router.navigate(["/auth/login"]);
    return throwError(() => new Error("Refresh token missing, authentication expired"));
  }
  if (!isRefreshing) {
    isRefreshing = true;
    refreshTokenSubject.next(null);
    return http.post(`${apiBase}/auth/refresh`, { refreshToken }).pipe(switchMap((res) => {
      isRefreshing = false;
      localStorage.setItem("accessToken", res.accessToken);
      localStorage.setItem("refreshToken", res.refreshToken);
      refreshTokenSubject.next(res.accessToken);
      return next(request.clone({
        setHeaders: {
          Authorization: `Bearer ${res.accessToken}`
        }
      }));
    }), catchError((err) => {
      isRefreshing = false;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      router.navigate(["/auth/login"]);
      return throwError(() => err);
    }));
  } else {
    return refreshTokenSubject.pipe(filter((token) => token !== null), take(1), switchMap((token) => {
      return next(request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      }));
    }));
  }
};

// src/app/components/shared/nav-links/nav-links.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function NavLinksComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 1)(1, "a", 2);
    \u0275\u0275listener("click", function NavLinksComponent_For_2_Template_a_click_1_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.scrollTo(item_r2.id);
      return \u0275\u0275resetView(ctx_r2.triggerCloseAside());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.label);
  }
}
var NavLinksComponent = class _NavLinksComponent {
  constructor(viewportScroller, router) {
    this.viewportScroller = viewportScroller;
    this.router = router;
    this.closeAsideEvent = new EventEmitter();
    this.navItems = [
      { label: "Home", id: "home" },
      { label: "About", id: "about" },
      { label: "Expertise", id: "expertise" },
      { label: "Experience", id: "timeline" },
      { label: "Skills", id: "skill-set" },
      { label: "Projects", id: "projects" },
      { label: "Contact", id: "contact" }
    ];
  }
  scrollTo(elementId) {
    if (elementId === "contact") {
      if (this.router.url === "/contact") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        this.router.navigate(["/contact"]).then(() => {
          window.scrollTo({ top: 0 });
        });
      }
      return;
    }
    if (this.router.url !== "/" && !this.router.url.startsWith("/#")) {
      this.router.navigate(["/"]).then(() => {
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(elementId);
        }, 150);
      });
    } else {
      this.viewportScroller.scrollToAnchor(elementId);
    }
  }
  triggerCloseAside() {
    this.closeAsideEvent.emit();
  }
  static {
    this.\u0275fac = function NavLinksComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NavLinksComponent)(\u0275\u0275directiveInject(ViewportScroller), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavLinksComponent, selectors: [["app-nav-links"]], outputs: { closeAsideEvent: "closeAsideEvent" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 0, consts: [[1, "navbar-nav"], [1, "nav-item"], [1, "nav-link", 3, "click"]], template: function NavLinksComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "ul", 0);
        \u0275\u0275repeaterCreate(1, NavLinksComponent_For_2_Template, 3, 1, "li", 1, _forTrack0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.navItems);
      }
    }, styles: ['\n\n.navbar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.nav-link[_ngcontent-%COMP%] {\n  color: var(--text-muted) !important;\n  font-family: "Inter", sans-serif;\n  font-weight: 500;\n  font-size: 1rem;\n  padding: 0.5rem 1rem !important;\n  cursor: pointer;\n  transition: var(--transition-fast);\n  position: relative;\n}\n.nav-link[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  width: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--accent-primary),\n      var(--accent-secondary));\n  transition: var(--transition-smooth);\n  transform: translateX(-50%);\n  border-radius: 2px;\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  color: var(--text-main) !important;\n}\n.nav-link[_ngcontent-%COMP%]:hover::after {\n  width: 80%;\n}\n.mobile-aside[_nghost-%COMP%]   .navbar-nav[_ngcontent-%COMP%], .mobile-aside   [_nghost-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n  flex-direction: column;\n  width: 100%;\n  gap: 0;\n}\n.mobile-aside[_nghost-%COMP%]   .nav-link[_ngcontent-%COMP%], .mobile-aside   [_nghost-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  padding: 1.5rem 2rem !important;\n  border-bottom: 1px solid var(--border-color);\n}\n.mobile-aside[_nghost-%COMP%]   .nav-link[_ngcontent-%COMP%]::after, .mobile-aside   [_nghost-%COMP%]   .nav-link[_ngcontent-%COMP%]::after {\n  display: none;\n}\n.mobile-aside[_nghost-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .mobile-aside   [_nghost-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  background: var(--bg-tertiary);\n  padding-left: 2.5rem !important;\n}\n/*# sourceMappingURL=nav-links.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavLinksComponent, { className: "NavLinksComponent", filePath: "src\\app\\components\\shared\\nav-links\\nav-links.component.ts", lineNumber: 11 });
})();

// src/app/components/header/header.component.ts
var HeaderComponent = class _HeaderComponent {
  constructor() {
    this.isAsideOpen = false;
    this.toggleAsideEvent = new EventEmitter();
  }
  toggleAside() {
    this.isAsideOpen = !this.isAsideOpen;
  }
  onToggleClick() {
    this.toggleAsideEvent.emit();
  }
  onLinkClick(section) {
    const id = section.toLowerCase().replace(" ", "-");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    this.isAsideOpen = false;
  }
  static {
    this.\u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HeaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], outputs: { toggleAsideEvent: "toggleAsideEvent" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 0, consts: [[1, "header-container"], [1, "navbar", "navbar-expand-lg"], [1, "container-fluid"], [1, "navbar-brand"], ["type", "button", 1, "navbar-toggler", "border-0", "p-0", 3, "click"], [1, "fas", "fa-bars", "fs-2", "text-main"], ["id", "navbarNav", 1, "collapse", "navbar-collapse", "justify-content-end"]], template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "Rajat Thakur");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "button", 4);
        \u0275\u0275listener("click", function HeaderComponent_Template_button_click_5_listener() {
          return ctx.onToggleClick();
        });
        \u0275\u0275element(6, "i", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 6);
        \u0275\u0275element(8, "app-nav-links");
        \u0275\u0275elementEnd()()()();
      }
    }, dependencies: [NavLinksComponent], styles: ['\n\n.header-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 1.5rem 0;\n  width: 100%;\n  pointer-events: none;\n}\n.navbar[_ngcontent-%COMP%] {\n  pointer-events: auto;\n  background: rgba(15, 23, 42, 0.7);\n  backdrop-filter: blur(16px) saturate(180%);\n  -webkit-backdrop-filter: blur(16px) saturate(180%);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 100px;\n  padding: 0.75rem 2.5rem;\n  width: fit-content;\n  max-width: 90%;\n  box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.5);\n  transition: var(--transition-smooth);\n}\n.navbar-brand[_ngcontent-%COMP%] {\n  font-family: "Outfit", sans-serif;\n  font-weight: 800;\n  font-size: 1.6rem !important;\n  color: var(--text-main) !important;\n  letter-spacing: -0.5px;\n  margin-right: 2rem;\n}\n.navbar-brand[_ngcontent-%COMP%]::after {\n  content: ".";\n  color: var(--accent-primary);\n}\n.navbar-toggler-icon[_ngcontent-%COMP%] {\n  display: none;\n  cursor: pointer;\n  filter: invert(1);\n  opacity: 0.8;\n  transition: var(--transition-fast);\n}\n.navbar-toggler-icon[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n@media screen and (max-width: 991px) {\n  .navbar-toggler-icon[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .navbar-collapse[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .navbar[_ngcontent-%COMP%] {\n    padding: 0.5rem 1rem;\n    border-radius: 20px;\n  }\n}\n/*# sourceMappingURL=header.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src\\app\\components\\header\\header.component.ts", lineNumber: 13 });
})();

// src/app/components/footer/footer.component.ts
var FooterComponent = class _FooterComponent {
  constructor(viewportScroller, router) {
    this.viewportScroller = viewportScroller;
    this.router = router;
  }
  getCurrentYear() {
    return (/* @__PURE__ */ new Date()).getFullYear();
  }
  scrollTo(id) {
    if (id === "contact") {
      if (this.router.url === "/contact") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        this.router.navigate(["/contact"]).then(() => {
          window.scrollTo({ top: 0 });
        });
      }
      return;
    }
    if (this.router.url !== "/" && !this.router.url.startsWith("/#")) {
      this.router.navigate(["/"]).then(() => {
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(id);
        }, 150);
      });
    } else {
      this.viewportScroller.scrollToAnchor(id);
    }
  }
  static {
    this.\u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FooterComponent)(\u0275\u0275directiveInject(ViewportScroller), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 23, vars: 1, consts: [[1, "footer", "py-5", "mt-5"], [1, "container", "pt-5", "border-top", "border-dark-subtle"], [1, "row", "align-items-center"], [1, "col-lg-3", "text-center", "text-lg-start", "mb-4", "mb-lg-0"], [1, "navbar-brand", "fs-3", "fw-bold", "font-outfit", "text-main"], [1, "text-primary"], [1, "col-lg-6", "mb-4", "mb-lg-0"], [1, "footer-nav", "d-flex", "justify-content-center", "flex-wrap", "gap-4"], [1, "footer-link", 3, "click"], [1, "col-lg-3", "text-center", "text-lg-end"], [1, "text-muted", "small", "mb-0"]], template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
        \u0275\u0275text(5, "Rajat Thakur");
        \u0275\u0275elementStart(6, "span", 5);
        \u0275\u0275text(7, ".");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "a", 8);
        \u0275\u0275listener("click", function FooterComponent_Template_a_click_10_listener() {
          return ctx.scrollTo("home");
        });
        \u0275\u0275text(11, "Home");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "a", 8);
        \u0275\u0275listener("click", function FooterComponent_Template_a_click_12_listener() {
          return ctx.scrollTo("about");
        });
        \u0275\u0275text(13, "About");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "a", 8);
        \u0275\u0275listener("click", function FooterComponent_Template_a_click_14_listener() {
          return ctx.scrollTo("skill-set");
        });
        \u0275\u0275text(15, "Skills");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "a", 8);
        \u0275\u0275listener("click", function FooterComponent_Template_a_click_16_listener() {
          return ctx.scrollTo("projects");
        });
        \u0275\u0275text(17, "Projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "a", 8);
        \u0275\u0275listener("click", function FooterComponent_Template_a_click_18_listener() {
          return ctx.scrollTo("contact");
        });
        \u0275\u0275text(19, "Contacts");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "div", 9)(21, "p", 10);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(22);
        \u0275\u0275textInterpolate1("\xA9 ", ctx.getCurrentYear(), " All Rights Reserved.");
      }
    }, dependencies: [CommonModule], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src\\app\\components\\footer\\footer.component.ts", lineNumber: 11 });
})();

// src/app/layouts/public-layout/public-layout.component.ts
var _c0 = (a0) => ({ "mobile-aside": true, "open": a0 });
var PublicLayoutComponent = class _PublicLayoutComponent {
  constructor() {
    this.isAsideOpen = false;
  }
  toggleAside() {
    this.isAsideOpen = !this.isAsideOpen;
  }
  closeAside() {
    this.isAsideOpen = false;
  }
  static {
    this.\u0275fac = function PublicLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PublicLayoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PublicLayoutComponent, selectors: [["app-public-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 3, consts: [[1, "app-header", 3, "toggleAsideEvent"], [3, "ngClass"], [1, "aside-header"], [1, "fs-4", "font-outfit", "text-white"], [1, "close-btn", 3, "click"], [1, "navbar-nav"], [3, "closeAsideEvent"], [1, "full_slide_down"]], template: function PublicLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-header", 0);
        \u0275\u0275listener("toggleAsideEvent", function PublicLayoutComponent_Template_app_header_toggleAsideEvent_0_listener() {
          return ctx.toggleAside();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(1, "aside", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "Menu");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "button", 4);
        \u0275\u0275listener("click", function PublicLayoutComponent_Template_button_click_5_listener() {
          return ctx.toggleAside();
        });
        \u0275\u0275text(6, "\u2716");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "ul", 5)(8, "app-nav-links", 6);
        \u0275\u0275listener("closeAsideEvent", function PublicLayoutComponent_Template_app_nav_links_closeAsideEvent_8_listener() {
          return ctx.closeAside();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 7);
        \u0275\u0275element(10, "router-outlet")(11, "app-footer");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(1, _c0, ctx.isAsideOpen));
      }
    }, dependencies: [CommonModule, NgClass, RouterOutlet, HeaderComponent, FooterComponent, NavLinksComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PublicLayoutComponent, { className: "PublicLayoutComponent", filePath: "src\\app\\layouts\\public-layout\\public-layout.component.ts", lineNumber: 14 });
})();

// src/app/core/guards/auth.guard.ts
var authGuard = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem("accessToken");
  if (token) {
    return true;
  }
  router.navigate(["/auth/login"], { queryParams: { returnUrl: state.url } });
  return false;
};

// src/app/app.routes.ts
var routes = [
  // ==========================================
  // PUBLIC PORTFOLIO MODULES
  // ==========================================
  {
    path: "",
    component: PublicLayoutComponent,
    children: [
      {
        path: "",
        loadComponent: () => import("./chunk-DBRF2EHP.js").then((m) => m.HomeComponent)
      },
      {
        path: "project/:id",
        loadComponent: () => import("./chunk-CY25KVMX.js").then((m) => m.ProjectDetailComponent)
      },
      {
        path: "contact",
        loadComponent: () => import("./chunk-EOWTDH35.js").then((m) => m.ContactComponent)
      },
      {
        path: "blogs",
        loadComponent: () => import("./chunk-4X72KVR2.js").then((m) => m.BlogListComponent)
      },
      {
        path: "blog/:slug",
        loadComponent: () => import("./chunk-FIZTMLTS.js").then((m) => m.BlogDetailComponent)
      }
    ]
  },
  // ==========================================
  // STANDALONE AUTHENTICATION
  // ==========================================
  {
    path: "auth/login",
    loadComponent: () => import("./chunk-KALWJBT3.js").then((m) => m.LoginComponent)
  },
  // ==========================================
  // SECURED ADMIN CMS WORKSPACE
  // ==========================================
  {
    path: "admin",
    loadComponent: () => import("./chunk-ZAMSTPPP.js").then((m) => m.AdminLayoutComponent),
    canActivate: [authGuard],
    children: [
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
      },
      {
        path: "dashboard",
        loadComponent: () => import("./chunk-THAY7AAV.js").then((m) => m.DashboardComponent)
      },
      {
        path: "resume",
        loadComponent: () => import("./chunk-734BQJQ5.js").then((m) => m.ResumeComponent)
      },
      {
        path: "experience",
        loadComponent: () => import("./chunk-X2MSD3MO.js").then((m) => m.ExperienceComponent)
      },
      {
        path: "projects",
        loadComponent: () => import("./chunk-7OI3ZF3N.js").then((m) => m.ProjectsComponent)
      },
      {
        path: "skills",
        loadComponent: () => import("./chunk-3R2K6YNC.js").then((m) => m.SkillsComponent)
      },
      {
        path: "blogs",
        loadComponent: () => import("./chunk-LDZVC4HO.js").then((m) => m.BlogsComponent)
      },
      {
        path: "contacts",
        loadComponent: () => import("./chunk-VAM5S4EG.js").then((m) => m.ContactsComponent)
      },
      {
        path: "settings",
        loadComponent: () => import("./chunk-DHKSIGLE.js").then((m) => m.SettingsComponent)
      }
    ]
  },
  // Fallback Catch-All
  {
    path: "**",
    redirectTo: ""
  }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([jwtInterceptor]))
  ]
};

// src/app/app.component.ts
var _c02 = (a0) => ({ "mobile-aside": true, "open": a0 });
var AppComponent = class _AppComponent {
  constructor() {
    this.title = "portfolio";
    this.isAsideOpen = false;
  }
  toggleAside() {
    this.isAsideOpen = !this.isAsideOpen;
  }
  closeAside() {
    this.isAsideOpen = false;
  }
  static {
    this.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 3, consts: [[1, "app-header", 3, "toggleAsideEvent"], [3, "ngClass"], [1, "aside-header"], [1, "fs-4"], [1, "close-btn", 3, "click"], [1, "navbar-nav"], [3, "closeAsideEvent"], [1, "full_slide_down"]], template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-header", 0);
        \u0275\u0275listener("toggleAsideEvent", function AppComponent_Template_app_header_toggleAsideEvent_0_listener() {
          return ctx.toggleAside();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(1, "aside", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "Menu");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "button", 4);
        \u0275\u0275listener("click", function AppComponent_Template_button_click_5_listener() {
          return ctx.toggleAside();
        });
        \u0275\u0275text(6, "\u2716");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "ul", 5)(8, "app-nav-links", 6);
        \u0275\u0275listener("closeAsideEvent", function AppComponent_Template_app_nav_links_closeAsideEvent_8_listener() {
          return ctx.closeAside();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 7);
        \u0275\u0275element(10, "router-outlet")(11, "app-footer");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(1, _c02, ctx.isAsideOpen));
      }
    }, dependencies: [CommonModule, NgClass, RouterOutlet, HeaderComponent, FooterComponent, NavLinksComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 15 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
