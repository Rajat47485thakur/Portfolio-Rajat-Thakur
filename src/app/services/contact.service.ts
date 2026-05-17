import { Injectable } from '@angular/core';

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
  private readonly BUSINESS_PHONE = '917018683789'; // Business phone number
  private readonly BUSINESS_EMAIL = 'rajatthakurdev24@gmail.com';

  async sendInquiry(data: ContactForm): Promise<{ success: boolean; method: 'email' | 'whatsapp' | 'both' }> {
    let method: 'email' | 'whatsapp' | 'both' = 'email';

    if (data.email && data.phone) {
      method = 'both';
      await this.sendEmail(data);
      // We'll return and let the component handle the WhatsApp CTA
    } else if (data.email) {
      method = 'email';
      await this.sendEmail(data);
    } else if (data.phone) {
      method = 'whatsapp';
      this.redirectToWhatsApp(data);
    }

    return { success: true, method };
  }

  private async sendEmail(data: ContactForm) {
    console.log('Sending email to', this.BUSINESS_EMAIL, data);
    // Integrate EmailJS here:
    // emailjs.send('service_id', 'template_id', data, 'user_id');
    return new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
  }

  redirectToWhatsApp(data: ContactForm) {
    const text = `Hello! My name is ${data.fullName}. \nSubject: ${data.subject} \nMessage: ${data.message}`;
    const encodedText = encodeURIComponent(text);
    const url = `https://wa.me/${this.BUSINESS_PHONE}?text=${encodedText}`;
    window.open(url, '_blank');
  }
}
