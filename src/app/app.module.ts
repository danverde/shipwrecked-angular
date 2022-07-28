import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { MainMenuComponent } from './components/pages/main-menu/main-menu.component';
import { ButtonComponent } from './components/common/button/button.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { DrawerComponent } from './components/common/drawer/drawer.component';
import { HelpDrawerComponent } from './components/help-drawer/help-drawer.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MainMenuComponent,
    ButtonComponent,
    DrawerComponent,
    HelpDrawerComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }