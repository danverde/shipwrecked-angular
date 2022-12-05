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
import { gamesReducer } from './store/reducers/games.reducer';
import { booksReducer } from './store/reducers/books.reducer';
import { NewGameComponent } from './components/pages/new-game/new-game.component';
import { HeaderComponent } from './components/common/header/header.component';
import { TextInputComponent } from './components/common/text-input/text-input.component';

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
    TextInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ books: booksReducer, games: gamesReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
