import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  DocumentChangeAction
} from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { Board } from '../models/board.model';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private boards: BehaviorSubject<Observable<DocumentChangeAction<unknown>[]>> =
    new BehaviorSubject(this.getBoards());

  get boardsObservableGetter() {
    return this.boards.asObservable();
  }

  set boardsDataSetter(data: any) {
    this.boards.next(data);
  }
  constructor(private firestore: AngularFirestore) {}

  getBoards(): Observable<DocumentChangeAction<unknown>[]> {
    return this.firestore
      .collection('boards', ref => ref.orderBy('bid', 'asc'))
      .snapshotChanges();
  }
}
