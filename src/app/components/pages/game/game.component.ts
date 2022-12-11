import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { PersistService } from 'src/app/services/persist/persist.service';
import { IAppStore } from 'src/app/store/reducers/index.reducer';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {

  appStore: IAppStore | undefined;
  storeSubscription: Subscription | undefined;

  constructor(
    private store: Store<IAppStore>,
    private persistService: PersistService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.storeSubscription = this.store.subscribe(x => this.appStore = x);
    // TODO load game.
    // Shouldn't load child components until the game is in redux!
  }

  ngOnDestroy(): void {
    this.storeSubscription?.unsubscribe();
  }

  handleSaveClick(): void {
    if (!this.appStore) return;
    this.persistService.saveGame(this.appStore);
  }

  handleQuitClick(): void {
    // TODO should have a thingy to clear the redux store when quitting the game!
    console.log('quit called');
    this.router.navigate(["/main"]);
  }

}
