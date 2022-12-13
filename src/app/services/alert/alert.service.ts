import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  // TODO how on earth do I implement this???
  createMessage(message: string): void {
    console.log('create message called');
  }
}
