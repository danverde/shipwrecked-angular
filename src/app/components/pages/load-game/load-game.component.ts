import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IPackedGame } from 'src/app/models/persist.model';
import { PersistService } from 'src/app/services/persist.service';

@Component({
  selector: 'app-load-game',
  templateUrl: './load-game.component.html',
  styleUrls: ['./load-game.component.scss']
})
export class LoadGameComponent implements OnInit, OnDestroy {

  savedGames: IPackedGame[] = [];
  private savedGamesSubscription: Subscription | undefined;

  constructor(private persistService: PersistService) { }

  ngOnInit(): void {
    this.savedGamesSubscription = this.persistService.listSavedGames().subscribe(x => this.savedGames = x);
  }

  ngOnDestroy(): void {
    this.savedGamesSubscription?.unsubscribe();
  }

  handleLoadGameClick(game: IPackedGame): void {
    this.persistService.loadGame(game);
  }

  handleDeleteGameClick(gameId: string): void {
    this.persistService.deleteSavedGame(gameId);
  }

}
