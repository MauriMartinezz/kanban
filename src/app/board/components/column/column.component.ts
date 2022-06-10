import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { DocumentData } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Column } from '../../models/column.model';
import { Task } from '../../models/task.model';
import { BoardService } from '../../services/board.service';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {
  @Output() newTaskEvent = new EventEmitter<Task>();
  @Output() indexDeleteTask = new EventEmitter<number>();

  @Input() column!: Column;
  @Input() bid!: string;

  public showForm: boolean = false;
  public newTask: string = '';

  public tasks$!: any;

  constructor(private readonly _boardService: BoardService) {}

  ngOnInit() {
    // this.tasks$ = this._boardService.getColumnTasks(this.bid, this.column.id);
    this.tasks$ = this._boardService.getColumnTasks(this.bid, this.column.id);
    // this.tasks$.subscribe(console.log);
    this.tasks$.subscribe((m: any) => console.log(m));
  }
  addNewTask(board: string, columnId: string) {
    this._boardService.addTask(this.newTask, board, columnId);
    console.log('BIEN');
    this.hideForm();
    // if (description && status) {
    //   this.newTaskEvent.emit({ description, boardId: board });
    //   this.newTask = '';
    //   this.hideForm();
    // } else {
    //   this.showForm = true;
    // }
  }

  hideForm() {
    this.showForm = false;
    this.newTask = '';
  }

  // deleteTask(task: any) {
  //   this.column.tasks.splice(task, 1);
  // }
}
