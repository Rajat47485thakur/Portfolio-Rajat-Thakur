import { Component, EventEmitter, Output } from '@angular/core';
import { NavLinksComponent } from "../shared/nav-links/nav-links.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NavLinksComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isAsideOpen = false;
  toggleAside() {
    this.isAsideOpen = !this.isAsideOpen;
  }

  @Output() toggleAsideEvent = new EventEmitter<void>();

  onToggleClick() {
    this.toggleAsideEvent.emit();
  }
  onLinkClick(section: string) {
    const id = section.toLowerCase().replace(' ', '-');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    this.isAsideOpen = false; // Close after navigation
  }
}
