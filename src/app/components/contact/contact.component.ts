import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ScrollRevealDirective, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  showWhatsAppCTA = false;

  readonly email = 'rajatthakur4748@gmail.com';
  readonly phone = '+919582294406';

  constructor(private fb: FormBuilder, private contactService: ContactService) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.email]],
      phone: ['', [Validators.pattern(/^\+?[0-9\s-]{10,20}$/)]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    }, { validators: this.atLeastOneContactMethod });
  }

  atLeastOneContactMethod(control: AbstractControl): ValidationErrors | null {
    const email = control.get('email')?.value;
    const phone = control.get('phone')?.value;
    return (email || phone) ? null : { noContactMethod: true };
  }

  async onSubmit() {
    if (this.contactForm.invalid || this.isSubmitting) return;

    this.isSubmitting = true;
    try {
      const result = await this.contactService.sendInquiry(this.contactForm.value);
      this.submitSuccess = true;
      if (result.method === 'both') {
        this.showWhatsAppCTA = true;
      }
      this.contactForm.reset();
    } catch (error) {
      console.error('Submission failed', error);
    } finally {
      this.isSubmitting = false;
    }
  }

  openWhatsApp() {
    this.contactService.redirectToWhatsApp(this.contactForm.value);
  }

  goToEmail() {
    const subject = encodeURIComponent('Project Inquiry');
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${this.email}&su=${subject}`;
    
    // Try to open Gmail in a new tab
    const newWindow = window.open(gmailUrl, '_blank');
    
    // If it was blocked or failed, fallback to standard mailto
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      window.location.href = `mailto:${this.email}?subject=${subject}`;
    }
  }

  goToPhone() {
    window.open(`tel:${this.phone}`);
  }

  goToWhatsapp() {
    window.open(`https://wa.me/${this.phone.replace('+', '')}`, '_blank');
  }

  goToLinkedin() {
    window.open('https://www.linkedin.com/in/rajat-thakur-226b14223/', '_blank');
  }

  goToGithub() {
    window.open('https://github.com/Rajat47485thakur', '_blank');
  }

  isFieldInvalid(field: string): boolean {
    const control = this.contactForm.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}
