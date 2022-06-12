import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Board } from '../../models/board.model';
import { BoardService } from '../../services/board.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  bid!: string;
  modalSwitch: boolean = false;
  // board!: Observable<Board>;
  board!: Observable<Board>;

  columns$!: Observable<any>;
  constructor(
    private readonly _modalService: ModalService,
    private readonly _boardService: BoardService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.bid = this.route.snapshot.paramMap.get('bid')!;
    this.board = this._boardService.getBoardById(this.bid);
    this._modalService.$modal.subscribe(
      (value: boolean) => (this.modalSwitch = value)
    );
    this.columns$ = this._boardService.getColumns(this.bid);
  }
  openModal() {
    this.modalSwitch = true;
  }
}

// addTask(e: Task){
//   console.log(e)
//   if(this.board.columns){
//     this.board.columns.map(col => col.name === e.board ? col.tasks.unshift(e.description) : "" );
//   }
// }

// deleteTask(e: any){
//   this.board.columns.map
// }
// board: Board = new Board("Test Board", [
//   new Column(1, "Research",
//   [
//     "research 1",
//     "research 2"
//   ]),
//   new Column(2, "Todo",
//   [
//     'Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'
//   ]),
//   new Column(3,"done",
//   [
//     'Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'
//   ]),
//   new Column(4, "Ideas", [
//     "Idea 1",
//     "Idea 2",
//     "Idea 3"
//   ]),
// ])
