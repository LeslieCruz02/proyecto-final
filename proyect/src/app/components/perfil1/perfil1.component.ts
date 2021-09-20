import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil1',
  templateUrl: './perfil1.component.html',
  styleUrls: ['./perfil1.component.css']
})
export class Perfil1Component implements OnInit {
  com:boolean=false;
  constructor(
    public client: ClientService,
    private route:  Router
  ) { }

  ngOnInit(): void {
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
