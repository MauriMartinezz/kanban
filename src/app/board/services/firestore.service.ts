import { Column } from './../models/column.model';
import { Board } from './../models/board.model';
import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  DocumentChangeAction
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private boards$: Board[] = [];
  private board!: Board;

  public get boardsGetter(): Board[] {
    return this.boards$;
  }

  public set boardSetter(payload: Board) {
    this.board = payload;
  }

  constructor(private firestore: AngularFirestore) {}

  getBoards(): Observable<DocumentChangeAction<unknown>[]> {
    return this.firestore
      .collection('boards', ref => ref.orderBy('bid', 'asc'))
      .snapshotChanges();
  }

  getBoardId(): any {
    return this.firestore
      .collection('boards', ref => ref.orderBy('bid', 'asc'))
      .snapshotChanges();
  }
  createBoard() {
    this.firestore.collection('boards').add(this.board);
  }

  addColumn(column: string): Observable<any> {
    return this.firestore.collection('boards').snapshotChanges();
  }

  generateId(): string {
    let id = Math.floor((1 + Math.random()) * 0x100000)
      .toString(16)
      .substring(1);

    return id;
  }

  deleteBoard(id: string): Promise<any> {
    return this.firestore.collection('boards').doc(id).delete();
  }
}
