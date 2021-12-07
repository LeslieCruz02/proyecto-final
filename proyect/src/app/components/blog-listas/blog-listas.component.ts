import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';
import { Router } from '@angular/router';
import { Mascotas } from '../../interface/mascotas.interface';
import { environment } from 'src/environments/environment';
import { Usuarios } from 'src/app/interface/info.interface';


@Component({
  selector: 'app-blog-listas',
  templateUrl: './blog-listas.component.html',
  styleUrls: ['./blog-listas.component.css'],

})
export class BlogListasComponent implements OnInit {
  BASE_API: string=environment.BASE_API
  
  title = "mascotas"
  mascotas : Mascotas [] = [];
  usuarios:Usuarios[]=[]
  
  constructor(
    public client: ClientService,
    private route:  Router
  ) { }
 
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
    this.client.getRequestLista(`${this.BASE_API}/listaAdopcion`).subscribe(
      (response:any)=>{
        console.log(response);
        this.route.navigate(['/listaAdopcion']);
      },
      (error)=>{
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
  }


  async reqGaleria(){
    this.client.getReqGaleria(`${this.BASE_API}/listaAdopcion`).subscribe(
    (response: any) => {
        console.log(response);
        this.route.navigate(['/galeria']);
  
    },
    (error) => {
      console.log(error.status);
      }
    )
  }

}
