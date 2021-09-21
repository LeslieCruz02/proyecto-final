import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  com:boolean=false;
  constructor(
    public client: ClientService,
    private route:  Router
  ) { }

  ngOnInit(): void {
  }
  quieroAdop(){
    this.client.getRequestAdop('http://localhost:10101/home').subscribe(
      (response:any)=>{
        console.log(response);
        this.route.navigate(['/listaAdopcion']);
      },
      (error)=>{
        console.log(error.status);
      }
    )
  }

  regMascota(){
    this.client.getRequestRegMascota("http://localhost:10101/perfilP").subscribe(
    (response: any) => {
        console.log(response);
        this.route.navigate(['/rmascota']);
  
    },
    (error) => {
      console.log(error.status);
      }
    )
  }
}

