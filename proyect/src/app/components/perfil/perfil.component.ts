import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';
import { Router } from '@angular/router';
import { Mascotas } from '../../interface/mascotas.interface'

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
  mascotas : Mascotas [] = [];

  ngOnInit(): void {
    this.client.getRequestdatosMascotas().subscribe(
      (res:any)=>{
        this.mascotas = res.mascotas;
        console.log(this.mascotas);
      },
      (error:any)=>{
        console.log(error.status);
      }
    )
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

