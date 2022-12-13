import { Component, OnInit } from '@angular/core';
import { GameDifficulty } from 'src/app/models/settings.model';
import { GameService } from 'src/app/services/game/game.service';

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
