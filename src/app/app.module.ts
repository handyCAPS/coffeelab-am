import { environment } from './../environments/environment';
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
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { CoffeePageComponent } from './components/coffee-page/coffee-page.component';
import { CoffeeService } from './services/coffee.service';
import { CoffeeDetailComponent } from './coffee-detail/coffee-detail.component';
import { CoffeeFormComponent } from './components/coffee-form/coffee-form.component';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { PotFormComponent } from './components/pot-form/pot-form.component';


@NgModule({
  declarations: [AppComponent, CoffeePageComponent, CoffeeDetailComponent, CoffeeFormComponent, PotFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    CoffeeService
  ],
  bootstrap: [AppComponent],
  entryComponents: [CoffeeFormComponent]
})
export class AppModule {}
