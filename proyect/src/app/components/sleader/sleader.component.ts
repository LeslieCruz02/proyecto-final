import { Component, OnInit } from '@angular/core';

import {ClientService} from '../../client.service';
//importacion de clases necesarias para manejar formularios reactivos y el routing
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Mascota } from '../../interface/mascota.interface';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-sleader',
  templateUrl: './sleader.component.html',
  styleUrls: ['./sleader.component.css']
})
export class SleaderComponent implements OnInit {
  BASE_API: string=environment.BASE_API
  form!: FormGroup;
  load: boolean = true;
  title = "mascota"
  mascota : Mascota [] = [];

  constructor(
    public client: ClientService,
    private fb: FormBuilder,
    private router: Router,
    private route:ActivatedRoute
    ) 
    {
    }
  ngOnInit(){

    this.route.queryParams.subscribe(params => {
      const IDMASCOTA= parseInt(params['idmascota']);

      let data ={
        idmascota: IDMASCOTA  
      }
      console.log(data);

     this.client.postRequestMascota(`${this.BASE_API}/mascota`, data).subscribe(
      (res:any)=>{
        this.mascota = res.mascota;
        console.log(this.mascota);
      },
      (error:any)=>{
        console.log(error.status);
      }
    );
    });

    this.form = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', Validators.email],
      tipodoc: ['', Validators.required],
      documento: ['', Validators.required],
      observaciones: ['', Validators.required],
     
    });

  }
 async onSubmit(){
    if (this.form.valid) {
      let data = {
        nombre: this.form.value.nombre,
        email: this.form.value.email,
        tipodoc: this.form.value.tipodoc,
        documento: this.form.value.documento,        
        observaciones: this.form.value.observaciones,
      }
      this.load = false;
      this.client.postRequestSendForm(`${this.BASE_API}/adopciones`,data
      ).subscribe(
        (response:any)=>{
          this.load = true;
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Tú solicitud de adopción fue enviada correctamente!',
            showConfirmButton: false,
            timer: 4000
          })
          console.log(response);
         // this.route.navigate(['/galeria']);
        },
        (error: any)=>{
          console.log(error.status); 
          
          Swal.fire({
            icon: 'info',
            title: 'Error al enviar tú solicitud',
            text: 'Por favor registrate o inicia sesión',
            footer: '<a href="http://localhost:4200/registro">Más informacion aquí</a>'
          })
        })
    }else{
      console.log("Form error");
      Swal.fire({
        icon: 'info',
        title: 'Error al enviar tú solicitud',
        text: 'Por favor verifica los datos ingresados',
        footer: '<a href="http://localhost:4200/registro">Más informacion aquí</a>'
      })
    }
  }

  reqAdoptar(){
    this.client.getReqAdoptar(`${this.BASE_API}/galeria`).subscribe(
    (response: any) => {
        console.log(response);

  
    },
    (error) => {
      console.log(error.status);
      }
    )
  }


}
