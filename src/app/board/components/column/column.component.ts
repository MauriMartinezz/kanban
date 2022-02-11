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

  addNewTask(description: string, board: string){
    if(description){
      this.newTaskEvent.emit({description, board});
    }
    this.newTask = "";
    this.hideForm();
  }

  hideForm(){
    this.showForm = !this.showForm;
  }

}
