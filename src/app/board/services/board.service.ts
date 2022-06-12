import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  DocumentData,
  QuerySnapshot
} from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { Board } from '../models/board.model';
import { Column } from '../models/column.model';
import { IdService } from './id-service.service';
import { TaskService } from './task.service';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private boards: BehaviorSubject<any> = new BehaviorSubject(this.getBoards());

  public boards$: Observable<Board[] | any> = this.boards.pipe(
    switchMap(board => board)
  );

  constructor(
    private firestore: AngularFirestore,
    private _idServiceService: IdService,
    private _idService: IdService
  ) {}

  getBoards(): Observable<Board[] | any> {
    return this.firestore
      .collection('boards')
      .valueChanges()
      .pipe(map(m => m));
  }

  createBoard(board: Board) {
    this.getBoardRefById(board.bid).set(board);
  }

  // getBoardById(bid: string): AngularFirestoreDocument<Board> {
  getBoardById(bid: string): Observable<any> {
    // return this.firestore.collection('boards').doc(bid);
    return this.firestore.collection('boards').doc(bid).valueChanges();
  }

  getBoardRefById(bid: string): AngularFirestoreDocument {
    return this.firestore.collection('boards').doc(bid);
  }

  getColumns(bid: string): Observable<DocumentData> {
    return this.getBoardRefById(bid).collection('columns').valueChanges();
  }
  getColumnById(bid: string, cid: string): AngularFirestoreDocument<Column> {
    return this.firestore
      .collection('boards')
      .doc(bid)
      .collection('columns')
      .doc(cid);
  }
  addColumn(bid: string, name: string) {
    const id = this._idServiceService.generateId();
    const board = this.getBoardRefById(bid);
    board.collection('columns').doc(id).set({ id, name });
  }

  getColumnTasks(bid: string, cid: string): Observable<any> {
    const snapshot = this.getColumnById(bid, cid)
      .collection('tasks')
      .valueChanges();
    return snapshot;
    // .pipe(
    //   map(m => {
    //     return m;
    //   })
    // );
  }
  addTask(description: string, bid: string, cid: string) {
    const id = this._idService.generateId();
    const date = new Date();
    // firebase.firestore.FieldValue.serverTimestamp();
    this.getColumnById(bid, cid).collection('tasks').doc(id).set({
      id,
      description,
      createdAt: date
    });
  }
}
