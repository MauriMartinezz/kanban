import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { Board } from '../models/board.model';
import { Column } from '../models/column.model';
import { IdService } from './id-service.service';

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
    private _idServiceService: IdService
  ) {}

  getBoards(): Observable<Board[] | any> {
    return this.firestore
      .collection('boards')
      .valueChanges()
      .pipe(map(m => m));
  }

  createBoard(board: Board) {
    this.getBoardId(board.bid).set(board);
  }

  getBoardId(bid: string): any {
    return this.firestore.collection('boards').doc(bid);
  }

  getColumns(bid: string | any) {
    return this.getBoardId(bid).collection('columns').valueChanges();
  }

  addColumn(bid: string, name: string) {
    const id = this._idServiceService.generateId();
    this.getBoardId(bid).collection('columns').doc(id).set({
      id,
      name
    });
    // this.getBoardId(bid).collection('columns').push().set(column);
  }
}
