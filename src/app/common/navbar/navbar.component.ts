import { Component, Renderer2 } from '@angular/core';
import { RouterLink, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router, private renderer: Renderer2) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateActiveLink();
      }
    });
  }

  ngAfterViewInit(): void {
    this.updateActiveLink();
  }

  updateActiveLink(): void {
    const currentUrl = window.location.pathname; // Get the current path (without domain)
    const anchorElements = document.querySelectorAll('a');

    anchorElements.forEach((anchor) => {
      if (anchor.getAttribute('routerLink') === currentUrl) {
        this.renderer.addClass(anchor, 'active');
      } else {
        this.renderer.removeClass(anchor, 'active');
      }
    });
  }
}
