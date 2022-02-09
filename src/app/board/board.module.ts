import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { MainViewComponent } from './pages/main-view/main-view.component';
import { TasksComponent } from './components/tasks/tasks.component';



@NgModule({
  declarations: [
    MainViewComponent,
    TasksComponent
  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    DragDropModule
  ]
})
export class BoardModule { }
