import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

import { NavigationCardComponent } from '../../shared/components/navigation-card/navigation-card.component';
import { MemberCardComponent } from '../../shared/components/member-card/member-card.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NgFor, NavigationCardComponent, MemberCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomePageComponent {
  readonly navCards = [
    { title: 'Métricas', icon: '📊', route: '/metricas' },
    { title: 'Predicciones', icon: '🔮', route: '/predicciones' },
  ];

  readonly members = [
    { name: 'Sandra Pantoja', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix' },
    { name: 'Yeisson Galindo', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka' },
    { name: 'Cristian Camilo Nino', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Luna' },
    { name: 'John Arley Jimenez', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Max' },
  ];
}
