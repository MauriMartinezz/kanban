import { Component, OnInit } from '@angular/core';
import { Board } from '../../models/board.model';
import { Column } from '../../models/column.model';
import {Task} from "../../models/task.model";


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  board: Board = new Board("Test Board", [
    new Column(1, "Research",
    [
      "research 1",
      "research 2"
    ]),
    new Column(2, "Todo",
    [
      'Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'
    ]),
    new Column(3,"done",
    [
      'Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'
    ]),
    new Column(4, "Ideas", [
      "Idea 1",
      "Idea 2",
      "Idea 3"
    ]),
  ])

  constructor() { }

  ngOnInit(): void {
  }

  addTask(e: Task){
    console.log(e)
    if(this.board.columns){
      this.board.columns.map(col => col.name === e.board ? col.tasks.unshift(e.description) : "" );
    }
  }

  deleteTask(e: any){
    this.board.columns.map
  }

}
