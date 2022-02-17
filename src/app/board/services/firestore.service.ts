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

  constructor(firestore: AngularFirestore) {
    this.ejemplo$ = firestore.collection('users').valueChanges();
  }
}
