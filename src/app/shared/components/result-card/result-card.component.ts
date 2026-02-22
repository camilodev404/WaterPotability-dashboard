import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-card',
  standalone: true,
  templateUrl: './result-card.component.html',
  styleUrl: './result-card.component.css',
})
export class ResultCardComponent {
  @Input({ required: true }) label = '';
  @Input({ required: true }) prediction = 0;

  get isPotable(): boolean {
    return this.prediction === 1;
  }
}
