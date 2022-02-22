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
  });

  constructor(
    private _modalService: ModalService,
    private _firestoreService: FirestoreService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {}
  boardName!: string;
  ngOnInit(): void {
    // this._firestoreService.getBoards().subscribe((doc) => {
    //   doc.map((element: any) => {
    //     console.log(element.payload.doc.data());
    //   });
    // });
  }
  closeModal() {
    this._modalService.$modal.emit(false);
  }

  addBoard(e: Event) {
    if (this.newBoardForm.invalid) {
      this.newBoardForm.markAllAsTouched();
      e.preventDefault();
    } else {
      this.newBoardForm.controls['boardBackground'].setValue(this.background);
      this._firestoreService.addColumn(this.newBoardForm.value);
      this.newBoardForm.reset();
      this.closeModal();

      this.toastr.success('heyy');
    }
  }
  backgroundColor(e: string) {
    this.background = e;
  }
}
