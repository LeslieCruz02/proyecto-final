import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../client.service';
//importacion de clases necesarias para manejar formularios reactivos y el routing
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  form!: FormGroup;
  load: boolean = true;


  //inyeccion de dependencias
  constructor(
          public client: ClientService,
          private fb: FormBuilder,
          private route: Router
          ) 
    { 
    }

  ngOnInit(): void {

    this.form = this.fb.group({
     
      nombreC: ['', Validators.required],
      correo: ['', Validators.email],
      telefono: ['', Validators.required],
      nombreO: ['', Validators.required],
      asunto:['', Validators.required],
      mensaje:['', Validators.required]

    });
  }
  async onSubmit() {

    if (this.form.valid) {
      let data ={
        nombreC: this.form.value.nombreC,
        correo: this.form.value.correo,
        nombreO: this.form.value.nombreO,  
        telefono: this.form.value.telefono,
        asunto: this.form.value.asunto,
        mensaje: this.form.value.mensaje
      }
      this.load =false;
      this.client.postRequestSendForm('http://localhost:10101/contactenos', data)
    
      .subscribe(
     
        (response: any) => {
  
          console.log(response);
          Swal.fire(
            'Gracias por contactarnos!',
            'Te respoderemos los más pronto posible',
            'success'

          )
      },
      
      (error:any) => {
       
        console.log(error.status);
        Swal.fire(
          'Ups lo sentimos!',
          'No hemos recibido tú mensaje',
          'error'
        )
      });
   
    } else {
      console.log("Form error");
      Swal.fire(
        'Ups lo sentimos!',
        'No hemos recibido tú mensaje',
        'error'
      )
    }
  }
}
