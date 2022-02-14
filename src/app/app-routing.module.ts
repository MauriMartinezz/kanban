import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './shared/error404/error404.component';

const routes: Routes = [
  {
    path: "",
    loadChildren: ()=> import("./board/board.module").then(m=> m.BoardModule)
  },
  {
    path: "**",
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
