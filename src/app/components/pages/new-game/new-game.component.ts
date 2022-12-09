import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { initialGame } from 'src/app/data/game.data';
import { map } from 'src/app/data/map.data';
import { initialPlayer } from 'src/app/data/player.data';
import { IGame } from 'src/app/models/game.model';
import { IPlayer } from 'src/app/models/player.model';
import { GameDifficulty } from 'src/app/models/settings.model';
import { GameService } from 'src/app/services/game.service';
import { GuidService } from 'src/app/services/guid.service';
import { GameActions } from 'src/app/store/actions/game.actions';
import { MapActions } from 'src/app/store/actions/map.actions';
import { PlayerActions } from 'src/app/store/actions/player.actions';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {

  public name: string = '';

  constructor(
    private gameService: GameService
  ) { }

  ngOnInit(): void {
  }

  handleStartClick(): void {
    this.gameService.startNewGame(this.name, GameDifficulty.Easy);
  }

}
