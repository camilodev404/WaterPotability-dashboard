import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-card',
  standalone: true,
  templateUrl: './navigation-card.component.html',
  styleUrl: './navigation-card.component.css',
})
export class NavigationCardComponent {
  @Input({ required: true }) title = '';
  @Input({ required: true }) icon = '';
  @Input({ required: true }) route = '';

  constructor(private readonly router: Router) {}

  goToRoute(): void {
    this.router.navigate([this.route]);
  }
}
