import {
  AdminService
} from "./chunk-4CEA4EDS.js";
import "./chunk-OP5ZAXAP.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf,
  SlicePipe,
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
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-XQCDMNXV.js";

// src/app/modules/admin/contacts/contacts.component.ts
var _c0 = (a0, a1) => ({ "unread-card": a0, "active-card": a1 });
var _c1 = (a0, a1, a2) => ({ "bg-danger": a0, "bg-success": a1, "bg-info text-dark": a2 });
function ContactsComponent_div_7_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "i", 17);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Your inbox is empty.");
    \u0275\u0275elementEnd()();
  }
}
function ContactsComponent_div_7_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275listener("click", function ContactsComponent_div_7_div_6_div_1_Template_div_click_0_listener() {
      const msg_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectMessage(msg_r2));
    });
    \u0275\u0275elementStart(1, "div", 21)(2, "span", 22);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 23);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "h6", 24);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 25);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 26)(13, "span", 27);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const msg_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(14, _c0, msg_r2.status === "unread", (ctx_r2.selectedMessage == null ? null : ctx_r2.selectedMessage._id) === msg_r2._id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(msg_r2.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 7, msg_r2.createdAt, "shortDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(msg_r2.subject);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind3(11, 10, msg_r2.message, 0, 80), "...");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(17, _c1, msg_r2.status === "unread", msg_r2.status === "read", msg_r2.status === "replied"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", msg_r2.status, " ");
  }
}
function ContactsComponent_div_7_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275template(1, ContactsComponent_div_7_div_6_div_1_Template, 15, 21, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.messages);
  }
}
function ContactsComponent_div_7_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "i", 28);
    \u0275\u0275elementStart(2, "h5", 29);
    \u0275\u0275text(3, "Select an Article");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Click on any message in the inbox to view full metadata details and perform actions.");
    \u0275\u0275elementEnd()();
  }
}
function ContactsComponent_div_7_div_10_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function ContactsComponent_div_7_div_10_button_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.markAsRead(ctx_r2.selectedMessage._id));
    });
    \u0275\u0275element(1, "i", 49);
    \u0275\u0275text(2, " Mark Read ");
    \u0275\u0275elementEnd();
  }
}
function ContactsComponent_div_7_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31)(2, "div", 32)(3, "div")(4, "h4", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 34)(7, "span");
    \u0275\u0275text(8, "From: ");
    \u0275\u0275elementStart(9, "strong", 35);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "span", 36);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 37)(16, "span", 38);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 39)(19, "h6", 40);
    \u0275\u0275text(20, "Message Body");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p", 41);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 42)(24, "a", 43);
    \u0275\u0275listener("click", function ContactsComponent_div_7_div_10_Template_a_click_24_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.markAsReplied(ctx_r2.selectedMessage._id));
    });
    \u0275\u0275element(25, "i", 44);
    \u0275\u0275text(26, " Compose Reply ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, ContactsComponent_div_7_div_10_button_27_Template, 3, 0, "button", 45);
    \u0275\u0275elementStart(28, "button", 46);
    \u0275\u0275listener("click", function ContactsComponent_div_7_div_10_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteMessage(ctx_r2.selectedMessage._id));
    });
    \u0275\u0275element(29, "i", 47);
    \u0275\u0275text(30, " Delete Inscription ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedMessage.subject);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedMessage.fullName);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" <", ctx_r2.selectedMessage.email, ">");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 8, ctx_r2.selectedMessage.createdAt, "medium"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Phone: ", ctx_r2.selectedMessage.phone || "Not Provided", "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedMessage.message);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", "mailto:" + ctx_r2.selectedMessage.email + "?subject=Re: " + ctx_r2.selectedMessage.subject, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.selectedMessage.status === "unread");
  }
}
function ContactsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "h5", 10);
    \u0275\u0275text(4, "Inbox Catalog");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ContactsComponent_div_7_div_5_Template, 4, 0, "div", 11)(6, ContactsComponent_div_7_div_6_Template, 2, 1, "div", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 13)(8, "div", 14);
    \u0275\u0275template(9, ContactsComponent_div_7_div_9_Template, 6, 0, "div", 11)(10, ContactsComponent_div_7_div_10_Template, 31, 11, "div", 15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.messages.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.messages.length > 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r2.selectedMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedMessage);
  }
}
function ContactsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275element(1, "div", 51);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading inbox archives...");
    \u0275\u0275elementEnd()();
  }
}
var ContactsComponent = class _ContactsComponent {
  constructor(adminService) {
    this.adminService = adminService;
    this.messages = [];
    this.selectedMessage = null;
    this.isLoading = true;
  }
  ngOnInit() {
    this.loadMessages();
  }
  loadMessages() {
    this.isLoading = true;
    this.adminService.getMessages().subscribe({
      next: (data) => {
        this.messages = data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        this.isLoading = false;
        if (this.selectedMessage) {
          const fresh = this.messages.find((m) => m._id === this.selectedMessage._id);
          if (fresh)
            this.selectedMessage = fresh;
        }
      },
      error: (err) => {
        console.error("Failed to load messages inbox", err);
        this.isLoading = false;
      }
    });
  }
  selectMessage(msg) {
    this.selectedMessage = msg;
    if (msg.status === "unread") {
      this.markAsRead(msg._id);
    }
  }
  markAsRead(id) {
    this.adminService.updateMessageStatus(id, "read").subscribe({
      next: () => this.loadMessages()
    });
  }
  markAsReplied(id) {
    this.adminService.updateMessageStatus(id, "replied").subscribe({
      next: () => this.loadMessages()
    });
  }
  deleteMessage(id) {
    if (confirm("Are you sure you want to delete this message log?")) {
      this.adminService.deleteMessage(id).subscribe({
        next: () => {
          if (this.selectedMessage?._id === id) {
            this.selectedMessage = null;
          }
          this.loadMessages();
        }
      });
    }
  }
  static {
    this.\u0275fac = function ContactsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ContactsComponent)(\u0275\u0275directiveInject(AdminService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactsComponent, selectors: [["app-contacts"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 2, consts: [[1, "contacts-cms-wrapper"], [1, "mb-5"], [1, "text-white", "font-outfit", "fw-bold", "m-0"], [1, "fas", "fa-inbox", "text-accent", "me-2"], [1, "text-muted", "small", "m-0"], ["class", "row g-4", 4, "ngIf"], ["class", "text-center py-5 text-muted", 4, "ngIf"], [1, "row", "g-4"], [1, "col-lg-5"], [1, "glass-card", "p-3", "h-100", "min-h-600", "overflow-hidden", "d-flex", "flex-column"], [1, "text-white", "font-outfit", "fw-bold", "mb-3", "px-2"], ["class", "text-center py-5 text-muted flex-grow-1 d-flex flex-column align-items-center justify-content-center", 4, "ngIf"], ["class", "inbox-list flex-grow-1", 4, "ngIf"], [1, "col-lg-7"], [1, "glass-card", "p-4", "h-100", "min-h-600", "d-flex", "flex-column"], ["class", "flex-grow-1 d-flex flex-column", 4, "ngIf"], [1, "text-center", "py-5", "text-muted", "flex-grow-1", "d-flex", "flex-column", "align-items-center", "justify-content-center"], [1, "far", "fa-folder-open", "display-4", "mb-3"], [1, "inbox-list", "flex-grow-1"], ["class", "inbox-card p-3 mb-2 rounded", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "inbox-card", "p-3", "mb-2", "rounded", 3, "click", "ngClass"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-1"], [1, "sender-name", "text-white", "font-outfit", "fw-semibold"], [1, "sender-time", "text-muted", "small"], [1, "subject-text", "font-outfit", "text-white", "mb-2"], [1, "excerpt-text", "text-muted", "mb-0", "small"], [1, "status-indicators", "mt-2"], [1, "badge", 3, "ngClass"], [1, "fas", "fa-envelope-open", "display-3", "text-muted", "mb-3"], [1, "text-white", "font-outfit", "fw-bold"], [1, "flex-grow-1", "d-flex", "flex-column"], [1, "reader-header", "pb-3", "mb-4", "border-bottom", "border-secondary"], [1, "d-flex", "justify-content-between", "align-items-start", "mb-3"], [1, "text-white", "font-outfit", "fw-bold", "mb-1"], [1, "sender-details", "text-muted", "small"], [1, "text-white"], [1, "badge", "bg-dark", "border", "border-secondary", "text-accent"], [1, "d-flex", "gap-2"], [1, "badge", "bg-secondary"], [1, "reader-body", "flex-grow-1", "p-3", "rounded", "mb-4"], [1, "text-white", "font-outfit", "small", "uppercase", "tracking-wide", "mb-2", "opacity-50"], [1, "text-white", "leading-relaxed", "whitespace-pre-line"], [1, "reader-actions", "pt-3", "border-top", "border-secondary", "d-flex", "gap-2", "justify-content-end"], [1, "btn", "btn-sm", "btn-accent-custom", "text-decoration-none", "px-3", "py-2", 3, "click", "href"], [1, "fas", "fa-reply", "me-1"], ["class", "btn btn-sm btn-dark-custom px-3 py-2", 3, "click", 4, "ngIf"], [1, "btn", "btn-sm", "btn-danger-custom", "px-3", "py-2", 3, "click"], [1, "fas", "fa-trash-alt", "me-1"], [1, "btn", "btn-sm", "btn-dark-custom", "px-3", "py-2", 3, "click"], [1, "fas", "fa-check", "me-1"], [1, "text-center", "py-5", "text-muted"], ["role", "status", 1, "spinner-border", "text-info", "mb-3"]], template: function ContactsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4", 2);
        \u0275\u0275element(3, "i", 3);
        \u0275\u0275text(4, " Client Communications Inbox");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 4);
        \u0275\u0275text(6, "Review operational logs and incoming inquiries from the contact forms.");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, ContactsComponent_div_7_Template, 11, 4, "div", 5)(8, ContactsComponent_div_8_Template, 4, 0, "div", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", !ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoading);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, SlicePipe, DatePipe], styles: ["\n\n.contacts-cms-wrapper[_ngcontent-%COMP%] {\n  padding-bottom: 2rem;\n}\n.min-h-600[_ngcontent-%COMP%] {\n  min-height: 600px;\n}\n.inbox-list[_ngcontent-%COMP%] {\n  max-height: 520px;\n  overflow-y: auto;\n}\n.inbox-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.01);\n  border: 1px solid rgba(255, 255, 255, 0.03);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.inbox-card[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.03);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.inbox-card.unread-card[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.02);\n  border-color: rgba(239, 68, 68, 0.1);\n  border-left: 3px solid #ef4444;\n}\n.inbox-card.active-card[_ngcontent-%COMP%] {\n  background: rgba(0, 242, 254, 0.05);\n  border-color: #00f2fe;\n  border-left: 3px solid #00f2fe;\n}\n.excerpt-text[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  line-height: 1.4;\n}\n.reader-body[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.4);\n  border: 1px solid rgba(255, 255, 255, 0.03);\n  min-height: 300px;\n}\n.whitespace-pre-line[_ngcontent-%COMP%] {\n  white-space: pre-line;\n}\n/*# sourceMappingURL=contacts.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactsComponent, { className: "ContactsComponent", filePath: "src\\app\\modules\\admin\\contacts\\contacts.component.ts", lineNumber: 12 });
})();
export {
  ContactsComponent
};
//# sourceMappingURL=chunk-VAM5S4EG.js.map
