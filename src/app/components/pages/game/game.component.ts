import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // TODO load game.
    // Shouldn't load child components until the game is in redux!
  }

  // TODO should have a thingy to clear the redux store when quitting the game

}
