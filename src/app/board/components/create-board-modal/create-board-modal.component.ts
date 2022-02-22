import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-create-board-modal',
  templateUrl: './create-board-modal.component.html',
  styleUrls: ['./create-board-modal.component.scss'],
})
export class CreateBoardModalComponent implements OnInit {
  @Output() modalClosed: EventEmitter<boolean> = new EventEmitter();
  constructor(private modalService: ModalService, private firestoreService: FirestoreService) {}
  color: string = '#e5e6e6';
  value: string = '';
  ngOnInit(): void {}

  closeModal() {
    this.modalService.$modal.emit(false);
  }

  addBoard(value: string) {
    // this.firestoreService.addColumn(value).subscribe(console.log);
    console.log(this.firestoreService.addColumn(value));
    this.closeModal();
  }
  backgroundColor(e: any) {
    console.log('background: ' + e);
  }
}
