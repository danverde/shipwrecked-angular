import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {

  // TODO Update service to support multiple drawers simultaneously!

  public isOpen = new BehaviorSubject(false);

  constructor() { }

  getIsOpen(): Observable<boolean> {
    return this.isOpen;
  }

  toggle(): void {
    this.isOpen.next(!this.isOpen.value);
  }
}
