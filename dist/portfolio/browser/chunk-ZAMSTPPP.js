import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-IE2EAVOT.js";
import "./chunk-Q4EEFISQ.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
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
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-XQCDMNXV.js";

// src/app/layouts/admin-layout/admin-layout.component.ts
var _c0 = (a0) => ({ "collapsed": a0 });
var _c1 = (a0) => ["/admin", a0];
function AdminLayoutComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "span", 24);
    \u0275\u0275text(2, "Rajat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 25);
    \u0275\u0275text(4, ".CMS");
    \u0275\u0275elementEnd()();
  }
}
function AdminLayoutComponent_li_8_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const link_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(link_r1.label);
  }
}
function AdminLayoutComponent_li_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 26)(1, "a", 27);
    \u0275\u0275element(2, "i", 28);
    \u0275\u0275template(3, AdminLayoutComponent_li_8_span_3_Template, 2, 1, "span", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const link_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c1, link_r1.path))("title", link_r1.label);
    \u0275\u0275advance();
    \u0275\u0275classMap(link_r1.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSidebarOpen);
  }
}
function AdminLayoutComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "Live Portfolio");
    \u0275\u0275elementEnd();
  }
}
function AdminLayoutComponent_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "Sign Out");
    \u0275\u0275elementEnd();
  }
}
var AdminLayoutComponent = class _AdminLayoutComponent {
  constructor(router) {
    this.router = router;
    this.isSidebarOpen = true;
    this.sidebarLinks = [
      { label: "Overview", path: "dashboard", icon: "fas fa-chart-line" },
      { label: "Resume Manager", path: "resume", icon: "fas fa-file-pdf" },
      { label: "Experience Timeline", path: "experience", icon: "fas fa-briefcase" },
      { label: "Project CMS", path: "projects", icon: "fas fa-tasks" },
      { label: "Skills Grid", path: "skills", icon: "fas fa-tools" },
      { label: "Technical Blogs", path: "blogs", icon: "fas fa-blog" },
      { label: "Inquiries Inbox", path: "contacts", icon: "fas fa-envelope" },
      { label: "Branding & SEO", path: "settings", icon: "fas fa-cogs" }
    ];
  }
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    this.router.navigate(["/auth/login"]);
  }
  static {
    this.\u0275fac = function AdminLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminLayoutComponent)(\u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLayoutComponent, selectors: [["app-admin-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 28, vars: 8, consts: [[1, "admin-wrapper"], [1, "admin-sidebar", 3, "ngClass"], [1, "sidebar-brand"], ["class", "brand-logo", 4, "ngIf"], [1, "sidebar-toggle", 3, "click"], [1, "fas", 3, "ngClass"], [1, "sidebar-menu"], ["routerLinkActive", "active", 4, "ngFor", "ngForOf"], [1, "sidebar-footer"], ["routerLink", "/", "title", "Public Website", 1, "btn-public"], [1, "fas", "fa-external-link-alt"], ["class", "btn-text", 4, "ngIf"], ["title", "Log Out", 1, "btn-logout", 3, "click"], [1, "fas", "fa-sign-out-alt"], [1, "admin-main"], [1, "admin-topbar"], [1, "topbar-left"], [1, "m-0", "text-white", "font-outfit", "fw-semibold"], [1, "topbar-right"], [1, "user-badge"], [1, "status-indicator"], [1, "user-role", "font-outfit", "text-white"], [1, "admin-content"], [1, "brand-logo"], [1, "text-white", "font-outfit", "fw-bold"], [1, "text-accent", "font-outfit", "fw-bold"], ["routerLinkActive", "active"], [3, "routerLink", "title"], [1, "menu-icon"], ["class", "menu-text", 4, "ngIf"], [1, "menu-text"], [1, "btn-text"]], template: function AdminLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2);
        \u0275\u0275template(3, AdminLayoutComponent_div_3_Template, 5, 0, "div", 3);
        \u0275\u0275elementStart(4, "button", 4);
        \u0275\u0275listener("click", function AdminLayoutComponent_Template_button_click_4_listener() {
          return ctx.toggleSidebar();
        });
        \u0275\u0275element(5, "i", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "nav", 6)(7, "ul");
        \u0275\u0275template(8, AdminLayoutComponent_li_8_Template, 4, 7, "li", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 8)(10, "a", 9);
        \u0275\u0275element(11, "i", 10);
        \u0275\u0275template(12, AdminLayoutComponent_span_12_Template, 2, 0, "span", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "button", 12);
        \u0275\u0275listener("click", function AdminLayoutComponent_Template_button_click_13_listener() {
          return ctx.logout();
        });
        \u0275\u0275element(14, "i", 13);
        \u0275\u0275template(15, AdminLayoutComponent_span_15_Template, 2, 0, "span", 11);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "div", 14)(17, "header", 15)(18, "div", 16)(19, "h4", 17);
        \u0275\u0275text(20, "Portfolio Control CMS");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 18)(22, "div", 19);
        \u0275\u0275element(23, "span", 20);
        \u0275\u0275elementStart(24, "span", 21);
        \u0275\u0275text(25, "Administrator");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(26, "main", 22);
        \u0275\u0275element(27, "router-outlet");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(6, _c0, !ctx.isSidebarOpen));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.isSidebarOpen);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", ctx.isSidebarOpen ? "fa-angle-double-left" : "fa-bars");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.sidebarLinks);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.isSidebarOpen);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.isSidebarOpen);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterOutlet, RouterModule, RouterLink, RouterLinkActive], styles: ['\n\n.admin-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background-color: #0b0f19;\n  font-family: "Inter", sans-serif;\n  color: #e2e8f0;\n}\n.admin-sidebar[_ngcontent-%COMP%] {\n  width: 260px;\n  background: rgba(13, 17, 23, 0.95);\n  border-right: 1px solid rgba(255, 255, 255, 0.05);\n  display: flex;\n  flex-direction: column;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  z-index: 100;\n}\n.admin-sidebar.collapsed[_ngcontent-%COMP%] {\n  width: 70px;\n}\n.admin-sidebar.collapsed[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%], \n.admin-sidebar.collapsed[_ngcontent-%COMP%]   .menu-text[_ngcontent-%COMP%], \n.admin-sidebar.collapsed[_ngcontent-%COMP%]   .btn-text[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.admin-sidebar.collapsed[_ngcontent-%COMP%]   .sidebar-brand[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.admin-sidebar.collapsed[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 0.75rem;\n}\n.admin-sidebar.collapsed[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n  margin-right: 0 !important;\n  font-size: 1.25rem;\n}\n.admin-sidebar.collapsed[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem;\n  align-items: center;\n}\n.admin-sidebar.collapsed[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.admin-sidebar.collapsed[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  justify-content: center;\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  padding: 0;\n}\n.admin-sidebar.collapsed[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.admin-sidebar.collapsed[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0 !important;\n}\n.sidebar-brand[_ngcontent-%COMP%] {\n  height: 70px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 1.5rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n}\n.sidebar-brand[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  letter-spacing: 0.5px;\n}\n.sidebar-brand[_ngcontent-%COMP%]   .text-accent[_ngcontent-%COMP%] {\n  color: #00f2fe;\n}\n.sidebar-brand[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: #94a3b8;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.sidebar-brand[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]:hover {\n  color: #00f2fe;\n  background: rgba(255, 255, 255, 0.02);\n}\n.sidebar-menu[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 1.5rem 0.75rem;\n  overflow-y: auto;\n}\n.sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.sidebar-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.8rem 1rem;\n  color: #94a3b8;\n  text-decoration: none;\n  border-radius: 8px;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  font-weight: 500;\n  font-size: 0.95rem;\n}\n.sidebar-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n  background: rgba(255, 255, 255, 0.02);\n}\n.sidebar-menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #00f2fe;\n  background: rgba(0, 242, 254, 0.05);\n  border-left: 3px solid #00f2fe;\n}\n.sidebar-menu[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  margin-right: 0.75rem;\n  font-size: 1.1rem;\n  text-align: center;\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n  padding: 1.5rem 1rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.05);\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.sidebar-footer[_ngcontent-%COMP%]   .btn-public[_ngcontent-%COMP%], \n.sidebar-footer[_ngcontent-%COMP%]   .btn-logout[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.75rem 1rem;\n  border-radius: 8px;\n  font-size: 0.9rem;\n  font-weight: 500;\n  cursor: pointer;\n  text-decoration: none;\n  transition: all 0.2s ease;\n  border: none;\n}\n.sidebar-footer[_ngcontent-%COMP%]   .btn-public[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.03);\n  color: #cbd5e1;\n}\n.sidebar-footer[_ngcontent-%COMP%]   .btn-public[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.75rem;\n}\n.sidebar-footer[_ngcontent-%COMP%]   .btn-public[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.08);\n  color: #ffffff;\n}\n.sidebar-footer[_ngcontent-%COMP%]   .btn-logout[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.05);\n  color: #f87171;\n  width: 100%;\n}\n.sidebar-footer[_ngcontent-%COMP%]   .btn-logout[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.75rem;\n}\n.sidebar-footer[_ngcontent-%COMP%]   .btn-logout[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.15);\n  color: #ffffff;\n}\n.admin-main[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow-x: hidden;\n}\n.admin-topbar[_ngcontent-%COMP%] {\n  height: 70px;\n  background: rgba(13, 17, 23, 0.6);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 2rem;\n  position: sticky;\n  top: 0;\n  z-index: 90;\n}\n.user-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: rgba(255, 255, 255, 0.03);\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  border: 1px solid rgba(255, 255, 255, 0.05);\n}\n.user-badge[_ngcontent-%COMP%]   .status-indicator[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  background-color: #10b981;\n  border-radius: 50%;\n  box-shadow: 0 0 8px #10b981;\n}\n.user-badge[_ngcontent-%COMP%]   .user-role[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 500;\n}\n.admin-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 2rem;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=admin-layout.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLayoutComponent, { className: "AdminLayoutComponent", filePath: "src\\app\\layouts\\admin-layout\\admin-layout.component.ts", lineNumber: 12 });
})();
export {
  AdminLayoutComponent
};
//# sourceMappingURL=chunk-ZAMSTPPP.js.map
