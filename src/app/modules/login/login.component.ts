import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';  // Importar herramientos de ReactiveFormsModule

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm:FormGroup  // Declarar variable para el formulario con tipo FormGroup

  constructor(
    private fb:FormBuilder  // Inyección de Dependecias -- Declarar variable para FormBuilder
  ) { 
    // Construcción de formulario:
    this.myForm=this.fb.group({
      user: ["",[Validators.required]],
      password: ["",[Validators.required]]
    })
  }

  ngOnInit(): void {
  }

}
