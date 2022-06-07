import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: BehaviorSubject<string[]> = new BehaviorSubject([
    'el barrio',
    'que lo vio crecer'
  ]);

  get tasksObservable() {
    return this.tasks.asObservable();
  }

  set tasksObservableData(data: string[]) {
    this.tasks.next(data);
  }
  addTask(desc: string, board: string, status: boolean) {
    if (desc && status) {
      this.tasks.next([]);
    }
  }
  constructor() {}
}
