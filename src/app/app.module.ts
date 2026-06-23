import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeDashComponent } from './shared/components/home-dash/home-dash.component';
import { ProductsDashComponent } from './shared/components/products-dash/products-dash.component';
import { UsersDashComponent } from './shared/components/users-dash/users-dash.component';
import { FairsDashComponent } from './shared/components/fairs-dash/fairs-dash.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { ProductFormComponent } from './shared/components/products-dash/product-form/product-form.component';
import { ProductDetailComponent } from './shared/components/products-dash/product-detail/product-detail.component';
import { GetConfirmComponent } from './shared/components/products-dash/product-detail/get-confirm/get-confirm.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeDashComponent,
    ProductsDashComponent,
    UsersDashComponent,
    FairsDashComponent,
    ProductFormComponent,
    ProductDetailComponent,
    GetConfirmComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
