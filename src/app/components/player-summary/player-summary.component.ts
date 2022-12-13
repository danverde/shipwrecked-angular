import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IPlayer } from 'src/app/models/player.model';
import { IAppStore } from 'src/app/store/reducers/index.reducer';

@Component({
  selector: 'app-player-summary',
  templateUrl: './player-summary.component.html',
  styleUrls: ['./player-summary.component.scss']
})
export class PlayerSummaryComponent implements OnInit, OnDestroy {

  player: IPlayer | undefined;

  private playerSubscription: Subscription | undefined;

  constructor(private store: Store<IAppStore>) { }

  ngOnInit(): void {
    this.playerSubscription = this.store
      .select((x: IAppStore) => x.player)
      .subscribe(x => this.player = x);
  }

  ngOnDestroy(): void {
    this.playerSubscription?.unsubscribe();
  }

}
