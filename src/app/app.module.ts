import { PotService } from './services/pot.service';
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
  MatInputModule,
  MatSelectModule
} from '@angular/material';
import { CoffeePageComponent } from './components/coffee-page/coffee-page.component';
import { CoffeeService } from './services/coffee.service';
import { CoffeeDetailComponent } from './components/coffee-detail/coffee-detail.component';
import { CoffeeFormComponent } from './components/coffee-form/coffee-form.component';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { PotFormComponent } from './components/pot-form/pot-form.component';
import { CoffeeItemComponent } from './components/coffee-item/coffee-item.component';
import { PotItemComponent } from './components/pot-item/pot-item.component';
import { PotFormDialogComponent } from './components/pot-form-dialog/pot-form-dialog.component';
import { RatingComponent } from './components/rating/rating.component';
import { PotListComponent } from './components/pot-list/pot-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CoffeePageComponent,
    CoffeeDetailComponent,
    CoffeeFormComponent,
    PotFormComponent,
    CoffeeItemComponent,
    PotItemComponent,
    PotFormDialogComponent,
    RatingComponent,
    PotListComponent
  ],
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
    MatInputModule,
    MatSelectModule
  ],
  providers: [CoffeeService, PotService],
  bootstrap: [AppComponent],
  entryComponents: [CoffeeFormComponent, PotFormDialogComponent]
})
export class AppModule {}
