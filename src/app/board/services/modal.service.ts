import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  $modal = new EventEmitter<any>();
  constructor() {}
}
