import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms' ;

import {ClientService} from '../../client.service';
//importacion de clases necesarias para manejar formularios reactivos y el routing
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Usuarios } from 'src/app/interface/info.interface';
import { ActivatedRoute } from '@angular/router';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-reg-mascota1',
  templateUrl: './reg-mascota1.component.html',
  styleUrls: ['./reg-mascota1.component.css']
})
export class RegMascota1Component implements OnInit {
  BASE_API: string=environment.BASE_API
  form!: FormGroup;
  load: boolean = true;
  usuarios: Usuarios[] =[]
  estado1: number = 1
  estado2: number = 2
  constructor(
    public client: ClientService,
    private fb: FormBuilder,
    private route: Router,
    private router:ActivatedRoute
    ){
      

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
  this.router.queryParams.subscribe(params => {
    const IDUSUARIO= parseInt(params['idusuario']);

    let responsable = IDUSUARIO

    console.log(responsable);

    if (this.form.valid) {
      var formData: any = new FormData();
      formData.append("nombre", this.form.get('nombre').value);
      formData.append("tipoDeMascota", this.form.get('tipoDeMascota').value);
      formData.append("raza", this.form.get('raza').value);
      formData.append("edad", this.form.get('edad').value);
      formData.append("idestado", this.form.get('idestado').value);
      formData.append("descripcion", this.form.get('descripcion').value);
      formData.append("fotos", this.form.get('fotos').value);
      formData.append("responsable", responsable);

      this.load = false;
     
      this.client.postRequestSendForm(`${this.BASE_API}/addMascotas`, formData).subscribe(
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
              this.route.navigate(['/listaAdopcion']);
            } else if (result.isDenied) {
              Swal.fire('Los cambios no han sido guardados', '', 'info')
            }
          }) 
        
      },
      (error) => {
   
        console.log(error.status);
      })
 
    } else {
      console.log("Form error");
    }
  });
  }
}


/*

  constructor(
    public client: ClientService,
    private fb: FormBuilder,
    private route: Router,
    private router:ActivatedRoute

  
    ) 
    {
    }
   

  ngOnInit(){

   
   

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
      nombre: ['', Validators.required],
      tipoDeMascota: ['', Validators.required],
      raza: ['', Validators.required],
      edad: ['', Validators.required],
      idestado: ['', Validators.required],
      descripcion: ['', Validators.required],
      fotos: ['', Validators.required]
    });
  }

  async onSubmit(){
    this.router.queryParams.subscribe(params => {
      const IDUSUARIO= parseInt(params['idusuario']);

      let responsable = IDUSUARIO

      console.log(responsable);

    if (this.form.valid) {
      let data ={
        nombre: this.form.value.nombre,
        tipoDeMascota: this.form.value.tipoDeMascota,
        raza: this.form.value.raza,
        edad: this.form.value.edad,  
        responsable:responsable,      
        idestado: this.form.value.idestado,
        descripcion: this.form.value.descripcion,
        fotos: this.form.value.fotos,

      }
      
      this.load = false;
     
      this.client.postRequestSendForm(`${this.BASE_API}/addMascotas`, data)
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
              this.route.navigate(['/listaAdopcion']);
            } else if (result.isDenied) {
              Swal.fire('Los cambios no han sido guardados', '', 'info')
            }
          }) 
        
          
        },
        (error: any)=>{
          console.log(error.status);  
        });      
       
    }else{
      console.log("Form error");
    }
  });
  }

}
*/