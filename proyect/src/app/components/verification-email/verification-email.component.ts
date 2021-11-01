import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../client.service';
//importacion de clases necesarias para manejar formularios reactivos y el routing
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verification-email',
  templateUrl: './verification-email.component.html',
  styleUrls: ['./verification-email.component.css']
})
export class VerificationEmailComponent implements OnInit {

  form!: FormGroup;
  load: boolean = true;
  load2: boolean = true;

  constructor(
    public client: ClientService,
    private fb: FormBuilder,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      correo:['', Validators.email]
    });
  }

  async onSubmit(){
    if (this.form.valid) {

      let data = {
        correo: this.form.value.correo
      }
      
       this.client.postRequestSendForm('http://localhost:10101/verificacion', data).subscribe(
        (response:any)=>{
          console.log(response);
          this.load = false;
        },
        (error: any)=>{
          console.log(error.status);   
          this.load2 = false;       
        })
    }else{
      console.log("Form error");
    }
  }
}