import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publicidad',
  templateUrl: './publicidad.component.html',
  styleUrls: ['./publicidad.component.css']
})
export class PublicidadComponent implements OnInit {

  constructor(
    public client: ClientService,
    private route:  Router
  ) { }

  ngOnInit(): void {
  }
  publicidad(){
    this.client.getRequestPublicidad('http://localhost:10101/home').subscribe(
      (response:any)=>{
        console.log(response);
        this.route.navigate(['/###']);
      },
      (error)=>{
        console.log(error.status);
      }
    )
  }

}
