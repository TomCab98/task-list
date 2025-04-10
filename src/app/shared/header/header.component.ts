import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { UiService } from 'src/app/core/services/ui.service';
import { ButtonComponent } from '../button/button.component';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title: string = 'Task list';
  name: string | null = null;

  constructor(
    private readonly router: Router,
    private readonly uiService: UiService,
    private readonly cookieService: CookieService
  ) {}

  ngOnInit(): void {
    this.name = this.cookieService.get('name');
  }

  toggleModal(): void {
    this.uiService.toggleModal();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }

  logout(): void {
    this.cookieService.deleteAll();
    this.router.navigate(['/login']);
  }

  hasToken(): boolean {
    return !!this.cookieService.get('token');
  }
}
