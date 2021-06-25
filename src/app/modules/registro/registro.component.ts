import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';  // Importar herramientos de ReactiveFormsModule

@Component({
  selector: 'app-registro',
  template: `
  <app-login [message]="message"></app-login>
  `,
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  

  myForm:FormGroup  // Declarar variable para el formulario con tipo FormGroup

  constructor(
    private fb:FormBuilder  // Inyección de Dependecias -- Declarar variable para FormBuilder
  ) {
        // Construcción de formulario:
        this.myForm=this.fb.group({
        user: ["",[Validators.required]],
        password: ["",[Validators.required,Validators.minLength(6),Validators.maxLength(10)]],
        name: ["",[Validators.required]],
        lastname: ["",[Validators.required]],
        phone: [""],
      })
  }

  message = "Nombre"

  registro(){
    // console.log(this.myForm.value);
    let user = this.myForm.value.user;
    let password = this.myForm.value.password;
    console.log("Usuario: "+user+" -- Contraseña: "+password)
  }

  ngOnInit(): void {
    
  }

}