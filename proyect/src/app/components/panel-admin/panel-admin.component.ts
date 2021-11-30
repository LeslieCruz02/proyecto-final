import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';
import { Router } from '@angular/router';
import { Usuarios } from '../../interface/info.interface';
import { Mascotas } from '../../interface/info.interface';
import { Solicitudes } from '../../interface/info.interface';
import { Publicidades } from '../../interface/info.interface';
import { Adopciones } from '../../interface/info.interface';
import { environment } from 'src/environments/environment';
import { Admon } from '../../interface/info.interface';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styleUrls: ['./panel-admin.component.css']
})
export class PanelAdminComponent implements OnInit {
  BASE_API: string=environment.BASE_API;

  load: boolean = true;

  /*usuarios01: boolean = false;
  mascotas01: boolean = false;
  solicitudes01: boolean = false;
  publicidades01: boolean = false;
  adopciones01: boolean = false;*/

  opcion = 'default'
  
  titulo: boolean = true;
  admon: Admon [] = []
  usuarios : Usuarios [] = [];
  title = "mascotas"
  mascotas : Mascotas [] = [];
  solicitudes : Solicitudes [] = [];
  publicidades : Publicidades [] = [];
  adopciones : Adopciones [] = [];

  constructor(
    public client: ClientService,
    private route:  Router
  ) { }
/*let opcion = this.route.snapshot.paramMap.get("opcion");
    console.log(opcion);*/
  ngOnInit(): void {
    this.client.getRequestPerfil(`${this.BASE_API}/dateAdmin`).subscribe(
      (response: any) => {  
        this.admon = response.admon;
          console.log(this.admon);
      },
      (error) => {
        console.log(error.status);
        }
      )

    this.client.getRequestdatosMascotas().subscribe(
      (res:any)=>{
        this.mascotas = res.mascotas;
        console.log(this.mascotas);
      },
      (error:any)=>{
        console.log(error.status);
      }
    )

    this.client.getRequestUsuarios().subscribe(
      (res:any)=>{
        this.usuarios = res.usuarios;
        console.log(this.usuarios);
      },
      (error:any)=>{
        console.log(error.status);
      }
    )
    this.client.getRequestsolicitudes().subscribe(
      (res:any)=>{
        this.solicitudes = res.solicitudes;
        console.log(this.solicitudes);
      },
      (error:any)=>{
        console.log(error.status);
      }
    )
    this.client.getRequestPublicidades().subscribe(
      (res:any)=>{
        this.publicidades = res.publicidades;
        console.log(this.publicidades);
      },
      (error:any)=>{
        console.log(error.status);
      }
    )
    this.client.getRequestAdopciones().subscribe(
      (res:any)=>{
        this.adopciones = res.adopciones;
        console.log(this.adopciones);
      },
      (error:any)=>{
        console.log(error.status);
      }
    )
  }
  eliminarUsuario(id:number){
    console.log("Hago peticion por delete al server para eliminar el user de id: ", id);
  }
  actualizarUsuario(id:number){
    console.log("Hago peticion por delete al server para eliminar el user de id: ", id);
  }
 
}
