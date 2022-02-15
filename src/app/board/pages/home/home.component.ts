import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  firstColor: string = '';
  secondColor: string = '';
  constructor() {}

  ngOnInit(): void {
    this.firstColor = Math.floor(Math.random() * 16777215).toString(16);
    this.secondColor = Math.floor(Math.random() * 16777215).toString(16);
  }

  setBackground(): string {
    console.log(this.firstColor);
    // return `linear-gradient(to right, #${this.firstColor}, #${this.secondColor});`;
    return `#${this.firstColor}`;
  }
}
