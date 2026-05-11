import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NavLinksComponent } from "./components/shared/nav-links/nav-links.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, NavLinksComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'portfolio';
  isAsideOpen = false;

  toggleAside() {
    this.isAsideOpen = !this.isAsideOpen;
  }
  closeAside() {
    this.isAsideOpen = false;
  }
}
