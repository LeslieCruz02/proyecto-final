import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../client.service';
//importacion de clases necesarias para manejar formularios reactivos y el routing
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-verification-email',
  templateUrl: './verification-email.component.html',
  styleUrls: ['./verification-email.component.css']
})
export class VerificationEmailComponent implements OnInit {
  BASE_API: string=environment.BASE_API
  correo!: string;
  form!: FormGroup;
  load: boolean = true;
  load2: boolean = true;

  constructor(
    public client: ClientService,
    private fb: FormBuilder,
    private router: Router,
    private route:ActivatedRoute
  ) {  
    
};

  ngOnInit(){

    this.route.queryParams.subscribe(params => {
      const CORREO = params['correo'];
      console.log(CORREO);

      let data ={
        correo: CORREO
      }
     this.client.postActive(`${this.BASE_API}/verificacion`, data).subscribe(
      (response:any)=>{
        console.log(response);
        this.load = false;
      },
      (error: any)=>{
        console.log(error.status);   
        this.load2 = false;       
      });

    });
  }
}