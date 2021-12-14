import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../client.service';
//importacion de clases necesarias para manejar formularios reactivos y el routing
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  BASE_API: string=environment.BASE_API
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
      apellido: ['', Validators.required],
      asunto:['', Validators.required],
      mensaje:['', Validators.required]

    });
  }
  async onSubmit() {

    if (this.form.valid) {
      let data ={
        nombreC: this.form.value.nombreC,
        correo: this.form.value.correo,
        apellido: this.form.value.apellido,  
        telefono: this.form.value.telefono,
        asunto: this.form.value.asunto,
        mensaje: this.form.value.mensaje
      }
      this.load =false;
      this.client.postRequestSendForm(`${this.BASE_API}/contactenos`, data)
    
      .subscribe(
       
        (response: any) => {
          this.load =true;
          console.log(response);
          Swal.fire(
            'Gracias por contactarnos!',
            'Te respoderemos los más pronto posible',
            'success'

          )
          this.route.navigate(['/galery-ppal']);
      },
      
      (error:any) => {
       
        console.log(error.status);
        Swal.fire(
          'Ups lo sentimos!',
          'No hemos recibido tú mensaje',
          'error'
        )
        this.route.navigate(['/contactenos']);
      });
   
    } else {
      console.log("Form error");
      Swal.fire(
        'Ups lo sentimos!',
        'No hemos recibido tú mensaje',
        'error'
      )

      this.route.navigate(['/contactenos']);
    }
  }
}
