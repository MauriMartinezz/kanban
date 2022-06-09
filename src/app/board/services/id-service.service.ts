import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdService {
  generateId(): string {
    let id = Math.floor((1 + Math.random()) * 0x10000000000)
      .toString(16)
      .substring(1);

    return id;
  }
}
