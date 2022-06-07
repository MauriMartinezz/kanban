import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { Board } from '../models/board.model';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private boards: BehaviorSubject<Observable<any>> = new BehaviorSubject(
    this.getBoards()
  );

  get boardsObservableGetter() {
    return this.boards.asObservable();
  }

  set boardsDataSetter(data: any) {
    this.boards.next(data);
  }
  constructor(private firestore: AngularFirestore) {}

  getBoards(): Observable<unknown[]> {
    return this.firestore
      .collection('boards', (ref: any) => ref.orderBy('bid', 'asc'))
      .valueChanges();
  }
}
