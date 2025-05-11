import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  goToLinkedin() {
    window.open('https://www.linkedin.com/in/rajat-thakur-226b14223/', '_blank');
  }

  get email(): string {
    return 'rajatthakurdev24@gmail.com';
  }

  goToWhatsapp(): void {
    const phoneNumber = '917018683789';
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  }

  goToPhone(): void {
    const phoneNumber = '+917018683789';
    const telUrl = `tel:${phoneNumber}`;
    window.open(telUrl, '_self');
  }

}
