import { Board } from './../../models/board.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BoardService } from '../../services/board.service';
import { FirestoreService } from '../../services/firestore.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  modalSwitch: boolean = false;
  boards: Board[] = [];

  textColor: string = '#e3e3e3';
  cardBackground: string = '#cb3dff';
  constructor(
    private _boardService: BoardService,
    private _firestoreService: FirestoreService,
    private _modalService: ModalService
  ) {
    this.fetchBoards();
  }

  ngOnInit(): void {
    this._modalService.$modal.subscribe((value: boolean) => (this.modalSwitch = value));
    this.cardBackground = this._boardService.getBackgroundColor();
    this.textColor = this._boardService.setBoardTextColor([1, 2, 3]);
    this.boards = this._firestoreService.boardsGetter;
  }

  openModal() {
    this.modalSwitch = true;
  }

  fetchBoards() {
    // this._firestoreService.getBoards();
    this._firestoreService.getBoards();
    // this._firestoreService.getBoards().subscribe((doc) =>
    //   doc.map((element: any) => {
    //     // let data = element.doc.payload.data();
    //     this.boards.push(element);
    //   })
    // );
    // console.log(this.boards);
  }
}

// this._firestoreService.getBoards().subscribe((doc) => {
//   doc.map((element: any) => {
//     console.log(element.payload.doc.data());
//   });
// });
