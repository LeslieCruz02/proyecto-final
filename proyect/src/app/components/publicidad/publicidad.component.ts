import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-publicidad',
  templateUrl: './publicidad.component.html',
  styleUrls: ['./publicidad.component.css']
})
export class PublicidadComponent implements OnInit {
  BASE_API: string=environment.BASE_API
  form!: FormGroup;

  constructor(
    public client: ClientService,
    private fb: FormBuilder,
    private route:  Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombreTitular: ['', Validators.required],
      tarjeta: ['', Validators.required],
      mesAño: ['', Validators.required],
      documento: ['', Validators.required],
      tipodoc: ['', Validators.required],
      tiempo: ['', Validators.required],
    });
  }
  async publicidad(){
    if(this.form.valid){
      let data={
        nombreTitular: this.form.value.nombreTitular,
        tarjeta: this.form.value.tarjeta,
        tipodoc: this.form.value.tipodoc,
        mesAño: this.form.value.mesAño,
        documento: this.form.value.documento,
        tiempo: this.form.value.tiempo
      }
      console.log(data.mesAño);
      
      this.client.postRequestPublicidad(`${this.BASE_API}/home`,data
        ).subscribe(
        (response:any)=>{
          
          localStorage.setItem('Nombre',data.nombreTitular);
          localStorage.setItem('Tarjeta',data.tarjeta);
          localStorage.setItem('AñoMes',data.mesAño);
          localStorage.setItem('TipoDocumento',data.tipodoc);
          localStorage.setItem('Documento',data.documento);
          localStorage.setItem('Tiempo',data.tiempo);
          
          console.log(response);
          Swal.fire(
            'Sus datos han sido registrados!',
            '',
            'success'
          )
          this.route.navigate(['/addPublicidad']);
        },
        (error: any)=>{
          console.log(error.status);
        })
    }else{
      console.log("Form error");
    }
  }
}
