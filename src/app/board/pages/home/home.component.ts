import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';

import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  rValue: number = 0;
  gValue: number = 0;
  bValue: number = 0;
  backgroundColor: number[] = [];
  // item$: Observable<any>;

  ejemplo$: Observable<any[]>;

  constructor(db: AngularFireDatabase, firestore: AngularFirestore) {
    this.ejemplo$ = firestore.collection('boards').valueChanges();
  }

  ngOnInit(): void {
    this.setBackground();

    // console.log(this.item$);

    console.log(this.ejemplo$);
  }

  setBackground(): string {
    this.rValue = Number(Math.floor(Math.random() * 255).toString(10));
    this.gValue = Number(Math.floor(Math.random() * 255).toString(10));
    this.bValue = Number(Math.floor(Math.random() * 255).toString(10));

    this.backgroundColor = [this.rValue, this.gValue, this.bValue];
    console.log(this.backgroundColor);

    return `rgb(${this.backgroundColor})`;
    // return `rgb(${this.backgroundColor})`;
  }

  setTextColor(): string {
    let contrast = this.contrast([255, 255, 255], this.backgroundColor);
    let textColor: string;
    if (contrast > 4) {
      textColor = '#ffffff';
    } else {
      textColor = '#393939';
    }
    return textColor;
  }

  luminance(r: number, g: number, b: number): number {
    let a = [r, g, b].map((v: number) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  }
  contrast(rgb1: number[], rgb2: number[]): number {
    let lum1 = this.luminance(rgb1[0], rgb1[1], rgb1[2]);
    let lum2 = this.luminance(rgb2[0], rgb2[1], rgb2[2]);
    let brightest = Math.max(lum1, lum2);
    let darkest = Math.min(lum1, lum2);
    return Math.floor((brightest + 0.05) / (darkest + 0.05));
  }
}
