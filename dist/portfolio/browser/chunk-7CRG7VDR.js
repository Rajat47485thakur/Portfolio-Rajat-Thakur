import {
  ScrollRevealDirective
} from "./chunk-IHPYP5LT.js";
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
import {
  RouterModule
} from "./chunk-IE2EAVOT.js";
import {
  CommonModule,
  HttpClient,
  NgClass,
  NgIf,
  __async,
  firstValueFrom,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-XQCDMNXV.js";

// src/app/services/contact.service.ts
var ContactService = class _ContactService {
  constructor(http) {
    this.http = http;
    this.apiBase = "http://localhost:5000/api";
    this.BUSINESS_PHONE = "917018683789";
  }
  sendInquiry(data) {
    return this.http.post(`${this.apiBase}/contacts`, data);
  }
  redirectToWhatsApp(data) {
    const text = `Hello! My name is ${data.fullName}. 
Subject: ${data.subject} 
Message: ${data.message}`;
    const encodedText = encodeURIComponent(text);
    const url = `https://wa.me/${this.BUSINESS_PHONE}?text=${encodedText}`;
    window.open(url, "_blank");
  }
  static {
    this.\u0275fac = function ContactService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ContactService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ContactService, factory: _ContactService.\u0275fac, providedIn: "root" });
  }
};

// src/app/components/contact/contact.component.ts
var _c0 = (a0) => ({ "is-invalid": a0 });
function ContactComponent_form_54_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1, "Name is required (min 3 chars).");
    \u0275\u0275elementEnd();
  }
}
function ContactComponent_form_54_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1, "Subject is required.");
    \u0275\u0275elementEnd();
  }
}
function ContactComponent_form_54_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1, "Please enter a valid email.");
    \u0275\u0275elementEnd();
  }
}
function ContactComponent_form_54_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1, "Please enter a valid phone number.");
    \u0275\u0275elementEnd();
  }
}
function ContactComponent_form_54_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1, "Message is required (min 10 chars).");
    \u0275\u0275elementEnd();
  }
}
function ContactComponent_form_54_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1, " At least one contact method (Email or Phone) is required. ");
    \u0275\u0275elementEnd();
  }
}
function ContactComponent_form_54_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Send Message ");
    \u0275\u0275element(2, "i", 50);
    \u0275\u0275elementEnd();
  }
}
function ContactComponent_form_54_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 51);
    \u0275\u0275text(2, " Processing...");
    \u0275\u0275elementEnd();
  }
}
function ContactComponent_form_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 34);
    \u0275\u0275listener("ngSubmit", function ContactComponent_form_54_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "div", 35)(2, "div", 36)(3, "label", 37);
    \u0275\u0275text(4, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 38);
    \u0275\u0275template(6, ContactComponent_form_54_div_6_Template, 2, 0, "div", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 36)(8, "label", 37);
    \u0275\u0275text(9, "Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 40);
    \u0275\u0275template(11, ContactComponent_form_54_div_11_Template, 2, 0, "div", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 36)(13, "label", 37);
    \u0275\u0275text(14, "Email Address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 41);
    \u0275\u0275template(16, ContactComponent_form_54_div_16_Template, 2, 0, "div", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 36)(18, "label", 37);
    \u0275\u0275text(19, "Phone Number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 42);
    \u0275\u0275template(21, ContactComponent_form_54_div_21_Template, 2, 0, "div", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 43)(23, "label", 37);
    \u0275\u0275text(24, "Message");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "textarea", 44);
    \u0275\u0275template(26, ContactComponent_form_54_div_26_Template, 2, 0, "div", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(27, ContactComponent_form_54_div_27_Template, 2, 0, "div", 45);
    \u0275\u0275elementStart(28, "button", 46);
    \u0275\u0275template(29, ContactComponent_form_54_span_29_Template, 3, 0, "span", 47)(30, ContactComponent_form_54_span_30_Template, 3, 0, "span", 47);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.contactForm);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(15, _c0, ctx_r1.isFieldInvalid("fullName")));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("fullName"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(17, _c0, ctx_r1.isFieldInvalid("subject")));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("subject"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(19, _c0, ctx_r1.isFieldInvalid("email")));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("email"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(21, _c0, ctx_r1.isFieldInvalid("phone")));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("phone"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(23, _c0, ctx_r1.isFieldInvalid("message")));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("message"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.contactForm.errors == null ? null : ctx_r1.contactForm.errors["noContactMethod"]) && (ctx_r1.contactForm.dirty || ctx_r1.contactForm.touched));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.contactForm.invalid || ctx_r1.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSubmitting);
  }
}
function ContactComponent_div_55_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 60);
    \u0275\u0275listener("click", function ContactComponent_div_55_button_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openWhatsApp());
    });
    \u0275\u0275element(1, "i", 61);
    \u0275\u0275text(2, " Instant WhatsApp ");
    \u0275\u0275elementEnd();
  }
}
function ContactComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53);
    \u0275\u0275element(2, "i", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 55);
    \u0275\u0275text(4, "Inquiry Sent Successfully!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 56);
    \u0275\u0275text(6, "Thank you for reaching out. I will get back to you within 24 hours.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 57)(8, "button", 58);
    \u0275\u0275listener("click", function ContactComponent_div_55_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitSuccess = false);
    });
    \u0275\u0275text(9, "Send Another");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ContactComponent_div_55_button_10_Template, 3, 0, "button", 59);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r1.showWhatsAppCTA);
  }
}
var ContactComponent = class _ContactComponent {
  constructor(fb, contactService) {
    this.fb = fb;
    this.contactService = contactService;
    this.isSubmitting = false;
    this.submitSuccess = false;
    this.showWhatsAppCTA = false;
    this.email = "rajatthakurdev24@gmail.com";
    this.phone = "+917018683789";
  }
  ngOnInit() {
    this.contactForm = this.fb.group({
      fullName: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.email]],
      phone: ["", [Validators.pattern(/^\+?[0-9\s-]{10,20}$/)]],
      subject: ["", [Validators.required]],
      message: ["", [Validators.required, Validators.minLength(10)]]
    }, { validators: this.atLeastOneContactMethod });
  }
  atLeastOneContactMethod(control) {
    const email = control.get("email")?.value;
    const phone = control.get("phone")?.value;
    return email || phone ? null : { noContactMethod: true };
  }
  onSubmit() {
    return __async(this, null, function* () {
      if (this.contactForm.invalid || this.isSubmitting)
        return;
      this.isSubmitting = true;
      try {
        const result = yield firstValueFrom(this.contactService.sendInquiry(this.contactForm.value));
        this.submitSuccess = true;
        if (result && result.method === "both") {
          this.showWhatsAppCTA = true;
        }
        this.contactForm.reset();
      } catch (error) {
        console.error("Submission failed", error);
      } finally {
        this.isSubmitting = false;
      }
    });
  }
  openWhatsApp() {
    this.contactService.redirectToWhatsApp(this.contactForm.value);
  }
  goToEmail() {
    const subject = encodeURIComponent("Project Inquiry");
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${this.email}&su=${subject}`;
    const newWindow = window.open(gmailUrl, "_blank");
    if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
      window.location.href = `mailto:${this.email}?subject=${subject}`;
    }
  }
  goToPhone() {
    window.open(`tel:${this.phone}`);
  }
  goToWhatsapp() {
    window.open(`https://wa.me/${this.phone.replace("+", "")}`, "_blank");
  }
  goToLinkedin() {
    window.open("https://www.linkedin.com/in/rajat-thakur-226b14223/", "_blank");
  }
  goToGithub() {
    window.open("https://github.com/Rajat47485thakur", "_blank");
  }
  isFieldInvalid(field) {
    const control = this.contactForm.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
  static {
    this.\u0275fac = function ContactComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ContactComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ContactService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactComponent, selectors: [["app-contact"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 59, vars: 2, consts: [[1, "contact-page", "min-vh-100", "py-5", "position-relative", "overflow-hidden"], [1, "glow-bg", 2, "top", "-10%", "right", "-5%"], [1, "glow-bg", "glow-purple", 2, "bottom", "0%", "left", "-10%"], [1, "container", "py-5"], ["appScrollReveal", "", 1, "row", "mb-5"], [1, "col-lg-8", "mx-auto", "text-center"], [1, "section-label"], [1, "display-3", "fw-bold", "font-outfit", "text-gradient", "mb-3"], [1, "fs-5", "text-muted"], [1, "row", "g-5"], ["appScrollReveal", "", 1, "col-lg-4"], [1, "h-100", "d-flex", "flex-column", "justify-content-center"], [1, "contact-info-item", 2, "cursor", "pointer", 3, "click"], [1, "contact-icon-box"], [1, "fas", "fa-envelope"], [1, "info-content"], [1, "text-muted", "small", "uppercase", "tracking-widest", "mb-1"], [1, "text-main", "mb-0", "font-outfit"], [1, "fas", "fa-phone-alt"], [1, "contact-info-item", 2, "cursor", "pointer", "border-color", "rgba(37, 211, 102, 0.2)", "background", "rgba(37, 211, 102, 0.02)", 3, "click"], [1, "contact-icon-box", 2, "color", "#25d366", "background", "rgba(37, 211, 102, 0.1)", "border-color", "rgba(37, 211, 102, 0.2)"], [1, "fab", "fa-whatsapp"], [1, "contact-info-item"], [1, "fas", "fa-map-marker-alt"], [1, "social-links", "d-flex", "gap-4", "mt-4", "px-3"], [1, "social-icon", 2, "cursor", "pointer", 3, "click"], [1, "fab", "fa-linkedin-in"], [1, "fab", "fa-github"], [1, "col-lg-8"], ["appScrollReveal", "", 1, "contact-form-card"], [3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "text-center py-5", "appScrollReveal", "", 4, "ngIf"], [1, "floating-cta"], ["aria-label", "WhatsApp", 1, "whatsapp-btn", 3, "click"], [3, "ngSubmit", "formGroup"], [1, "row"], [1, "col-md-6", "mb-4"], [1, "form-label"], ["type", "text", "formControlName", "fullName", "placeholder", "John Doe", 1, "form-control", 3, "ngClass"], ["class", "error-message", 4, "ngIf"], ["type", "text", "formControlName", "subject", "placeholder", "Project Inquiry", 1, "form-control", 3, "ngClass"], ["type", "email", "formControlName", "email", "placeholder", "john@example.com", 1, "form-control", 3, "ngClass"], ["type", "tel", "formControlName", "phone", "placeholder", "+91 00000 00000", 1, "form-control", 3, "ngClass"], [1, "col-12", "mb-4"], ["formControlName", "message", "rows", "5", "placeholder", "Tell me about your project...", 1, "form-control", 3, "ngClass"], ["class", "error-message mb-4 text-center", 4, "ngIf"], ["type", "submit", 1, "bt", "w-100", "py-3", 3, "disabled"], [4, "ngIf"], [1, "error-message"], [1, "error-message", "mb-4", "text-center"], [1, "fas", "fa-paper-plane", "ms-2"], [1, "fas", "fa-spinner", "fa-spin"], ["appScrollReveal", "", 1, "text-center", "py-5"], [1, "contact-icon-box", "mx-auto", "mb-4", 2, "width", "80px", "height", "80px", "font-size", "2rem", "background", "rgba(16, 185, 129, 0.1)", "border-color", "var(--accent-emerald)", "color", "var(--accent-emerald)"], [1, "fas", "fa-check"], [1, "fw-bold", "text-main", "mb-3"], [1, "text-muted", "mb-5"], [1, "d-flex", "flex-wrap", "gap-3", "justify-content-center"], [1, "bt", 3, "click"], ["class", "bt btn-outline", 3, "click", 4, "ngIf"], [1, "bt", "btn-outline", 3, "click"], [1, "fab", "fa-whatsapp", "me-2"]], template: function ContactComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "div", 1)(2, "div", 2);
        \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "span", 6);
        \u0275\u0275text(7, "Connect");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "h1", 7);
        \u0275\u0275text(9, "Let's Discuss Your Project");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p", 8);
        \u0275\u0275text(11, "Ready to transform your ideas into high-performance digital reality? Reach out and let's start a conversation.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "div", 12);
        \u0275\u0275listener("click", function ContactComponent_Template_div_click_15_listener() {
          return ctx.goToEmail();
        });
        \u0275\u0275elementStart(16, "div", 13);
        \u0275\u0275element(17, "i", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 15)(19, "p", 16);
        \u0275\u0275text(20, "Email Me");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "h5", 17);
        \u0275\u0275text(22, "rajatthakurdev24@gmail.com");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "div", 12);
        \u0275\u0275listener("click", function ContactComponent_Template_div_click_23_listener() {
          return ctx.goToPhone();
        });
        \u0275\u0275elementStart(24, "div", 13);
        \u0275\u0275element(25, "i", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 15)(27, "p", 16);
        \u0275\u0275text(28, "Call Me");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "h5", 17);
        \u0275\u0275text(30, "+91 70186 83789");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "div", 19);
        \u0275\u0275listener("click", function ContactComponent_Template_div_click_31_listener() {
          return ctx.goToWhatsapp();
        });
        \u0275\u0275elementStart(32, "div", 20);
        \u0275\u0275element(33, "i", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 15)(35, "p", 16);
        \u0275\u0275text(36, "WhatsApp");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "h5", 17);
        \u0275\u0275text(38, "Instant Chat");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(39, "div", 22)(40, "div", 13);
        \u0275\u0275element(41, "i", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "div", 15)(43, "p", 16);
        \u0275\u0275text(44, "Location");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "h5", 17);
        \u0275\u0275text(46, "New Delhi, India");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(47, "div", 24)(48, "a", 25);
        \u0275\u0275listener("click", function ContactComponent_Template_a_click_48_listener() {
          return ctx.goToLinkedin();
        });
        \u0275\u0275element(49, "i", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "a", 25);
        \u0275\u0275listener("click", function ContactComponent_Template_a_click_50_listener() {
          return ctx.goToGithub();
        });
        \u0275\u0275element(51, "i", 27);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(52, "div", 28)(53, "div", 29);
        \u0275\u0275template(54, ContactComponent_form_54_Template, 31, 25, "form", 30)(55, ContactComponent_div_55_Template, 11, 1, "div", 31);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(56, "div", 32)(57, "button", 33);
        \u0275\u0275listener("click", function ContactComponent_Template_button_click_57_listener() {
          return ctx.openWhatsApp();
        });
        \u0275\u0275element(58, "i", 21);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(54);
        \u0275\u0275property("ngIf", !ctx.submitSuccess);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.submitSuccess);
      }
    }, dependencies: [CommonModule, NgClass, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, ScrollRevealDirective, RouterModule], styles: ["\n\n.contact-page[_ngcontent-%COMP%] {\n  background: var(--bg-color);\n  color: var(--text-main);\n}\n.contact-info-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  padding: 1.5rem;\n  background: rgba(255, 255, 255, 0.02);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  border-radius: 20px;\n  margin-bottom: 1.5rem;\n  transition: var(--transition-smooth);\n}\n.contact-info-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.04);\n  border-color: var(--accent-primary);\n  transform: translateX(10px);\n}\n.contact-info-item[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  min-width: 0;\n}\n.contact-info-item[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 1.1rem;\n}\n@media (max-width: 400px) {\n  .contact-info-item[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n}\n.contact-icon-box[_ngcontent-%COMP%] {\n  width: 54px;\n  height: 54px;\n  flex-shrink: 0;\n  background: rgba(0, 242, 254, 0.05);\n  border: 1px solid rgba(0, 242, 254, 0.15);\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--accent-primary);\n  font-size: 1.5rem;\n}\n.contact-form-card[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.floating-cta[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 1.25rem;\n  right: 1.25rem;\n  z-index: 1000;\n  display: none;\n}\n@media (max-width: 768px) {\n  .floating-cta[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.whatsapp-btn[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background: #25d366;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  box-shadow: 0 10px 25px rgba(37, 211, 102, 0.4);\n  border: none;\n  transition: var(--transition-smooth);\n}\n@media (min-width: 768px) {\n  .whatsapp-btn[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n    font-size: 1.8rem;\n  }\n}\n.whatsapp-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1) rotate(10deg);\n}\n.form-control[_ngcontent-%COMP%]::placeholder {\n  color: rgba(255, 255, 255, 0.2);\n}\n.bt[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  resize: none;\n}\n/*# sourceMappingURL=contact.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactComponent, { className: "ContactComponent", filePath: "src\\app\\components\\contact\\contact.component.ts", lineNumber: 16 });
})();

export {
  ContactComponent
};
//# sourceMappingURL=chunk-7CRG7VDR.js.map
