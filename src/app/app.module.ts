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
  MatListModule,
  MatDialogModule
} from '@angular/material';
import { CoffeePageComponent } from './components/coffee-page/coffee-page.component';
import { CoffeeService } from './services/coffee.service';
import { CoffeeDetailComponent } from './coffee-detail/coffee-detail.component';
import { CoffeeFormComponent } from './components/coffee-form/coffee-form.component';

@NgModule({
  declarations: [AppComponent, CoffeePageComponent, CoffeeDetailComponent, CoffeeFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatDialogModule
  ],
  providers: [
    CoffeeService
  ],
  bootstrap: [AppComponent],
  entryComponents: [CoffeeFormComponent]
})
export class AppModule {}
