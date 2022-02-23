import { Column } from './../models/column.model';
import { Board } from './../models/board.model';
import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  DocumentChangeAction,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  // public get ejemplo(): Observable<any[]> {
  //   return this.ejemplo$;
  // }

  private boards$: Board[] = [];

  public get boardsGetter(): Board[] {
    return this.boards$;
  }

  constructor(private firestore: AngularFirestore) {}

  getBoards(): any {
    // getBoards(): Observable<DocumentChangeAction<unknown>[]> {
    return this.firestore
      .collection('boards')
      .snapshotChanges()
      .pipe(
        map((payload) => {
          payload.map((data) => {
            data.payload.doc.data();
            console.log(data);
          });
        })
      );
  }

  createBoard(board: Board) {
    this.firestore.collection('boards').add(board);
  }

  addColumn(column: string): Observable<any> {
    return this.firestore.collection('boards').snapshotChanges();
  }
}

// createBoard(data: Board) {
//   this.firestore.collection('users').add(data);
// }
// this._firestoreService.getBoards().subscribe((doc) => {
//   doc.map((element: any) => {
//     console.log(element.payload.doc.data());
//   });
// });
