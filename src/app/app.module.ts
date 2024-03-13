import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AircraftComponent } from './components/aircraft/aircraft.component';
import { AircraftsNavbarComponent } from './components/aircraft/aircrafts-navbar/aircrafts-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AircraftComponent,
    AircraftsNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
