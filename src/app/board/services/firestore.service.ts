import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private ejemplo$: Observable<any[]>;

  public get ejemplo(): Observable<any[]> {
    return this.ejemplo$;
  }

  constructor(private firestore: AngularFirestore) {
    this.ejemplo$ = firestore.collection('users').valueChanges();
  }

  createBoard(data: string) {
    this.firestore.collection('users').add({ name: data });
  }

  addColumn(data: string) {
    this.firestore.collection('users').doc('pgC4Uk63cdEMniSdeCd1').set({ nashe: data });
  }
}
