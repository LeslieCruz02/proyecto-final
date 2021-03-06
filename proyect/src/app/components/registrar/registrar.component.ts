import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';
import {  FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  BASE_API: string=environment.BASE_API
  form!: FormGroup;
  load: boolean = true;

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
  async onSubmit(){
    if (this.form.valid) {

      let data = {
        usuario: this.form.value.usuario,
        nombres: this.form.value.nombres,
        apellidos: this.form.value.apellidos,
        correo: this.form.value.correo,
        telefono: this.form.value.telefono,
        password: this.form.value.password
      }
       this.load = false;
       this.client.postRequestSendForm(`${this.BASE_API}/usuarios`, data).subscribe(
        (response:any)=>{
          console.log(response);
          Swal.fire(
            'Su registro ha sido exitoso!',
            '',
            'success'
          )
          this.route.navigate(['']);
        },
        (error: any)=>{
          Swal.fire(
            'Su registro no ha sido exitoso!',
            'Intentalo nuevamente!',
            'error'
          )
          console.log(error.status);          
        })
    }else{
      console.log("Form error");
    }
  }
}
