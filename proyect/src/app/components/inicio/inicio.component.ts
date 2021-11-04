import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';
import {  FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
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
        
        this.client.postRequestSendForm('http://localhost:10101/login',data).subscribe(
        (response:any)=>{
          console.log(response);
          localStorage.setItem('token', response.token)
          console.log(localStorage.getItem('token'));
          this.route.navigate(['home']);
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
