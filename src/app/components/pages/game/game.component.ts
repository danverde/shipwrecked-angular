import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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

  gameId: string = '';
  appStore: IAppStore | undefined;
  storeSubscription: Subscription | undefined;
  queryParamSubscription: Subscription | undefined;

  constructor(
    private store: Store<IAppStore>,
    private persistService: PersistService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.storeSubscription = this.store.subscribe(x => this.appStore = x);
    // TODO Shouldn't load child components until the game is in redux!

    this.queryParamSubscription = this.route.params.subscribe((params: Params) => {
      if (params['id'] && this.gameId !== params['id']) {
        this.gameId = params['id'];
        this.persistService.loadGameById(this.gameId);
      }
    });
  }

  ngOnDestroy(): void {
    this.storeSubscription?.unsubscribe();
    this.queryParamSubscription?.unsubscribe();
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
