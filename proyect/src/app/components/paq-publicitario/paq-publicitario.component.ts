import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-paq-publicitario',
  templateUrl: './paq-publicitario.component.html',
  styleUrls: ['./paq-publicitario.component.css']
})
export class PaqPublicitarioComponent implements OnInit {
  BASE_API: string=environment.BASE_API
  form!: FormGroup;
  tiempo: boolean = false;
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
    });
  }

  async crearPublic(){
    if(this.form.valid){
      
      let data={
        nombreTitular: this.form.value.nombreTitular,
        tarjeta: this.form.value.tarjeta,
        tipodoc: this.form.value.tipodoc,
        mesAño: this.form.value.mesAño,
        documento: this.form.value.documento,
      }
      this.client.getRequestPaquete(`${this.BASE_API}`,data
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
