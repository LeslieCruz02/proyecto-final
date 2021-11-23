import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';
import {  FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  BASE_API: string=environment.BASE_API
  inactiva:any;
  formInicio!:FormGroup;
  load: boolean = true;
  constructor(
    public client: ClientService,
    private fb: FormBuilder,
    private route:  Router
  ) { }

  ngOnInit(): void {

    this.formInicio = this.fb.group({
      usuario:['', Validators.required],
      password:['', Validators.required]
    });
  }

  async onSubmitInicio(){
    if (this.formInicio.valid) {
      
        
        let data = {
        usuario: this.formInicio.value.usuario,
        password: this.formInicio.value.password
        }
        
        this.client.postReqSendForm(`${this.BASE_API}/loginAdmin`,data).subscribe(
        (response:any)=>{
          console.log(response);
          localStorage.setItem('token', response.token)
          console.log(localStorage.getItem('token'));
          this.route.navigate(['panelAdmin']);
        },
        (error: any)=>{
          this.inactiva="*Usuario y contraseña incorrecta*"
          console.log(error.status);      
        })
    }else{
      console.log("Form error");
    }
  }

}
