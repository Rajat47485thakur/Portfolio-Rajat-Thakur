import { Component, EventEmitter, Output } from '@angular/core';
import { ViewportScroller } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-links',
  standalone: true,
  imports: [],
  templateUrl: './nav-links.component.html',
  styleUrl: './nav-links.component.scss'
})
export class NavLinksComponent {
  @Output() closeAsideEvent = new EventEmitter<void>();

  constructor(private viewportScroller: ViewportScroller, private router: Router) { }

  protected navItems: string[] = ['Home', 'About', 'Skill Set', 'Projects', 'Contacts'];

  scrollTo(section: string) {
    let elementId = section.toLowerCase().replace(' ', '-');
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => this.viewportScroller.scrollToAnchor(elementId), 100);
      });
    } else {
      this.viewportScroller.scrollToAnchor(elementId);
    }
  }


  triggerCloseAside() {
    this.closeAsideEvent.emit();
  }
}
