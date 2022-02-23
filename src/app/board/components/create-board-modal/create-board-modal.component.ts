import { BoardService } from './../../services/board.service';
import { Component, DoCheck, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FirestoreService } from '../../services/firestore.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-create-board-modal',
  templateUrl: './create-board-modal.component.html',
  styleUrls: ['./create-board-modal.component.scss'],
})
export class CreateBoardModalComponent implements OnInit {
  @Output() modalClosed: EventEmitter<boolean> = new EventEmitter();
  background: string = '#CB3DFA';
  newBoardForm: FormGroup = this.fb.group({
    boardName: ['', [Validators.required, Validators.minLength(3)]],
    boardBackground: [''],
    bid: [[Validators.required]],
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
    if (this.newBoardForm.invalid) {
      this.newBoardForm.markAllAsTouched();
      e.preventDefault();
    } else {
      this.newBoardForm.controls['boardBackground'].setValue(this.background);
      this.newBoardForm.controls['bid'].setValue(this._boardService.generateId());
      this._firestoreService.createBoard(this.newBoardForm.value);
      this.newBoardForm.reset();
      this.closeModal();
      this.toastr.success('Tablero creado');
    }
  }
  backgroundColor(e: string) {
    this.background = e;
  }
}
