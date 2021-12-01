import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ClientService} from '../../client.service';

import { FormsModule} from '@angular/forms' ;
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Usuarios } from 'src/app/interface/info.interface';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-reg-mascota',
  templateUrl: './reg-mascota.component.html',
  styleUrls: ['./reg-mascota.component.css']
})
export class RegMascotaComponent  implements OnInit{
  BASE_API: string=environment.BASE_API
  title = 'FormulariosHttp';
  form!: FormGroup;
  load: boolean = true;
  usuarios: Usuarios[] =[]
  estado1: number = 1
  constructor(
    public client: ClientService,
    private fb: FormBuilder){

  }

  ngOnInit(): void {
   
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      tipoDeMascota: ['', Validators.required],
      raza: ['', Validators.required],
      edad: ['', Validators.required],
      idestado: ['', Validators.required],
      descripcion: ['', Validators.required],
      fotos: [null]
    });
  }

  upload(event:any) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      fotos: file
    });
    this.form.get('fotos')?.updateValueAndValidity()
  }

 onSubmit(){
    if (this.form.valid) {
      var formData: any = new FormData();
      formData.append("nombre", this.form.get('nombre').value);
      formData.append("tipoDeMascota", this.form.get('tipoDeMascota').value);
      formData.append("raza", this.form.get('raza').value);
      formData.append("edad", this.form.get('edad').value);
      formData.append("idestado", this.form.get('idestado').value);
      formData.append("descripcion", this.form.get('descripcion').value);
      formData.append("fotos", this.form.get('fotos').value);

      this.load = false;
     
      this.client.postRequestSendForm('http://localhost:10101/upload', formData).subscribe(
        (response: any) => {
        
      },
      (error) => {
   
        console.log(error.status);
      })
 
    } else {
      console.log("Form error");
    }
  }

}

