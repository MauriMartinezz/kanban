import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-create-board-modal',
  templateUrl: './create-board-modal.component.html',
  styleUrls: ['./create-board-modal.component.scss'],
})
export class CreateBoardModalComponent implements OnInit {
  @Output() modalClosed: EventEmitter<boolean> = new EventEmitter();
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {}

  closeModal() {
    this.modalService.$modal.emit(false);
  }
}
