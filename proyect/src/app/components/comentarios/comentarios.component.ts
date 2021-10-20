import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  constructor(
    public client: ClientService,
    private route:  Router
  ) { }
  

  ngOnInit(): void {
  }
  async comentar(){
    this.client.getRequestCom('http://localhost:10101/home').subscribe(
      (response:any)=>{
        console.log(response);
      },
      (error:any)=>{
        console.log(error.status);
      }
    )
  }
}
