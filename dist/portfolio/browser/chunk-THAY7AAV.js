import {
  AdminService
} from "./chunk-4CEA4EDS.js";
import "./chunk-OP5ZAXAP.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-IE2EAVOT.js";
import "./chunk-Q4EEFISQ.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf,
  SlicePipe,
  forkJoin,
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
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-XQCDMNXV.js";

// src/app/modules/admin/dashboard/dashboard.component.ts
var _c0 = (a0) => ({ "unread-row": a0 });
function DashboardComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7);
    \u0275\u0275element(4, "i", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9)(6, "h3", 10);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 11);
    \u0275\u0275text(9, "Unread Messages");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "div", 5)(11, "div", 12)(12, "div", 13);
    \u0275\u0275element(13, "i", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 9)(15, "h3", 10);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 11);
    \u0275\u0275text(18, "Total Inquiries");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(19, "div", 5)(20, "div", 15)(21, "div", 16);
    \u0275\u0275element(22, "i", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 9)(24, "h3", 10);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 11);
    \u0275\u0275text(27, "Dynamic Projects");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(28, "div", 5)(29, "div", 18)(30, "div", 19);
    \u0275\u0275element(31, "i", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 9)(33, "h3", 10);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 11);
    \u0275\u0275text(36, "Skills Logged");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.stats.unreadMessages);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.stats.messagesCount);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.stats.projectsCount);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.stats.skillsCount);
  }
}
function DashboardComponent_div_2_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275element(1, "i", 44);
    \u0275\u0275elementStart(2, "p", 45);
    \u0275\u0275text(3, "Your contact form has received no messages yet.");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_div_2_div_11_div_1_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 62);
    \u0275\u0275listener("click", function DashboardComponent_div_2_div_11_div_1_button_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const msg_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.markAsRead(msg_r4._id));
    });
    \u0275\u0275element(1, "i", 63);
    \u0275\u0275text(2, " Mark Read ");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_div_2_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 49)(2, "div", 50)(3, "span", 51);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 52);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 53);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "h6", 54);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 55);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 56);
    \u0275\u0275template(16, DashboardComponent_div_2_div_11_div_1_button_16_Template, 3, 0, "button", 57);
    \u0275\u0275elementStart(17, "a", 58);
    \u0275\u0275element(18, "i", 59);
    \u0275\u0275text(19, " Reply Email ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 60);
    \u0275\u0275listener("click", function DashboardComponent_div_2_div_11_div_1_Template_button_click_20_listener() {
      const msg_r4 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.deleteMessage(msg_r4._id));
    });
    \u0275\u0275element(21, "i", 61);
    \u0275\u0275text(22, " Delete ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const msg_r4 = ctx.$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(15, _c0, msg_r4.status === "unread"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(msg_r4.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("<", msg_r4.email, ">");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 8, msg_r4.createdAt, "shortTime"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(msg_r4.subject);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind3(14, 11, msg_r4.message, 0, 150), "...");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", msg_r4.status === "unread");
    \u0275\u0275advance();
    \u0275\u0275property("href", "mailto:" + msg_r4.email + "?subject=Re: " + msg_r4.subject, \u0275\u0275sanitizeUrl);
  }
}
function DashboardComponent_div_2_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275template(1, DashboardComponent_div_2_div_11_div_1_Template, 23, 17, "div", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.recentMessages);
  }
}
function DashboardComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "div", 23)(3, "div", 24)(4, "h5", 25);
    \u0275\u0275element(5, "i", 26);
    \u0275\u0275text(6, " Recent Inbox Activities");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 27);
    \u0275\u0275text(8, "Manage Inbox ");
    \u0275\u0275element(9, "i", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, DashboardComponent_div_2_div_10_Template, 4, 0, "div", 3)(11, DashboardComponent_div_2_div_11_Template, 2, 1, "div", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 30)(13, "div", 23)(14, "h5", 31);
    \u0275\u0275element(15, "i", 32);
    \u0275\u0275text(16, " Quick Operations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 33)(18, "a", 34);
    \u0275\u0275element(19, "i", 35);
    \u0275\u0275elementStart(20, "div", 36)(21, "span", 37);
    \u0275\u0275text(22, "Add Project Case Study");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 38);
    \u0275\u0275text(24, "Upload snapshots and metrics");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "a", 39);
    \u0275\u0275element(26, "i", 40);
    \u0275\u0275elementStart(27, "div", 36)(28, "span", 37);
    \u0275\u0275text(29, "Compose Tech Blog");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 38);
    \u0275\u0275text(31, "Draft a markdown engineering log");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "a", 41);
    \u0275\u0275element(33, "i", 42);
    \u0275\u0275elementStart(34, "div", 36)(35, "span", 37);
    \u0275\u0275text(36, "Branding Controls");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 38);
    \u0275\u0275text(38, "Swap settings and resume uploads");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r0.recentMessages.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.recentMessages.length > 0);
  }
}
function DashboardComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275element(1, "div", 64);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading analytics graphs and activities logs...");
    \u0275\u0275elementEnd()();
  }
}
var DashboardComponent = class _DashboardComponent {
  constructor(adminService) {
    this.adminService = adminService;
    this.stats = {
      messagesCount: 0,
      unreadMessages: 0,
      projectsCount: 3,
      // Initial seeded value
      skillsCount: 0
    };
    this.recentMessages = [];
    this.isLoading = true;
  }
  ngOnInit() {
    this.loadDashboardData();
  }
  loadDashboardData() {
    this.isLoading = true;
    forkJoin({
      messages: this.adminService.getMessages(),
      skills: this.adminService.getSkills()
    }).subscribe({
      next: (res) => {
        this.stats.messagesCount = res.messages.length;
        this.stats.unreadMessages = res.messages.filter((m) => m.status === "unread").length;
        this.recentMessages = res.messages.slice(0, 5);
        this.stats.skillsCount = res.skills.length;
        this.isLoading = false;
      },
      error: (err) => {
        console.error("Failed to load dashboard data", err);
        this.isLoading = false;
      }
    });
  }
  markAsRead(id) {
    this.adminService.updateMessageStatus(id, "read").subscribe({
      next: () => this.loadDashboardData()
    });
  }
  deleteMessage(id) {
    if (confirm("Are you sure you want to delete this message log?")) {
      this.adminService.deleteMessage(id).subscribe({
        next: () => this.loadDashboardData()
      });
    }
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashboardComponent)(\u0275\u0275directiveInject(AdminService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 3, consts: [[1, "dashboard-wrapper"], ["class", "row g-4 mb-5", 4, "ngIf"], ["class", "row g-4", 4, "ngIf"], ["class", "text-center py-5 text-muted", 4, "ngIf"], [1, "row", "g-4", "mb-5"], [1, "col-md-3"], [1, "stat-card", "glass-card", "glowing-card", "border-unread"], [1, "stat-icon-wrapper", "unread-bg"], [1, "fas", "fa-envelope-open-text", "text-unread"], [1, "stat-data"], [1, "stat-number"], [1, "stat-label"], [1, "stat-card", "glass-card", "border-blue"], [1, "stat-icon-wrapper", "blue-bg"], [1, "fas", "fa-inbox", "text-blue"], [1, "stat-card", "glass-card", "border-accent"], [1, "stat-icon-wrapper", "accent-bg"], [1, "fas", "fa-project-diagram", "text-accent"], [1, "stat-card", "glass-card", "border-emerald"], [1, "stat-icon-wrapper", "emerald-bg"], [1, "fas", "fa-graduation-cap", "text-emerald"], [1, "row", "g-4"], [1, "col-lg-8"], [1, "glass-card", "p-4"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "text-white", "font-outfit", "fw-bold", "m-0"], [1, "fas", "fa-paper-plane", "me-2", "text-accent"], ["routerLink", "/admin/contacts", 1, "view-all-link", "font-outfit"], [1, "fas", "fa-chevron-right", "ms-1"], ["class", "message-list-scroller", 4, "ngIf"], [1, "col-lg-4"], [1, "text-white", "font-outfit", "fw-bold", "mb-4"], [1, "fas", "fa-bolt", "me-2", "text-accent"], [1, "d-flex", "flex-column", "gap-3"], ["routerLink", "/admin/projects", 1, "shortcut-btn", "border-blue"], [1, "fas", "fa-folder-plus", "text-blue", "me-3"], [1, "shortcut-details"], [1, "shortcut-title", "text-white"], [1, "shortcut-desc", "text-muted"], ["routerLink", "/admin/blogs", 1, "shortcut-btn", "border-accent"], [1, "fas", "fa-pen-nib", "text-accent", "me-3"], ["routerLink", "/admin/settings", 1, "shortcut-btn", "border-emerald"], [1, "fas", "fa-sliders-h", "text-emerald", "me-3"], [1, "text-center", "py-5", "text-muted"], [1, "fas", "fa-envelope-square", "display-4", "mb-3"], [1, "m-0"], [1, "message-list-scroller"], ["class", "message-row p-3 mb-3", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "message-row", "p-3", "mb-3", 3, "ngClass"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "sender-info"], [1, "sender-name", "text-white", "font-outfit", "fw-semibold"], [1, "sender-email", "text-muted", "small", "ms-2"], [1, "msg-date", "text-muted", "small"], [1, "msg-subject", "font-outfit", "text-white", "mb-2"], [1, "msg-content", "text-muted", "small", "mb-3"], [1, "msg-actions", "d-flex", "gap-2"], ["class", "btn btn-sm btn-dark-custom", 3, "click", 4, "ngIf"], [1, "btn", "btn-sm", "btn-accent-custom", "text-decoration-none", 3, "href"], [1, "fas", "fa-reply", "me-1"], [1, "btn", "btn-sm", "btn-danger-custom", 3, "click"], [1, "fas", "fa-trash-alt", "me-1"], [1, "btn", "btn-sm", "btn-dark-custom", 3, "click"], [1, "fas", "fa-check", "me-1"], ["role", "status", 1, "spinner-border", "text-info", "mb-3"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, DashboardComponent_div_1_Template, 37, 4, "div", 1)(2, DashboardComponent_div_2_Template, 39, 2, "div", 2)(3, DashboardComponent_div_3_Template, 4, 0, "div", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoading);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, SlicePipe, DatePipe, RouterModule, RouterLink], styles: ["\n\n.dashboard-wrapper[_ngcontent-%COMP%] {\n  padding-bottom: 2rem;\n}\n.glass-card[_ngcontent-%COMP%] {\n  background: rgba(13, 17, 23, 0.6);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  border-radius: 16px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 1.5rem;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n}\n.stat-card[_ngcontent-%COMP%]   .stat-icon-wrapper[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 1.25rem;\n  font-size: 1.25rem;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-data[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-data[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #ffffff;\n  margin: 0;\n  line-height: 1.2;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-data[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 0.85rem;\n  font-weight: 500;\n}\n.stat-card.border-unread[_ngcontent-%COMP%] {\n  border-left: 4px solid #f43f5e;\n}\n.stat-card.border-unread.glowing-card[_ngcontent-%COMP%] {\n  box-shadow: 0 0 15px rgba(244, 63, 94, 0.1);\n}\n.stat-card.border-blue[_ngcontent-%COMP%] {\n  border-left: 4px solid #3b82f6;\n}\n.stat-card.border-accent[_ngcontent-%COMP%] {\n  border-left: 4px solid #00f2fe;\n}\n.stat-card.border-emerald[_ngcontent-%COMP%] {\n  border-left: 4px solid #10b981;\n}\n.stat-card[_ngcontent-%COMP%]   .unread-bg[_ngcontent-%COMP%] {\n  background: rgba(244, 63, 94, 0.1);\n}\n.stat-card[_ngcontent-%COMP%]   .text-unread[_ngcontent-%COMP%] {\n  color: #f43f5e;\n}\n.stat-card[_ngcontent-%COMP%]   .blue-bg[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.1);\n}\n.stat-card[_ngcontent-%COMP%]   .text-blue[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.stat-card[_ngcontent-%COMP%]   .accent-bg[_ngcontent-%COMP%] {\n  background: rgba(0, 242, 254, 0.1);\n}\n.stat-card[_ngcontent-%COMP%]   .text-accent[_ngcontent-%COMP%] {\n  color: #00f2fe;\n}\n.stat-card[_ngcontent-%COMP%]   .emerald-bg[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n}\n.stat-card[_ngcontent-%COMP%]   .text-emerald[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.view-all-link[_ngcontent-%COMP%] {\n  color: #00f2fe;\n  text-decoration: none;\n  font-size: 0.9rem;\n  font-weight: 500;\n  transition: all 0.2s ease;\n}\n.view-all-link[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n}\n.message-list-scroller[_ngcontent-%COMP%] {\n  max-height: 520px;\n  overflow-y: auto;\n}\n.message-row[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.02);\n  border: 1px solid rgba(255, 255, 255, 0.03);\n  border-radius: 12px;\n  transition: all 0.2s ease;\n}\n.message-row.unread-row[_ngcontent-%COMP%] {\n  background: rgba(244, 63, 94, 0.02);\n  border-color: rgba(244, 63, 94, 0.15);\n}\n.message-row[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.04);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.btn-dark-custom[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: #cbd5e1;\n  font-size: 0.8rem;\n  font-weight: 500;\n  padding: 0.35rem 0.75rem;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.btn-dark-custom[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: #ffffff;\n}\n.btn-accent-custom[_ngcontent-%COMP%] {\n  background: rgba(0, 242, 254, 0.1);\n  border: 1px solid rgba(0, 242, 254, 0.2);\n  color: #00f2fe;\n  font-size: 0.8rem;\n  font-weight: 500;\n  padding: 0.35rem 0.75rem;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.btn-accent-custom[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 242, 254, 0.2);\n  color: #ffffff;\n  box-shadow: 0 0 8px rgba(0, 242, 254, 0.2);\n}\n.btn-danger-custom[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.05);\n  border: 1px solid rgba(239, 68, 68, 0.15);\n  color: #f87171;\n  font-size: 0.8rem;\n  font-weight: 500;\n  padding: 0.35rem 0.75rem;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.btn-danger-custom[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.15);\n  color: #ffffff;\n}\n.shortcut-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 1.25rem;\n  text-decoration: none;\n  background: rgba(255, 255, 255, 0.02);\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.03);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.shortcut-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.shortcut-btn.border-blue[_ngcontent-%COMP%]:hover {\n  border-color: #3b82f6;\n  background: rgba(59, 130, 246, 0.03);\n}\n.shortcut-btn.border-accent[_ngcontent-%COMP%]:hover {\n  border-color: #00f2fe;\n  background: rgba(0, 242, 254, 0.03);\n}\n.shortcut-btn.border-emerald[_ngcontent-%COMP%]:hover {\n  border-color: #10b981;\n  background: rgba(16, 185, 129, 0.03);\n}\n.shortcut-btn[_ngcontent-%COMP%]:hover {\n  transform: translateX(4px);\n}\n.shortcut-btn[_ngcontent-%COMP%]   .shortcut-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.shortcut-btn[_ngcontent-%COMP%]   .shortcut-details[_ngcontent-%COMP%]   .shortcut-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.95rem;\n}\n.shortcut-btn[_ngcontent-%COMP%]   .shortcut-details[_ngcontent-%COMP%]   .shortcut-desc[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src\\app\\modules\\admin\\dashboard\\dashboard.component.ts", lineNumber: 14 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-THAY7AAV.js.map
