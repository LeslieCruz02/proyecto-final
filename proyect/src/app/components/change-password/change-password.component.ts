import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';
import {  FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  BASE_API: string=environment.BASE_API
  form!: FormGroup;
  load: boolean = true;

  constructor(
    public client: ClientService,
    private fb: FormBuilder,
    private route:  Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      usuario:['', Validators.required],
      correo:['', Validators.email],
      password1:['', Validators.required]
    });
  }
  async onSubmit(){
    if (this.form.valid) {

      let data = {
        usuario: this.form.value.usuario,
        correo: this.form.value.correo,
        password1: this.form.value.password1
      }
       this.load = false;
       this.client.putReqNewPassword(`${this.BASE_API}/changePassword`, data).subscribe(
        (response:any)=>{
          console.log(response);
          
          Swal.fire(
            'Su contraseña ha sido actualizada',
            '',
            'success'
          )
          this.route.navigate(['']);
        },
        (error: any)=>{
          Swal.fire(
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
