import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Column } from '../../models/column.model';
import {Task} from "../../models/task.model";

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {
  @Output() newTaskEvent = new EventEmitter<Task>();
  @Input() column!: Column;

  public showForm: boolean = true;
  public newTask: string = "";

  constructor() { }

  ngOnInit(): void {
  }


  createTask(){
    this.showForm = true;
    console.log(this.newTask)
  }

  // addTask(description: string, column: string){
  //   if(this.newTask.length > 1){
  //     this.board.columns.map(col => col.name === column ? this.board.columns[col.id - 1 ].tasks.push(description) : "")
  //     this.newTask = ""
  //     this.showForm = false;
  //     console.log(this.board.columns)
  //   } 
    
  // }

  addNewTask(description: string, board: string){
    if(description.length > 2){
      this.newTaskEvent.emit({description, board});
    }
    this.newTask = "";
    this.showForm = false;
  }
}
