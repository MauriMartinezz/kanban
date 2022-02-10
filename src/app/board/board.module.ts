import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { MainViewComponent } from './pages/main-view/main-view.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { BoardComponent } from './components/board/board.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateBoardModalComponent } from './components/create-board-modal/create-board-modal.component';
import { FormsModule } from '@angular/forms';
import { ColumnComponent } from './components/column/column.component';



@NgModule({
  declarations: [
    MainViewComponent,
    TasksComponent,
    BoardComponent,
    HomeComponent,
    CreateBoardModalComponent,
    ColumnComponent
  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    DragDropModule,
    FormsModule
  ]
})
export class BoardModule { }
