import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactForm {
  fullName: string;
  email?: string;
  phone?: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private readonly apiBase = 'http://localhost:5000/api';
  private readonly BUSINESS_PHONE = '917018683789';

  constructor(private http: HttpClient) {}

  sendInquiry(data: ContactForm): Observable<any> {
    return this.http.post<any>(`${this.apiBase}/contacts`, data);
  }

  redirectToWhatsApp(data: ContactForm) {
    const text = `Hello! My name is ${data.fullName}. \nSubject: ${data.subject} \nMessage: ${data.message}`;
    const encodedText = encodeURIComponent(text);
    const url = `https://wa.me/${this.BUSINESS_PHONE}?text=${encodedText}`;
    window.open(url, '_blank');
  }
}
