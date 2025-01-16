import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { UiService } from 'src/app/core/services/ui.service';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title: string = 'Task list';

  constructor(
    private readonly router: Router,
    private readonly uiService: UiService
  ) {}

  toggleModal(): void {
    this.uiService.toggleModal();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
