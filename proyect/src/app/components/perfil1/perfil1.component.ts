import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-perfil1',
  templateUrl: './perfil1.component.html',
  styleUrls: ['./perfil1.component.css']
})
export class Perfil1Component implements OnInit {
  BASE_API: string=environment.BASE_API
  com:boolean=false;
  constructor(
    public client: ClientService,
    private route:  Router
  ) { }

  ngOnInit(): void {
  }
  regMascota(){
    this.client.getRequestRegMascota(`${this.BASE_API}/perfilP`).subscribe(
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
