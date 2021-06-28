import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importar Modulos para formularios

import { MatCardModule } from '@angular/material/card'; // Importar Componente de Angular Material
import { MatButtonModule } from '@angular/material/button'; // Importar Componente de Angular Material
import { MatFormFieldModule } from '@angular/material/form-field'; // Importar Componente de Angular Material
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [RegistroComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, // Declarar importación de Modulos para formularios
    MatCardModule, // Declarar importación de Componente de Angular Material
    MatButtonModule, // Declarar importación de Componente de Angular Material
    MatFormFieldModule, // Declarar importación de Componente de Angular Material
    MatInputModule,
  ],
  exports: [RegistroComponent], // Línea creada manualmente - Permite que cualquier módulo consuma los componentes de este módulo
})
export class RegistroModule {}
