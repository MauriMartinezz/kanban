import { Board } from './../../models/board.model';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { BoardService } from '../../services/board.service';
import { FirestoreService } from '../../services/firestore.service';
import { ModalService } from '../../services/modal.service';
import { ColorService } from '../../services/color.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  modalSwitch: boolean = false;
  boards: Board[] = [];

  textColor: string = '#e3e3e3';
  cardBackground: string = '#cb3dff';
  board$!: Observable<any>;
  constructor(
    private _colorService: ColorService,
    private _firestoreService: FirestoreService,
    private _modalService: ModalService,
    private _boardService: BoardService
  ) {
    this.board$ = _boardService.boardsObservableGetter;
  }

  ngOnInit(): void {
    this._modalService.$modal.subscribe(
      (value: boolean) => (this.modalSwitch = value)
    );
    this.cardBackground = this._colorService.getBackgroundColor();
    this.textColor = this._colorService.setBoardTextColor([1, 2, 3]);
    // this.fetchBoards();
    this.board$.subscribe(m => m.subscribe(console.log));
  }

  openModal() {
    this.modalSwitch = true;
  }

  // fetchBoards() {
  //   // this._firestoreService.getBoards().subscribe(doc =>
  //   //   doc.forEach((element: any, index: number) => {
  //   //     this.boards[index] = element.payload.doc.data();
  //   //     this._boardService.boardsDataSetter = element.paylad.doc.data();
  //   //   })
  //   // );
  //   this._boardService.getBoards().subscribe(console.log);
  //   // console.log(this.board$.subscribe(m => m));
  // }

  deleteBoard(id: string) {
    this._firestoreService
      .deleteBoard(id)
      .then(() => console.log('board deleted'))
      .catch(e => console.log(e));
  }
}
