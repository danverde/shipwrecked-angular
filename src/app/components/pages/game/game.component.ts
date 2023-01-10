import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { GameService } from 'src/app/services/game/game.service';
import { PersistService } from 'src/app/services/persist/persist.service';
import { GameActions } from 'src/app/store/actions/game.actions';
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
  menuOpen: boolean = false;

  constructor(
    private store: Store<IAppStore>,
    private persistService: PersistService,
    private gameService: GameService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // TODO I don't love subscribing to the entire store...
    this.storeSubscription = this.store.subscribe(this.handleStoreChange.bind(this));
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

  handleStoreChange(store: IAppStore): void {
    this.appStore = store;
    this.gameId = store.game.id;
  }

  handleSaveClick(): void {
    if (!this.appStore) return;
    this.persistService.saveGame(this.appStore);
  }

  handleQuitClick(): void {
    this.store.dispatch(GameActions.endGame({ gameId: this.gameId }));
    this.router.navigate(["/main"]);
  }

  toggleMenuModal(): void {
    this.menuOpen = !this.menuOpen;
  }

  wait(): void {
    this.gameService.wait(1);
  }

}
