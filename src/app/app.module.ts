import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetalleComponent } from './modules/detalle/detalle.component';
import { DetalleModule } from './modules/detalle/detalle.module';       // Autoimport - Línea 18
import { HomeModule } from './modules/home/home.module';                // Autoimport - Línea 19
import { LoginModule } from './modules/login/login.module';             // Autoimport - Línea 20
import { RegistroModule } from './modules/registro/registro.module';    // Autoimport - Línea 21

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DetalleModule,    // Modulo custom importado
    HomeModule,       // Modulo custom importado
    LoginModule,      // Modulo custom importado
    RegistroModule    // Modulo custom importado
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
