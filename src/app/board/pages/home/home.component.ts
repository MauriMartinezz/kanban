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
  modalSwitch: boolean = true;
  get results() {
    return this.firestoreService.ejemplo.subscribe(console.log);
  }
color: string = "#e3e3e3"
  constructor(
    private boardService: BoardService,
    private firestoreService: FirestoreService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.modalService.$modal.subscribe((value: boolean) => (this.modalSwitch = value));
  }

  openModal() {
    this.modalSwitch = true;
  }
}
