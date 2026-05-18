import {
  API_BASE_URL
} from "./chunk-OP5ZAXAP.js";
import {
  HttpClient,
  HttpParams,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-XQCDMNXV.js";

// src/app/core/services/blog.service.ts
var BlogService = class _BlogService {
  constructor(http) {
    this.http = http;
    this.apiBase = `${API_BASE_URL}/blogs`;
  }
  getBlogs(filters) {
    let params = new HttpParams();
    if (filters) {
      if (filters.status)
        params = params.set("status", filters.status);
      if (filters.tag)
        params = params.set("tag", filters.tag);
      if (filters.search)
        params = params.set("search", filters.search);
    }
    return this.http.get(this.apiBase, { params });
  }
  getBlogBySlug(slug) {
    return this.http.get(`${this.apiBase}/${slug}`);
  }
  static {
    this.\u0275fac = function BlogService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BlogService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BlogService, factory: _BlogService.\u0275fac, providedIn: "root" });
  }
};

export {
  BlogService
};
//# sourceMappingURL=chunk-FXOGO3PJ.js.map
