import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-result-modal',
  standalone: true,
  imports: [NgIf],
  templateUrl: './result-modal.component.html',
  styleUrl: './result-modal.component.css',
})
export class ResultModalComponent {
  @Input({ required: true }) isOpen = false;
  @Input({ required: true }) isPotable = false;
  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }
}
