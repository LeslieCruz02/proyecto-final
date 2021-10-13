import { Component, OnInit } from '@angular/core';

import {ClientService} from '../../client.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-commercial',
  templateUrl: './add-commercial.component.html',
  styleUrls: ['./add-commercial.component.css']
})
export class AddCommercialComponent implements OnInit {

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
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      imagenes: ['', Validators.required]
    });
  }
  async onSubmit(){
    if (this.form.valid) {
      let data={
        titulo: this.form.value.titulo,
        descripcion: this.form.value.descripcion,
        imagenes: this.form.value.imagenes,
      }
      this.load = false;
      this.client.postRequestSendForm('http://localhost:10101/addPublicidad',data
        ).subscribe(
        (response:any)=>{
          console.log(response);
          this.route.navigate(['/perfilP']);
        },
        (error: any)=>{
          console.log(error.status);          
        })
    }else{
      console.log("Form error");
    }
  } 
 reqPublicidad(){
    this.client.getReqPublicidad("http://localhost:10101/publicidad").subscribe(
    (response: any) => {
        console.log(response);

  
    },
    (error) => {
      console.log(error.status);
      }
    )
  } 
}