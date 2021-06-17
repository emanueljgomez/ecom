import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[HomeComponent]   // Línea creada manualmente - Permite que cualquier módulo consuma los componentes de este módulo
})
export class HomeModule { }
