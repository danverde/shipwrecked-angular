import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { MainMenuComponent } from './components/pages/main-menu/main-menu.component';
import { ButtonComponent } from './components/common/button/button.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { DrawerComponent } from './components/common/drawer/drawer.component';
import { HelpDrawerComponent } from './components/help-drawer/help-drawer.component';
import { NewGameComponent } from './components/pages/new-game/new-game.component';
import { HeaderComponent } from './components/common/header/header.component';
import { TextInputComponent } from './components/common/text-input/text-input.component';
import { FormsModule } from '@angular/forms';
import { GameComponent } from './components/pages/game/game.component';
import { PlayerSummaryComponent } from './components/player-summary/player-summary.component';
import { GaugeComponent } from './components/common/gauge/gauge.component';
import { initialStore } from './store/reducers/index.reducer';
import { GameSummaryComponent } from './components/game-summary/game-summary.component';
import { PersistService } from './services/persist.service';
import { LoadGameComponent } from './components/pages/load-game/load-game.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MainMenuComponent,
    ButtonComponent,
    DrawerComponent,
    HelpDrawerComponent,
    NewGameComponent,
    HeaderComponent,
    TextInputComponent,
    GameComponent,
    PlayerSummaryComponent,
    GaugeComponent,
    GameSummaryComponent,
    LoadGameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(initialStore),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
