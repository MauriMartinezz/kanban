import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';
import { BoardService } from './board.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: BehaviorSubject<string[]> = new BehaviorSubject([
    'el barrio',
    'que lo vio crecer',
    'aaaaaaaaa'
  ]);

  get tasksObservable() {
    return this.tasks.asObservable();
  }

  set tasksObservableData(data: string) {
    this.tasks.next([data]);
  }
  constructor(
    private firestore: AngularFirestore,
    private _boardService: BoardService
  ) {}

  // addTask(desc: string, column: string, status: boolean) {
  //   if (desc && status) {
  //     this.tasksObservableData = desc;
  //     return this._boardService.getColumnById(column).get();
  //   }
  //   return 'Error agregando tarea';
  // }

  getTasks(columnId: string) {
    return this.firestore.collection('columns').doc(columnId);
  }
}
