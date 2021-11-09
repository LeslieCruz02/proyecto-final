import { Component, OnInit } from '@angular/core';

import {ClientService} from '../../client.service';
//importacion de clases necesarias para manejar formularios reactivos y el routing
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-reg-mascota1',
  templateUrl: './reg-mascota1.component.html',
  styleUrls: ['./reg-mascota1.component.css']
})
export class RegMascota1Component implements OnInit {
  form!: FormGroup;
  load: boolean = true;


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
  async onSubmit(){
    if (this.form.valid) {
      let data ={
        nombre: this.form.value.nombre,
        tipoDeMascota: this.form.value.tipoDeMascota,
        raza: this.form.value.raza,
        edad: this.form.value.edad,        
        responsable: this.form.value.responsable,
        idestado: this.form.value.idestado,
        descripcion: this.form.value.descripcion,
        fotos: this.form.value.fotos,

      }
      this.load = false;
      this.client.postRequestSendForm('http://localhost:10101/addMascotas',data)
      .subscribe(
        (response:any)=>{
          this.load = true;
          console.log(response);
          Swal.fire({
            icon: 'question',
            title: 'Desea continuar con esta publicación',
            showCancelButton: true,
            cancelButtonText: `Cancelar`,
            showDenyButton: false,
            denyButtonText: `No guardar`,
            showConfirmButton: true,
            confirmButtonText: `Aceptar`
          }).then((result) => {
            //Read more about isConfirmed, isDenied below
            if (result.isConfirmed) {
              this.route.navigate(['/galeria']);
            } else if (result.isDenied) {
              Swal.fire('Los cambios no han sido guardados', '', 'info')
            }
          }) 
          
          
        },
        (error: any)=>{
          console.log(error.status);          
        })
    }else{
      console.log("Form error");
    }
  }

}
