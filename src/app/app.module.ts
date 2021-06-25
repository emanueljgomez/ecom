import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';     // Material para NavBar

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetalleModule } from './modules/detalle/detalle.module';       // Autoimport - Línea 26
import { HomeModule } from './modules/home/home.module';                // Autoimport - Línea 27
import { LoginModule } from './modules/login/login.module';             // Autoimport - Línea 28
import { RegistroModule } from './modules/registro/registro.module';    // Autoimport - Línea 29
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    AppRoutingModule,
    DetalleModule,    // Modulo custom importado
    HomeModule,       // Modulo custom importado
    LoginModule,      // Modulo custom importado
    RegistroModule,   // Modulo custom importado
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
