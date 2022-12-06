import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameMenuComponent } from './components/pages/game-menu/game-menu.component';
import { MainMenuComponent } from './components/pages/main-menu/main-menu.component';
import { NewGameComponent } from './components/pages/new-game/new-game.component';

const routes: Routes = [
  {
    path: 'main', component: MainMenuComponent
  },
  {
    path: 'new-game', component: NewGameComponent
  },
  {
    path: 'game', component: GameMenuComponent
  },
  {
    path: '**', redirectTo: '/main', pathMatch: 'full'
  },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }