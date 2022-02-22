import { Board } from './../models/board.model';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable, Subscriber } from 'rxjs';
import { doc, onSnapshot } from 'firebase/firestore';

export interface Item {
  name: string;
}
@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private ejemplo$: Observable<any[]>;
  // private itemsCollection!: any;
  // items!: Observable<any[]>;
  public get ejemplo(): Observable<any[]> {
    return this.ejemplo$;
  }

  private itemDoc!: AngularFirestoreDocument<any>;
  item!: Observable<Item>;

  constructor(private firestore: AngularFirestore) {
    this.ejemplo$ = firestore.collection('users').valueChanges();
  }

  createBoard(data: Board) {
    this.firestore.collection('users').add(data);
  }

  getBoards(): Observable<any> {
    return this.firestore.collection('users').snapshotChanges();
  }

  addColumn(board: Board) {
    this.firestore.collection('boards').add(board);
  }
}
