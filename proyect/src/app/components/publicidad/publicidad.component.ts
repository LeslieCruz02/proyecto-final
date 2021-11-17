import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-publicidad',
  templateUrl: './publicidad.component.html',
  styleUrls: ['./publicidad.component.css']
})
export class PublicidadComponent implements OnInit {
  BASE_API: string=environment.BASE_API

  constructor(
    public client: ClientService,
    private route:  Router
  ) { }

  ngOnInit(): void {
  }
  publicidad(){
    this.client.getRequestPublicidad(`${this.BASE_API}/home`).subscribe(
      (response:any)=>{
        console.log(response);
        this.route.navigate(['/addPublicidad']);
      },
      (error)=>{
        console.log(error.status);
      }
    )
  }

}
