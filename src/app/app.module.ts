import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { ButtonComponent } from './components/common/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MainMenuComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
