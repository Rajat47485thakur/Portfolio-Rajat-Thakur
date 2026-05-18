import {
  Meta,
  Title
} from "./chunk-Q4EEFISQ.js";
import {
  DOCUMENT,
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-XQCDMNXV.js";

// src/app/services/seo.service.ts
var SeoService = class _SeoService {
  constructor(http, titleService, metaService, document) {
    this.http = http;
    this.titleService = titleService;
    this.metaService = metaService;
    this.document = document;
    this.apiBase = "http://localhost:5000/api/seo";
  }
  getGlobalSEO() {
    return this.http.get(this.apiBase);
  }
  generateTags(config) {
    this.titleService.setTitle(config.title);
    this.metaService.updateTag({ name: "description", content: config.description });
    const keywordsVal = config.keywords || "Rajat Thakur, Angular Developer, Software Engineer, Angular SSR, Node.js Developer, WebSockets, RxJS, Enterprise Dashboards, Web Development, Frontend Architect";
    this.metaService.updateTag({ name: "keywords", content: keywordsVal });
    this.metaService.updateTag({ property: "og:title", content: config.title });
    this.metaService.updateTag({ property: "og:description", content: config.description });
    this.metaService.updateTag({ property: "og:type", content: "website" });
    this.metaService.updateTag({ property: "og:url", content: `https://rajatthakur.dev/${config.slug || ""}` });
    this.metaService.updateTag({ property: "og:image", content: config.image || "https://rajatthakur.dev/assets/profile.png" });
    this.metaService.updateTag({ name: "twitter:card", content: "summary_large_image" });
    this.metaService.updateTag({ name: "twitter:title", content: config.title });
    this.metaService.updateTag({ name: "twitter:description", content: config.description });
    this.metaService.updateTag({ name: "twitter:image", content: config.image || "https://rajatthakur.dev/assets/profile.png" });
    this.setCanonicalURL(`https://rajatthakur.dev/${config.slug || ""}`);
  }
  setCanonicalURL(url) {
    let link = this.document.querySelector("link[rel='canonical']");
    if (!link) {
      link = this.document.createElement("link");
      link.setAttribute("rel", "canonical");
      this.document.head.appendChild(link);
    }
    link.setAttribute("href", url);
  }
  static {
    this.\u0275fac = function SeoService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SeoService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Title), \u0275\u0275inject(Meta), \u0275\u0275inject(DOCUMENT));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SeoService, factory: _SeoService.\u0275fac, providedIn: "root" });
  }
};

export {
  SeoService
};
//# sourceMappingURL=chunk-636KREUN.js.map
