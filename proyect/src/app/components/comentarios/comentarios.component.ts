import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  BASE_API: string=environment.BASE_API
  constructor(
    public client: ClientService,
    private route:  Router
  ) { }
  

  ngOnInit(): void {
  }
  async comentar(){
    this.client.getRequestCom(`${this.BASE_API}/home`).subscribe(
      (response:any)=>{
        console.log(response);
      },
      (error:any)=>{
        console.log(error.status);
      }
    )
  }
}
