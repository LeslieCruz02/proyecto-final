import { Component, OnInit } from '@angular/core';

import {ClientService} from '../../client.service';
//importacion de clases necesarias para manejar formularios reactivos y el routing
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sleader',
  templateUrl: './sleader.component.html',
  styleUrls: ['./sleader.component.css']
})
export class SleaderComponent implements OnInit {
  form!: FormGroup;



  constructor(
    public client: ClientService,
    private fb: FormBuilder,
    private route: Router
    ) 
    {
    }
  ngOnInit(): void {


    this.form = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', Validators.email],
      tipodoc: ['', Validators.required],
      documento: ['', Validators.required],
      observaciones: ['', Validators.required],
     
    });
  }
  onSubmit(){
    if (this.form.valid) {
      this.client.postRequestSendForm('http://localhost:10101/adopciones',{
     
        nombre: this.form.value.nombre,
        email: this.form.value.email,
        tipodoc: this.form.value.tipodoc,
        documento: this.form.value.documento,        
        observaciones: this.form.value.observaciones,
       
      }).subscribe(
        (response:any)=>{
          console.log(response);
          this.route.navigate(['/galeria']);
        },
        (error: any)=>{
          console.log(error.status);          
        })
    }else{
      console.log("Form error");
    }
  }

  reqAdoptar(){
    this.client.getReqAdoptar("http://localhost:10101/galeria").subscribe(
    (response: any) => {
        console.log(response);

  
    },
    (error) => {
      console.log(error.status);
      }
    )
  }


}
