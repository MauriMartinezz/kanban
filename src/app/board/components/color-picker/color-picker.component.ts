import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
})
export class ColorPickerComponent implements OnInit {
  @Output() onBoardBackground = new EventEmitter<string>();
  // Color picker
  color: string = '#cb3dff';
  constructor() {}
  ngOnInit(): void {}

  getColor() {
    this.onBoardBackground.emit(this.color);
  }
}
