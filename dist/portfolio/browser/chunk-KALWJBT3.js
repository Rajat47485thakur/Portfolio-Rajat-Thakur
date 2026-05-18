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
  Router,
  RouterLink,
  RouterModule
} from "./chunk-IE2EAVOT.js";
import "./chunk-Q4EEFISQ.js";
import {
  CommonModule,
  NgClass,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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

// src/app/modules/auth/login/login.component.ts
var _c0 = (a0) => ({ "is-invalid": a0 });
function LoginComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "i", 28);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function LoginComponent_span_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Authorize Session");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_span_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275element(1, "span", 30);
    \u0275\u0275text(2, " Verifying Identity... ");
    \u0275\u0275elementEnd();
  }
}
var LoginComponent = class _LoginComponent {
  constructor(fb, adminService, router) {
    this.fb = fb;
    this.adminService = adminService;
    this.router = router;
    this.isLoading = false;
    this.errorMessage = "";
    this.showPassword = false;
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  ngOnInit() {
    if (localStorage.getItem("accessToken")) {
      this.router.navigate(["/admin/dashboard"]);
    }
    this.loginForm = this.fb.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.isLoading = true;
    this.errorMessage = "";
    this.adminService.login(this.loginForm.value).subscribe({
      next: () => {
        this.router.navigate(["/admin/dashboard"]);
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err.error?.message || "Invalid username or password. Please try again.";
      }
    });
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AdminService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 36, vars: 13, consts: [[1, "login-wrapper"], [1, "glow-bg"], [1, "glow-circle", "blue"], [1, "glow-circle", "cyan"], [1, "login-container"], ["routerLink", "/", 1, "back-link", "mb-4", "d-inline-flex", "align-items-center"], [1, "fas", "fa-arrow-left", "me-2"], [1, "login-card"], [1, "card-header-logo", "text-center", "mb-4"], [1, "font-outfit", "fw-bold", "text-white", "mb-1"], [1, "text-accent"], [1, "text-muted", "small"], ["class", "alert alert-danger-custom d-flex align-items-center mb-4", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "form-group", "mb-4"], [1, "form-label", "font-outfit", "text-white"], [1, "input-icon-group"], [1, "fas", "fa-user", "input-icon"], ["type", "text", "placeholder", "Enter admin username", "formControlName", "username", 1, "form-control", "text-input", 3, "ngClass"], [1, "form-group", "mb-5"], [1, "fas", "fa-lock", "input-icon"], ["placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "formControlName", "password", 1, "form-control", "text-input", 3, "type", "ngClass"], ["type", "button", "aria-label", "Toggle Password Visibility", 1, "password-toggle-btn", 3, "click"], [1, "fas", 3, "ngClass"], ["type", "submit", 1, "btn-submit", "font-outfit", 3, "disabled"], [4, "ngIf"], ["class", "d-flex align-items-center justify-content-center", 4, "ngIf"], [1, "alert", "alert-danger-custom", "d-flex", "align-items-center", "mb-4"], [1, "fas", "fa-exclamation-triangle", "me-2"], [1, "d-flex", "align-items-center", "justify-content-center"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-2"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "div", 2)(3, "div", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 4)(5, "a", 5);
        \u0275\u0275element(6, "i", 6);
        \u0275\u0275elementStart(7, "span");
        \u0275\u0275text(8, "Back to Site");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "h2", 9);
        \u0275\u0275text(12, "Rajat");
        \u0275\u0275elementStart(13, "span", 10);
        \u0275\u0275text(14, ".CMS");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "p", 11);
        \u0275\u0275text(16, "Portfolio Administration Terminal");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(17, LoginComponent_div_17_Template, 4, 1, "div", 12);
        \u0275\u0275elementStart(18, "form", 13);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_18_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(19, "div", 14)(20, "label", 15);
        \u0275\u0275text(21, "Administrator Username");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 16);
        \u0275\u0275element(23, "i", 17)(24, "input", 18);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 19)(26, "label", 15);
        \u0275\u0275text(27, "Security Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 16);
        \u0275\u0275element(29, "i", 20)(30, "input", 21);
        \u0275\u0275elementStart(31, "button", 22);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_31_listener() {
          return ctx.togglePasswordVisibility();
        });
        \u0275\u0275element(32, "i", 23);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(33, "button", 24);
        \u0275\u0275template(34, LoginComponent_span_34_Template, 2, 0, "span", 25)(35, LoginComponent_span_35_Template, 3, 0, "span", 26);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_4_0;
        \u0275\u0275advance(17);
        \u0275\u0275property("ngIf", ctx.errorMessage);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.loginForm);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c0, ((tmp_2_0 = ctx.loginForm.get("username")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx.loginForm.get("username")) == null ? null : tmp_2_0.invalid)));
        \u0275\u0275advance(6);
        \u0275\u0275property("type", ctx.showPassword ? "text" : "password")("ngClass", \u0275\u0275pureFunction1(11, _c0, ((tmp_4_0 = ctx.loginForm.get("password")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx.loginForm.get("password")) == null ? null : tmp_4_0.invalid)));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", ctx.showPassword ? "fa-eye-slash" : "fa-eye");
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loginForm.invalid || ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoading);
      }
    }, dependencies: [CommonModule, NgClass, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink], styles: ['\n\n.login-wrapper[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background-color: #080b11;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n  font-family: "Inter", sans-serif;\n}\n.glow-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1;\n}\n.glow-bg[_ngcontent-%COMP%]   .glow-circle[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(150px);\n  opacity: 0.15;\n}\n.glow-bg[_ngcontent-%COMP%]   .glow-circle.blue[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 400px;\n  background: #0072ff;\n  top: -100px;\n  right: -100px;\n}\n.glow-bg[_ngcontent-%COMP%]   .glow-circle.cyan[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 500px;\n  background: #00f2fe;\n  bottom: -150px;\n  left: -150px;\n}\n.login-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  padding: 2rem;\n  position: relative;\n  z-index: 5;\n}\n.back-link[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  text-decoration: none;\n  font-size: 0.9rem;\n  font-weight: 500;\n  transition: color 0.2s ease;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  color: #00f2fe;\n}\n.login-card[_ngcontent-%COMP%] {\n  background: rgba(13, 17, 23, 0.7);\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  border-radius: 20px;\n  padding: 2.5rem;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);\n}\n.login-card[_ngcontent-%COMP%]   .text-accent[_ngcontent-%COMP%] {\n  color: #00f2fe;\n}\n.alert-danger-custom[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  border: 1px solid rgba(239, 68, 68, 0.2);\n  color: #f87171;\n  padding: 0.75rem 1rem;\n  border-radius: 8px;\n  font-size: 0.85rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 500;\n  margin-bottom: 0.5rem;\n  display: block;\n}\n.input-icon-group[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.input-icon-group[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1.25rem;\n  color: #475569;\n  font-size: 1rem;\n  z-index: 10;\n  pointer-events: none;\n}\n.input-icon-group[_ngcontent-%COMP%]   .text-input[_ngcontent-%COMP%] {\n  width: 100%;\n  background: rgba(15, 23, 42, 0.6) !important;\n  border: 1px solid rgba(255, 255, 255, 0.05) !important;\n  border-radius: 10px !important;\n  padding: 0.75rem 3.5rem 0.75rem 3rem !important;\n  color: #ffffff !important;\n  font-size: 0.95rem !important;\n  transition: all 0.3s ease;\n}\n.input-icon-group[_ngcontent-%COMP%]   .text-input[_ngcontent-%COMP%]:focus {\n  background: rgba(15, 23, 42, 0.85) !important;\n  border-color: #00f2fe !important;\n  box-shadow: 0 0 10px rgba(0, 242, 254, 0.15) !important;\n}\n.input-icon-group[_ngcontent-%COMP%]   .text-input.is-invalid[_ngcontent-%COMP%] {\n  border-color: #ef4444 !important;\n  box-shadow: 0 0 10px rgba(239, 68, 68, 0.15) !important;\n}\n.input-icon-group[_ngcontent-%COMP%]   .password-toggle-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 1.25rem;\n  background: none;\n  border: none;\n  color: #475569;\n  cursor: pointer;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  transition: color 0.2s ease;\n  z-index: 10;\n}\n.input-icon-group[_ngcontent-%COMP%]   .password-toggle-btn[_ngcontent-%COMP%]:hover {\n  color: #00f2fe;\n}\n.btn-submit[_ngcontent-%COMP%] {\n  width: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      #0072ff,\n      #00f2fe);\n  border: none;\n  color: #ffffff;\n  padding: 0.85rem;\n  border-radius: 10px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 15px rgba(0, 242, 254, 0.2);\n}\n.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 242, 254, 0.3);\n}\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n/*# sourceMappingURL=login.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\modules\\auth\\login\\login.component.ts", lineNumber: 14 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-KALWJBT3.js.map
