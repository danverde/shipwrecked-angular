import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IGame } from 'src/app/models/game.model';
import { IGameState } from 'src/app/store/game/game.reducer';
import { IAppStore } from 'src/app/store/index.reducer';

@Component({
  selector: 'app-game-summary',
  templateUrl: './game-summary.component.html',
  styleUrls: ['./game-summary.component.scss']
})
export class GameSummaryComponent implements OnInit, OnDestroy {

  game: IGame | undefined;

  private gameSubscription: Subscription | undefined;

  constructor(private store: Store<IAppStore>) { }

  ngOnInit(): void {
    this.gameSubscription = this.store
      .select((x: IAppStore) => x.game)
      .subscribe((x: IGameState) => this.game = x);
  }

  ngOnDestroy(): void {
    this.gameSubscription?.unsubscribe();
  }

}
