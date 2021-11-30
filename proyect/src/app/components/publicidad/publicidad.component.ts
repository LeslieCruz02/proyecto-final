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
  }

  async publicidad(){
      this.client.getRequestPublicidad(`${this.BASE_API}/home`
        ).subscribe(
        (response:any)=>{
          console.log(response);
          // Swal.fire(
          //   'Sus datos han sido registrados!',
          //   '',
          //   'success'
          // )
          this.route.navigate(['/paqPublicidad']);
        },
        (error: any)=>{
          console.log(error.status);
        })
    // }else{
    //   console.log("Form error");
    // }
  }
}
