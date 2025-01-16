import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { BotonComponent } from '../boton/boton.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BotonComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title: string = 'Task list';
  showAddTask: boolean = false;
  subscription?: Subscription;

  constructor(private readonly router: Router) {}

  toggleAddTask() {
    return (this.showAddTask = !this.showAddTask);
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
