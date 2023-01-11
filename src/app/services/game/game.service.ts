import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { initialGame } from 'src/app/data/game.data';
import { initialMap } from 'src/app/data/map.data';
import { initialPlayer } from 'src/app/data/player.data';
import { allSettings } from 'src/app/data/settings.data';
import { GameStatus, IGame } from 'src/app/models/game.model';
import { IPlayer } from 'src/app/models/player.model';
import { GameDifficulty } from 'src/app/models/settings.model';
import { GameActions } from 'src/app/store/game/game.actions';
import { MapActions } from 'src/app/store/map/map.actions';
import { PlayerActions } from 'src/app/store/player/player.actions';
import { IAppStore } from 'src/app/store/index.reducer';
import { GuidService } from '../guid/guid.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  appStore: IAppStore | undefined;

  constructor(
    private store: Store<IAppStore>,
    private router: Router,
    private guid: GuidService,
  ) {
    this.store.subscribe((x: IAppStore) => this.appStore = x);
  }

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
    if (!this.appStore) return;

    for (let i = 0; i < days && this.appStore.game.status === GameStatus.playing; i++) {
      console.log('started waiting loop');
      this.advanceDay(true);
    }
  }

  // TODO Can I leverage effects to clean this up?
  private advanceDay(waiting: boolean = false): void {
    if (!this.appStore) return;

    let { game, player } = this.appStore;
    const settings = allSettings[game.difficulty];

    // TODO this feels SO WRONG
    game = JSON.parse(JSON.stringify(game));
    player = JSON.parse(JSON.stringify(player));

    // decrease stamina
    player.stamina -= settings.playerSettings.staminaPerDay;

    // kill character (if stamina is 0)
    // TODO stamina never actually hits 0 this way. Maybe use an effect?
    if (player.stamina <= 0) {
      alert('You died');
      game.status = GameStatus.lost;
      this.store.dispatch(GameActions.setGame({ game }));
      return;
    }

    // update day
    game.day++;

    // check for survival (if waiting)
    if (waiting && Math.floor(Math.random() * settings.gameSettings.waitSuccessRate) === 1) {
      alert('You won!');
      game.status = GameStatus.won;
      this.store.dispatch(GameActions.setGame({ game }));
    }

    // add exp (level up if needed)
    player.experience += settings.playerSettings.expPerDay;
    if (player.experience >= 100) {
      player.level++;
      player.experience -= 100;
      player.maxHealth += settings.playerSettings.healthGrowth;
      player.baseAttack += settings.playerSettings.attackGrowth;
      player.baseDefense += settings.playerSettings.defenseGrowth;
    }

    // dispatch actions to update game & player
    this.store.dispatch(GameActions.setGame({ game }));
    this.store.dispatch(PlayerActions.setPlayer({ player }));
  }
}
