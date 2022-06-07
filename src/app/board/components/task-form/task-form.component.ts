import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  public showForm: boolean = false;
  public newTask: string = '';

  constructor() {}

  ngOnInit(): void {}

  hideForm() {
    this.showForm = false;
    this.newTask = '';
  }
}
