import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[LoginComponent]   // Línea creada manualmente - Permite que cualquier módulo consuma los componentes de este módulo
})
export class LoginModule { }
