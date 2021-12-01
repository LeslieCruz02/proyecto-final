import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';
import { Router } from '@angular/router';
import { Mascotas } from '../../interface/info.interface'
import { environment } from 'src/environments/environment';
import { Usuarios } from 'src/app/interface/info.interface';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  BASE_API: string=environment.BASE_API
  com:boolean=false;
  constructor(
    public client: ClientService,
    private route:  Router
  ) { }
  mascotas : Mascotas [] = [];
  usuarios: Usuarios[] =[]

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
      this.client. getRequestdateMascotas(`${this.BASE_API}/dateMascotas`).subscribe(
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
    this.client.getRequestAdop(`${this.BASE_API}/home`).subscribe(
      (response:any)=>{
        console.log(response);
        this.route.navigate(['/listaAdopcion']);
      },
      (error)=>{
        console.log(error.status);
      }
    )
  }


}

