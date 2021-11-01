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

  constructor(
    public client: ClientService,
    private fb: FormBuilder,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  reqVerificar(){
    this.client.getReqAutenticar("http://localhost:10101/verificacion").subscribe(
    (response: any) => {
        console.log(response);

  
    },
    (error) => {
      console.log(error.status);
      }
    )
  }
}
