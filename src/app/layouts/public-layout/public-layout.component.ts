import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavLinksComponent } from '../../components/shared/nav-links/nav-links.component';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, NavLinksComponent],
  templateUrl: './public-layout.component.html'
})
export class PublicLayoutComponent {
  isAsideOpen = false;

  toggleAside() {
    this.isAsideOpen = !this.isAsideOpen;
  }
  closeAside() {
    this.isAsideOpen = false;
  }
}
