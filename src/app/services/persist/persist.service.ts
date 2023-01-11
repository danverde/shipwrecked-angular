import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { IPackedGame } from '../../models/persist.model';
import { GameActions } from '../../store/game/game.actions';
import { MapActions } from '../../store/map/map.actions';
import { PlayerActions } from '../../store/player/player.actions';
import { IAppStore } from '../../store/index.reducer';

const GamePrefix = 'sg:';

@Injectable({
  providedIn: 'root'
})
export class PersistService {

  private savedGames: IPackedGame[] = [];
  private savedGamesSubject: BehaviorSubject<IPackedGame[]> = new BehaviorSubject<IPackedGame[]>(this.getGamesFromLocalStorage());

  constructor(
    private store: Store<IAppStore>,
    private router: Router) {
  }

  saveGame(store: IAppStore): void {
    const packedGame: IPackedGame = {
      game: store.game,
      player: store.player,
      map: store.map
    };

    localStorage.setItem(this.getPrefixedGame(packedGame.game.id), JSON.stringify(packedGame));
    this.savedGames = this.getGamesFromLocalStorage();

    this.savedGamesSubject.next(this.savedGames);
  }

  listSavedGames(): Observable<IPackedGame[]> {
    return this.savedGamesSubject.asObservable();
  }

  loadGame(packedGame: IPackedGame): void {
    const { player, game, map } = packedGame;

    this.store.dispatch(GameActions.setGame({ game }));
    this.store.dispatch(PlayerActions.setPlayer({ player }));
    this.store.dispatch(MapActions.setMap({ map }));

    this.router.navigate([`/game/${game.id}`]);
  }

  loadGameById(gameId: string): void {
    try {
      const packedGame: IPackedGame = JSON.parse(localStorage.getItem(this.getPrefixedGame(gameId)) as string);
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

  deleteSavedGame(gameId: string): void {
    localStorage.removeItem(this.getPrefixedGame(gameId));
    this.savedGames = this.getGamesFromLocalStorage();
    this.savedGamesSubject.next(this.savedGames);
  }

  private getGamesFromLocalStorage(): IPackedGame[] {
    let keys: string[] = [];
    for (var i = 0, len = localStorage.length; i < len; ++i) {
      keys.push(localStorage.key(i) as string);
    }

    return keys.reduce((acc: IPackedGame[], k: string) =>
      k.includes(GamePrefix) ? [...acc, JSON.parse(window.localStorage.getItem(k) as string)] : acc
      , []);
  }

  private getPrefixedGame(gameId: string): string {
    return `${GamePrefix}${gameId}`;
  }
}
