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
  @Output() indexDeleteTask = new EventEmitter<number>();

  @Input() column!: Column;

  public showForm: boolean = false;
  public newTask: string = "";


  constructor() { }

  ngOnInit(): void {
  }



  addNewTask(description: string, board: string, status: boolean | null){
    if(description && status){
      this.newTaskEvent.emit({description, board});
      this.newTask = "";
      this.hideForm();
    }else{
      this.showForm = true;
    }
  }

  hideForm(){
    this.showForm = false;
    this.newTask = "";
  }

  deleteTask(event: any){
    this.column.tasks.splice(event, 1)
  }
}
