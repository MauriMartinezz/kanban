import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { Board } from '../models/board.model';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private boards: BehaviorSubject<any> = new BehaviorSubject(this.getBoards());

  public boards$: Observable<Board[] | any> = this.boards.pipe(
    switchMap(board => board)
  );

  constructor(private firestore: AngularFirestore) {}

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
}
