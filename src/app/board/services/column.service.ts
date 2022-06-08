import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Column } from '../models/column.model';

@Injectable({
  providedIn: 'root'
})
export class ColumnService {
  private columns: BehaviorSubject<Column[]> = new BehaviorSubject([
    {
      id: '1',
      name: 'TODO'
    }
  ]);

  public columns$ = this.columns.pipe(switchMap(c => c));
  constructor(private firestore: AngularFirestore) {}

  // createColumn(bid: string){}
  addColumn(column: Column): void {
    this.firestore.collection('columns').add(column);
  }

  getColumns(): Observable<any> {
    return this.firestore.collection('columns').valueChanges();
  }
}
