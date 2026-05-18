import {
  API_BASE_URL
} from "./chunk-OP5ZAXAP.js";
import {
  HttpClient,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-XQCDMNXV.js";

// src/app/core/services/admin.service.ts
var AdminService = class _AdminService {
  constructor(http) {
    this.http = http;
    this.apiBase = API_BASE_URL;
  }
  // ==========================================
  // AUTH OPERATORS
  // ==========================================
  login(credentials) {
    return this.http.post(`${this.apiBase}/auth/login`, credentials).pipe(tap((res) => {
      if (res.accessToken && res.refreshToken) {
        localStorage.setItem("accessToken", res.accessToken);
        localStorage.setItem("refreshToken", res.refreshToken);
      }
    }));
  }
  // ==========================================
  // EXPERIENCES CMS
  // ==========================================
  getExperiences() {
    return this.http.get(`${this.apiBase}/experiences`);
  }
  createExperience(data) {
    return this.http.post(`${this.apiBase}/experiences`, data);
  }
  updateExperience(id, data) {
    return this.http.put(`${this.apiBase}/experiences/${id}`, data);
  }
  deleteExperience(id) {
    return this.http.delete(`${this.apiBase}/experiences/${id}`);
  }
  // ==========================================
  // PROJECTS CMS (Multipart Forms)
  // ==========================================
  createProject(formData) {
    return this.http.post(`${this.apiBase}/projects`, formData);
  }
  updateProject(id, formData) {
    return this.http.put(`${this.apiBase}/projects/${id}`, formData);
  }
  deleteProject(id) {
    return this.http.delete(`${this.apiBase}/projects/${id}`);
  }
  // ==========================================
  // SKILLS CMS
  // ==========================================
  getSkills() {
    return this.http.get(`${this.apiBase}/skills`);
  }
  createSkill(data) {
    return this.http.post(`${this.apiBase}/skills`, data);
  }
  updateSkill(id, data) {
    return this.http.put(`${this.apiBase}/skills/${id}`, data);
  }
  deleteSkill(id) {
    return this.http.delete(`${this.apiBase}/skills/${id}`);
  }
  // ==========================================
  // BLOGS CMS (Multipart Forms)
  // ==========================================
  createBlog(formData) {
    return this.http.post(`${this.apiBase}/blogs`, formData);
  }
  updateBlog(id, formData) {
    return this.http.put(`${this.apiBase}/blogs/${id}`, formData);
  }
  deleteBlog(id) {
    return this.http.delete(`${this.apiBase}/blogs/${id}`);
  }
  // ==========================================
  // INBOX CMS
  // ==========================================
  getMessages() {
    return this.http.get(`${this.apiBase}/contacts`);
  }
  updateMessageStatus(id, status) {
    return this.http.put(`${this.apiBase}/contacts/${id}`, { status });
  }
  deleteMessage(id) {
    return this.http.delete(`${this.apiBase}/contacts/${id}`);
  }
  // ==========================================
  // BRANDING SETTINGS (Multipart Forms)
  // ==========================================
  getSettings() {
    return this.http.get(`${this.apiBase}/settings`);
  }
  updateSettings(formData) {
    return this.http.put(`${this.apiBase}/settings`, formData);
  }
  // ==========================================
  // SEO SETTINGS (Multipart Forms)
  // ==========================================
  getSEO() {
    return this.http.get(`${this.apiBase}/seo`);
  }
  updateSEO(formData) {
    return this.http.put(`${this.apiBase}/seo`, formData);
  }
  static {
    this.\u0275fac = function AdminService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminService, factory: _AdminService.\u0275fac, providedIn: "root" });
  }
};

export {
  AdminService
};
//# sourceMappingURL=chunk-4CEA4EDS.js.map
