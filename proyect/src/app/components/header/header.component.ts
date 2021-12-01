import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';
import { Router } from '@angular/router';
import { Mascotas } from '../../interface/info.interface';
import { environment } from 'src/environments/environment';
import { Usuarios } from 'src/app/interface/info.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  BASE_API: string=environment.BASE_API
  // com:boolean=false;
  load:boolean=true;
  constructor(
    public client: ClientService,
    private route:  Router
  ) { }
  mascotas : Mascotas [] = [];

  nombres : Usuarios[]=[];
  

  ngOnInit(): void {


    this.client.getRequestAdop(`${this.BASE_API}/home`).subscribe(
      (response:any)=>{
        this.nombres = response.nombres;
        console.log(response);
      },
      (error)=>{
        console.log(error.status);
      }
    )

    this.client.getRequestdatosMascotas().subscribe(
      (res:any)=>{
        this.mascotas = res.mascotas; 
      },
      (error:any)=>{
        console.log(error.status);
      }
    )
     
  }
  
 
}
