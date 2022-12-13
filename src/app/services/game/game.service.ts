import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { initialGame } from 'src/app/data/game.data';
import { initialMap } from 'src/app/data/map.data';
import { initialPlayer } from 'src/app/data/player.data';
import { allSettings } from 'src/app/data/settings.data';
import { IGame } from 'src/app/models/game.model';
import { IPlayer } from 'src/app/models/player.model';
import { GameDifficulty } from 'src/app/models/settings.model';
import { GameActions } from 'src/app/store/actions/game.actions';
import { MapActions } from 'src/app/store/actions/map.actions';
import { PlayerActions } from 'src/app/store/actions/player.actions';
import { IAppStore } from 'src/app/store/reducers/index.reducer';
import { GuidService } from '../guid/guid.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(
    private store: Store<IAppStore>,
    private router: Router,
    private guid: GuidService,
  ) { }

  startNewGame(playerName: string, difficulty: GameDifficulty) {
    const settings = allSettings[difficulty];

    const player: IPlayer = {
      ...initialPlayer,
      name: playerName,
      maxStamina: settings.playerSettings.maxStamina,
      stamina: settings.playerSettings.initialStamina,
      health: settings.playerSettings.initialHealth,
      maxHealth: settings.playerSettings.maxHealth
    };

    const game: IGame = {
      ...initialGame,
      difficulty,
      id: this.guid.newGuid()
    };

    this.store.dispatch(GameActions.setGame({ game }));
    this.store.dispatch(MapActions.setMap({ map: initialMap }));
    this.store.dispatch(PlayerActions.setPlayer({ player }));

    this.router.navigate([`/game/${game.id}`]);
  }

  // TODO how on earth am I going to build this???
  /* 
    Does the service return anything, or just trigger the actions? 
    It should probably just trigger the actions... but then it would need to have access to the store...
    I should be able to pass in the store though...
    Probably ought to research angular service best practices just to be safe.
  */
  wait(days: number): void {


    // this.store.dispatch(gameReducer.)
  }
}
