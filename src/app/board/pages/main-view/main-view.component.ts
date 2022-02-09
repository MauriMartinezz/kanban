import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Column } from '../../models/column.model';
import { Board } from '../../models/board.model';



@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent implements OnInit {
  board: Board = new Board("Test Board", [
    new Column("Ideas", [
      "Idea 1",
      "Idea 2",
      "Idea 3"
    ]),
    new Column("Research",
    [
      "research 1",
      "research 2"
    ]),
    new Column("Todo",
    [
      'Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'
    ]),
    new Column("done",
    [
      'Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'
    ])
  ])

  constructor() {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
