import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro.component';



@NgModule({
  declarations: [
    RegistroComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[RegistroComponent]   // Línea creada manualmente - Permite que cualquier módulo consuma los componentes de este módulo
})
export class RegistroModule { }
