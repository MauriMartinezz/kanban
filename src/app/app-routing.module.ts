import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "kanban",
    loadChildren: ()=> import("./board/board.module").then(m=> m.BoardModule)
  },
  {
    path: "**",
    redirectTo: "kanban"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
