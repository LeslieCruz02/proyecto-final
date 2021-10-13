import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../client.service';
//importacion de clases necesarias para manejar formularios reactivos y el routing
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
     
      nombre: ['', Validators.required],
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
        nombreO: this.form.value.nombreO,  
        telefono: this.form.value.telefono,
        asunto: this.form.value.asunto,
        mensaje: this.form.value.mensaje
      }
      this.load =false;
      this.client.postRequestSendForm('http://localhost:10101/contactenos', {
    
      }).subscribe(
     
        (response: any) => {
  
          console.log(response);
       
          this.route.navigate(['/galery-ppal']);
      },
      
      (error:any) => {
       
        console.log(error.status);
      });
   
    } else {
      console.log("Form error");
    }
  }
}
