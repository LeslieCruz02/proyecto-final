import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Usuarios } from '../../interface/info.interface';

import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-paq-publicitario',
  templateUrl: './paq-publicitario.component.html',
  styleUrls: ['./paq-publicitario.component.css']
})
export class PaqPublicitarioComponent implements OnInit {
  BASE_API: string=environment.BASE_API
  form!: FormGroup;
  precio1: number = 30000;
  precio2: number = 90000;
  precio3: number = 360000;
  paq:any;

  usuarios : Usuarios []=[];

  constructor(
    public client: ClientService,
    private fb: FormBuilder,
    private route:  Router,
    private router:ActivatedRoute
  ) { }
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
      nombreTitular: ['', Validators.required],
      tarjeta: ['', Validators.required],
      mesAño: ['', Validators.required],
      documento: ['', Validators.required],
      tipodoc: ['', Validators.required],
    });
  }
  paquete1(){
    this.paq=1;
  };
  paquete2(){
    this.paq=2;
  };
  paquete3(){
    this.paq=3;
  };
  async paquete(){
    this.router.queryParams.subscribe(params => {
      const IDUSUARIO= parseInt(params['idusuario']);
  
      let id = IDUSUARIO
  
      console.log(id);
    if(this.form.valid){
      
      let data={
        nombreTitular: this.form.value.nombreTitular,
        tarjeta: this.form.value.tarjeta,
        tipodoc: this.form.value.tipodoc,
        mesAño: this.form.value.mesAño,
        documento: this.form.value.documento,
      }
      this.client.postRequestPaquete(`${this.BASE_API}/paqPublicidad`,data
        ).subscribe(
        (response:any)=>{
          console.log('funciona');
          
          // localStorage.setItem('Nombre',data.nombreTitular);
          // localStorage.setItem('Tarjeta',data.tarjeta);
          // localStorage.setItem('AñoMes',data.mesAño);
          // localStorage.setItem('TipoDocumento',data.tipodoc);
          // localStorage.setItem('Documento',data.documento);
          
          console.log(response);
          Swal.fire(
            'Sus datos han sido registrados!',
            '',
            'success'
          )
            
        
          this.route.navigate([`/addPublicidad`], {queryParams: {idusuario: id}});
        },
        (error: any)=>{
          console.log(error.status);
        })
    }else{
      console.log("Form error");
    }
  });
  }
}
