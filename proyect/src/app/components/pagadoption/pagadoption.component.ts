import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../client.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { minilista } from 'src/app/interface/minilista.interface';

@Component({
  selector: 'app-pagadoption',
  templateUrl: './pagadoption.component.html',
  styleUrls: ['./pagadoption.component.css']
})
export class PagadoptionComponent implements OnInit {
  BASE_API: string=environment.BASE_API
 //com:boolean=false;
  constructor(
    public client: ClientService,
    private route:  Router
    ) { }
  minilista : minilista [] = []

  ngOnInit(): void {
          
    this.client.getRequestminilista().subscribe(
      (res:any)=>{
        this.minilista = res.minilista;
        console.log(this.minilista);
      },
      (error:any)=>{
        console.log(error.status);
      }
    )
  }
}
