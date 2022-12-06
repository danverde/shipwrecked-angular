import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { initialGame } from 'src/app/data/game';
import { initialPlayer } from 'src/app/data/player';
import { IGame } from 'src/app/models/game';
import { IPlayer } from 'src/app/models/player';
import { GuidService } from 'src/app/services/guid.service';
import { GamesAction } from 'src/app/store/actions/games.actions';
import { PlayerActions } from 'src/app/store/actions/player.actions';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {

  public name: string = '';

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router,
    private guid: GuidService) { }

  ngOnInit(): void {
  }

  handleStartClick(): void {
    const player: IPlayer = {
      ...initialPlayer,
      name: this.name,
    };

    const game: IGame = {
      ...initialGame,
      id: this.guid.newGuid()
    };

    this.store.dispatch(GamesAction.newGame({ game }));
    this.store.dispatch(PlayerActions.newPlayer({ player }));

    this.router.navigate(['/game', { relativeTo: this.route }]);
  }

}
