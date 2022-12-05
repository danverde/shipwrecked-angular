import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {

  // TODO Update service to support multiple drawers simultaneously!
  // https://stackoverflow.com/questions/53357636/controling-the-angular-material-mat-drawer-from-another-component

  public isOpen = new BehaviorSubject(false);

  constructor() { }

  getIsOpen(): Observable<boolean> {
    return this.isOpen;
  }

  toggle(): void {
    this.isOpen.next(!this.isOpen.value);
  }
}
