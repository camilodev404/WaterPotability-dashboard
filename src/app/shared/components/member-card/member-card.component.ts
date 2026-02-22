import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-member-card',
  standalone: true,
  templateUrl: './member-card.component.html',
  styleUrl: './member-card.component.css',
})
export class MemberCardComponent {
  @Input({ required: true }) name = '';
  @Input({ required: true }) avatar = '';
}
