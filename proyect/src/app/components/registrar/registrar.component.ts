import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';
import {  FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  form!: FormGroup;

  constructor(
    public client: ClientService,
    private fb: FormBuilder,
    private route:  Router
    ) 
  {
 
  }
  ngOnInit(): void {
   this.form = this.fb.group({
      usuario:['', Validators.required],
      nombres:['', Validators.required],
      apellidos:['', Validators.required],
      correo:['', Validators.email],
      telefono:['', Validators.required],
      password:['', Validators.required]
    });
  }
  onSubmit(){
    if (this.form.valid) {
       this.client.postRequestSendForm('http://localhost:10101/usuarios',{
        usuario: this.form.value.usuario,
        nombres: this.form.value.nombres,
        apellidos: this.form.value.apellidos,
        correo: this.form.value.correo,
        telefono: this.form.value.telefono,
        password: this.form.value.password
      }).subscribe(
        (response:any)=>{
          console.log(response);
          this.route.navigate(['']);
        },
        (error: any)=>{
          console.log(error.status);          
        })
    }else{
      console.log("Form error");
    }
  }
}
