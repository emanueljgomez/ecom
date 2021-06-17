import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleComponent } from './detalle.component';



@NgModule({
  declarations: [
    DetalleComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[DetalleComponent]   // Línea creada manualmente - Permite que cualquier módulo consuma los componentes de este módulo
})
export class DetalleModule { }
