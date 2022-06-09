import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BoardService } from '../../services/board.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-create-column-modal',
  templateUrl: './create-column-modal.component.html',
  styleUrls: ['./create-column-modal.component.scss']
})
export class CreateColumnModalComponent {
  @Output() modalClosed: EventEmitter<boolean> = new EventEmitter();
  @Input() bid!: string;
  newBoardForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]]
  });

  constructor(
    private fb: FormBuilder,
    private _modalService: ModalService,
    private readonly _boardService: BoardService,
    private toastr: ToastrService
  ) {}
  closeModal() {
    this._modalService.$modal.emit(false);
  }

  createColumn() {
    this._boardService.addColumn(this.bid!, this.newBoardForm.value);
    this.closeModal();
    this._modalService.$modal;

    this.toastr.success(
      `${this.newBoardForm.get(['name'])?.value} added correctly`,
      'Column created'
    );
  }
}
