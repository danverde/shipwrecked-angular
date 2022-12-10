import { Component, OnInit } from '@angular/core';
import { IPackedGame } from 'src/app/models/persist.model';
import { PersistService } from 'src/app/services/persist.service';

@Component({
  selector: 'app-load-game',
  templateUrl: './load-game.component.html',
  styleUrls: ['./load-game.component.scss']
})
export class LoadGameComponent implements OnInit {

  savedGames: IPackedGame[] = [];

  constructor(private persistService: PersistService) { }

  ngOnInit(): void {
    this.savedGames = this.persistService.listSavedGames();
  }

  handleLoadGameClick(game: IPackedGame): void {
    this.persistService.loadGame(game);
  }

}
