import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HeroesComponent, MessagesComponent, DashboardComponent, HeroDetailComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserModule, FormsModule, HttpClientModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
