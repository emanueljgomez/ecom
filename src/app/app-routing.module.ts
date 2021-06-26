import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './modules/detalle/detalle.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { RegistroComponent } from './modules/registro/registro.component';

const routes: Routes = [  // Definir rutas de la aplicación
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:RegistroComponent},
  {path:"detalle/:id",component:DetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
