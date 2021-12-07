import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../client.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Usuarios } from '../../interface/info.interface';

import { ActivatedRoute } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-commercial',
  templateUrl: './add-commercial.component.html',
  styleUrls: ['./add-commercial.component.css']
})
export class AddCommercialComponent implements OnInit {
  BASE_API: string=environment.BASE_API
  form!: FormGroup;
  load: boolean = true;

  usuarios : Usuarios []=[];

  constructor(
    public client: ClientService,
    private fb: FormBuilder,
    private route: Router,
    private router:ActivatedRoute
    ) 
    {
    }
  ngOnInit(): void {

    this.client.getRequestPerfil(`${this.BASE_API}/date`).subscribe(
      (response: any) => {  
        this.usuarios = response.usuarios;
          console.log(this.usuarios);
      },
      (error) => {
        console.log(error.status);
        }
      )
  
    this.form = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      imagenes: [null]
    });
  }
      upload(event:any) {
        const file = (event.target as HTMLInputElement).files[0];
        this.form.patchValue({
          imagenes: file
        });
        this.form.get('imagenes')?.updateValueAndValidity()
      }
  async onSubmit(){
    this.router.queryParams.subscribe(params => {
      const IDUSUARIO= parseInt(params['idusuario']);
  
      let idusuario = IDUSUARIO
  
      console.log(idusuario);
      
        if (this.form.valid) {
          var formData: any = new FormData();
          formData.append("idusuario", idusuario);
          formData.append("titulo", this.form.get('titulo').value);
          formData.append("descripcion", this.form.get('descripcion').value);
          formData.append("imagenes", this.form.get('imagenes').value);

          this.load = false;
          this.client.postRequestSendForm(`${this.BASE_API}/addPublicidad`,formData
            ).subscribe(
            (response:any)=>{
              console.log(response);
              Swal.fire(
                'Su publicación ha sido exitosa!',
                '',
                'success'
              )
              this.route.navigate(['/home']);
            },
            (error: any)=>{
              Swal.fire(
                'Su publicación no ha sido exitosa!',
                'Intentalo nuevamente!',
                'error'
              )
              console.log(error.status);          
            })
        }else{
          console.log("Form error");
        }
      });
  } 


 reqPublicidad(){
    this.client.getReqPublicidad(`${this.BASE_API}/publicidad`).subscribe(
    (response: any) => {
        console.log(response);
    },
    (error) => {
      console.log(error.status);
      }
    )
  } 
}