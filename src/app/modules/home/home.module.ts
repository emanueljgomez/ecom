import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { MatCardModule } from '@angular/material/card'; // Importar Componente de Angular Material
import { MatButtonModule } from '@angular/material/button'; // Importar Componente de Angular Material
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatCardModule, // Declarar importación de Componente de Angular Material
    MatButtonModule, // Declarar importación de Componente de Angular Material
    RouterModule
    
  ],
  exports:[HomeComponent]   // Línea creada manualmente - Permite que cualquier módulo consuma los componentes de este módulo
})
export class HomeModule { }
