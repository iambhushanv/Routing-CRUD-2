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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { ProductFormComponent } from './shared/components/products-dash/product-form/product-form.component';
import { ProductDetailComponent } from './shared/components/products-dash/product-detail/product-detail.component';
import { GetConfirmComponent } from './shared/components/products-dash/product-detail/get-confirm/get-confirm.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { UserFormComponent } from './shared/components/users-dash/user-form/user-form.component';
import { UserDetailComponent } from './shared/components/users-dash/user-detail/user-detail.component';
import { AuthComponent } from './shared/components/auth/auth.component';
import { AuthInterceptorService } from './shared/services/auth-interceptor.service';


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
    UserFormComponent,
    UserDetailComponent,
    AuthComponent,

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
    MatChipsModule,
    MatIconModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptorService,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
