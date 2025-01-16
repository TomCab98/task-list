import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() color: string = '';
  @Output() btnClick = new EventEmitter();

  OnClick() {
    this.btnClick.emit();
  }
}
