import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IGame } from '../models/game.model';
import { IPackedGame } from '../models/persist.model';
import { GameActions } from '../store/actions/game.actions';
import { MapActions } from '../store/actions/map.actions';
import { PlayerActions } from '../store/actions/player.actions';
import { IAppStore } from '../store/reducers/index.reducer';

const GamePrefix = '[Shipwreck Game]';

@Injectable({
  providedIn: 'root'
})
export class PersistService {

  constructor(
    private store: Store<IAppStore>,
    private router: Router) {
  }

  saveGame(): void {
    this.store.select
  }

  listSavedGames(): IPackedGame[] {
    let keys: string[] = [];
    for (var i = 0, len = localStorage.length; i < len; ++i) {
      keys.push(localStorage.key(i) as string);
    }

    const games: IPackedGame[] = keys.reduce((acc: IPackedGame[], k: string) =>
      k.includes(GamePrefix) ? [...acc, JSON.parse(window.localStorage.getItem(k) as string)] : acc
      , []);

    return games;
  }

  loadGame(gameId: string): void {
    try {
      const packedGame: IPackedGame = JSON.parse(this.getPrefixedGame(gameId) as any);
      if (packedGame) {
        const { player, game, map } = packedGame;

        this.store.dispatch(GameActions.newGame({ game }));
        this.store.dispatch(PlayerActions.newPlayer({ player }));
        this.store.dispatch(MapActions.setMap({ map }));

        this.router.navigate([`/game/${game.id}`]);
      } else {
        // TODO handle me!
        console.error('Unable to load that game!');
      }
    } catch (err) {
      // TODO handle me!
      console.error(err, 'unable to load game');
    }
  }

  private getPrefixedGame(gameId: string): string {
    return `${GamePrefix}:${gameId}`;
  }
}
