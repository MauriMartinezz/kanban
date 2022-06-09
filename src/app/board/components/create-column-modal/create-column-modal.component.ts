import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-create-column-modal',
  templateUrl: './create-column-modal.component.html',
  styleUrls: ['./create-column-modal.component.scss']
})
export class CreateColumnModalComponent {
  @Output() modalClosed: EventEmitter<boolean> = new EventEmitter();

  newBoardForm: FormGroup = this.fb.group({
    boardName: ['', [Validators.required, Validators.minLength(2)]]
  });

  constructor(private fb: FormBuilder, private _modalService: ModalService) {}
  closeModal() {
    this._modalService.$modal.emit(false);
  }

  createColumn(e: Event) {
    console.log(e);
  }
}
