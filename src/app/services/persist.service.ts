import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { initialGame } from '../data/game.data';
import { initialMap } from '../data/map.data';
import { initialPlayer } from '../data/player.data';
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
    // TODO implement this for real!!
    console.warn('SAVE GAME ISN\'T USING REAL DATA!!!');

    const g: IPackedGame = {
      game: initialGame,
      player: initialPlayer,
      map: initialMap
    };

    localStorage.setItem('[Shipwreck Game]:1', JSON.stringify(g));
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

  loadGame(packedGame: IPackedGame): void {
    const { player, game, map } = packedGame;

    this.store.dispatch(GameActions.setGame({ game }));
    this.store.dispatch(PlayerActions.setPlayer({ player }));
    this.store.dispatch(MapActions.setMap({ map }));

    console.log(`/game/${game.id}`);
    debugger;
    this.router.navigate([`/game/${game.id}`]);
  }

  loadGameById(gameId: string): void {
    try {
      const packedGame: IPackedGame = JSON.parse(this.getPrefixedGame(gameId) as any);
      if (packedGame) {
        this.loadGame(packedGame);
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
