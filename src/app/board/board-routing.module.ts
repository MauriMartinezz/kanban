import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MainViewComponent } from './pages/main-view/main-view.component';

const routes: Routes = [
  {
    path: "",
    children:[
      {
        path: "",
        component: HomeComponent
      },
      {
          path: "kanban",
          component: MainViewComponent
      },
      {
        path: "**",
        redirectTo: ""
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardRoutingModule { }
