import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from './error404/error404.component';

@NgModule({
  declarations: [NavbarComponent, Error404Component],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, Error404Component]
})
export class SharedModule {}
