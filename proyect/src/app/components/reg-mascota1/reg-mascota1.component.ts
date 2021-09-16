import { Component, OnInit } from '@angular/core';

import {ClientService} from '../../client.service';
//importacion de clases necesarias para manejar formularios reactivos y el routing
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reg-mascota1',
  templateUrl: './reg-mascota1.component.html',
  styleUrls: ['./reg-mascota1.component.css']
})
export class RegMascota1Component implements OnInit {
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
      tipoDeMascota: ['', Validators.required],
      raza: ['', Validators.required],
      edad: ['', Validators.required],
      responsable: ['', Validators.required],
      idestado: ['', Validators.required],
      descripcion: ['', Validators.required],
      fotos: ['', Validators.required]
    });
  }
  onSubmit(){
    if (this.form.valid) {
      this.client.postRequestSendForm('http://localhost:10101/addMascota',{
     
        nombre: this.form.value.nombre,
        tipoDeMascota: this.form.value.tipoDeMascota,
        raza: this.form.value.raza,
        edad: this.form.value.edad,        
        responsable: this.form.value.responsable,
        idestado: this.form.value.idestado,
        descripcion: this.form.value.descripcion,
        fotos: this.form.value.fotos,

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

}
