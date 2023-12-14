import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HeaderComponent } from './layout/header/header.component';
import { BodyComponent } from './body/body.component';
import { LayoutComponent } from './layout/layout.component';
import { RegisterComponent } from './pages/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ValidationRequestRegisterComponent } from './pages/validation-request-register/validation-request-register.component';
import { LoginComponent } from './auth/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    BodyComponent,
    LayoutComponent,
    RegisterComponent,
    ValidationRequestRegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
