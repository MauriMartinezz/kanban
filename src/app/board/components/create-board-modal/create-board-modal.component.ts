import { BoardService } from './../../services/board.service';
import { Component, DoCheck, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FirestoreService } from '../../services/firestore.service';
import { ModalService } from '../../services/modal.service';
import { Board } from '../../models/board.model';

@Component({
  selector: 'app-create-board-modal',
  templateUrl: './create-board-modal.component.html',
  styleUrls: ['./create-board-modal.component.scss'],
})
export class CreateBoardModalComponent implements OnInit, OnDestroy {
  @Output() modalClosed: EventEmitter<boolean> = new EventEmitter();
  background: string = '#CB3DFA';
  newBoardForm: FormGroup = this.fb.group({
    boardName: ['', [Validators.required, Validators.minLength(3)]],
  });

  constructor(
    private _modalService: ModalService,
    private _firestoreService: FirestoreService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private _boardService: BoardService
  ) {}
  boardName!: string;
  ngOnInit(): void {}
  closeModal() {
    this._modalService.$modal.emit(false);
  }

  addBoard(e: Event) {
    if (!this.newBoardForm.invalid) {
      let payload: Board = {
        ...this.newBoardForm.value,
        boardBackground: this.background,
        bid: this._firestoreService.generateId(),
      };

      this.newBoardForm.reset();
      this.closeModal();
      this.toastr.success('Congratulations! your board has been added correctly', 'Board created');
    } else {
      this.newBoardForm.markAllAsTouched();
      e.preventDefault();
    }
  }
  backgroundColor(e: string) {
    this.background = e;
  }

  ngOnDestroy(): void {}
}
