import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boton',
  standalone: true,
  imports: [],
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css'],
})
export class BotonComponent implements OnInit {
  @Input() text: string = '';
  @Input() color: string = '';
  @Output() btnClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  OnClick() {
    this.btnClick.emit();
  }
}
