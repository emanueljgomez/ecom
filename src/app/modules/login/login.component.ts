import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';  // Importar herramientos de ReactiveFormsModule

@Component({
  selector: 'app-login',
  template: `
  <div>
  {{message}}
  </div>
  `,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() message:any;

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

  login(){
    const inputuser = this.myForm.value.user;
    const inputpassword = this.myForm.value.password;
    console.log("Validando...");
    console.log("Usuario: "+inputuser+" // Contraseña: "+inputpassword);
  }

  ngOnInit(): void {
    
  }

}
