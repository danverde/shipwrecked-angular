import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IPlayer } from 'src/app/models/player';

@Component({
  selector: 'app-player-summary',
  templateUrl: './player-summary.component.html',
  styleUrls: ['./player-summary.component.scss']
})
export class PlayerSummaryComponent implements OnInit, OnDestroy {

  player: IPlayer | undefined;

  private playerSubscription: Subscription | undefined;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.playerSubscription = this.store.select((x: any) => x.player).subscribe(x => this.player = x);
  }

  ngOnDestroy(): void {
    this.playerSubscription?.unsubscribe();
  }

}
