import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  BASE_API: string=environment.BASE_API
  com:boolean=false;
  load:boolean=true;
  constructor(
    public client: ClientService,
    private route:  Router
  ) { }

  ngOnInit(): void {
  }
  async quieroAdop(){
    this.load=false;
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
