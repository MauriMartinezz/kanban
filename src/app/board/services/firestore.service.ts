import { Board } from './../models/board.model';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { doc, onSnapshot } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private ejemplo$: Observable<any[]>;
  private itemsCollection!: AngularFirestoreCollection<any>;
  items!: Observable<any[]>;
  public get ejemplo(): Observable<any[]> {
    return this.ejemplo$;
  }

  constructor(private firestore: AngularFirestore) {
    this.ejemplo$ = firestore.collection('users').valueChanges();
  }

  createBoard(data: Board) {
    this.firestore.collection('users').add(data);
  }

  getBoards(): any {
    return this.firestore.collection('users').ref.get();
  }

  addColumn(data: string) {
    // this.firestore.collection('users').doc('pgC4Uk63cdEMniSdeCd1').set({ nashe: data });
    // let coll = this.firestore.collection('users').valueChanges();
    // let coll = this.firestore.collection('/users/');

    this.itemsCollection = this.firestore.collection('users');
    this.items = this.itemsCollection.valueChanges();
  }
}
