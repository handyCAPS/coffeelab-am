import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatListModule
} from '@angular/material';
import { CoffeePageComponent } from './components/coffee-page/coffee-page.component';

@NgModule({
  declarations: [AppComponent, CoffeePageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
