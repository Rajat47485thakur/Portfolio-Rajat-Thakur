import {
  HttpClient,
  HttpParams,
  __spreadProps,
  __spreadValues,
  map,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-XQCDMNXV.js";

// src/app/services/project.service.ts
var ProjectService = class _ProjectService {
  constructor(http) {
    this.http = http;
    this.apiBase = "http://localhost:5000/api/projects";
  }
  getProjects(filters) {
    let params = new HttpParams();
    if (filters) {
      if (filters.category)
        params = params.set("category", filters.category);
      if (filters.featured !== void 0)
        params = params.set("featured", filters.featured.toString());
      if (filters.search)
        params = params.set("search", filters.search);
    }
    return this.http.get(this.apiBase, { params }).pipe(map((projects) => projects.map((p) => __spreadProps(__spreadValues({}, p), {
      id: p._id,
      name: p.title
    }))));
  }
  getProjectById(idOrSlug) {
    return this.http.get(`${this.apiBase}/${idOrSlug}`).pipe(map((p) => __spreadProps(__spreadValues({}, p), {
      id: p._id,
      name: p.title
    })));
  }
  static {
    this.\u0275fac = function ProjectService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProjectService, factory: _ProjectService.\u0275fac, providedIn: "root" });
  }
};

export {
  ProjectService
};
//# sourceMappingURL=chunk-EIOX7XC7.js.map
