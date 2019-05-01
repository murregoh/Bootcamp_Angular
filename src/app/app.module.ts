import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SummaryComponent } from './components/summary/summary.component';
import { DemoComponent } from './components/demo/demo.component';
import { ChallengeComponent } from './components/challenge/challenge.component';
import { HeaderComponent } from './components/header/header.component';
import { BackButtonComponent } from './components/back-button/back-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SummaryComponent,
    DemoComponent,
    ChallengeComponent,
    HeaderComponent,
    BackButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
