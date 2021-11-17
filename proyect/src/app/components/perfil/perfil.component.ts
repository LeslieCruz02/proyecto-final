import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

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

  ngOnInit(): void {
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

