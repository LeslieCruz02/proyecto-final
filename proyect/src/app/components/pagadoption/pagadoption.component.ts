import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagadoption',
  templateUrl: './pagadoption.component.html',
  styleUrls: ['./pagadoption.component.css']
})
export class PagadoptionComponent implements OnInit {
 //com:boolean=false;
  constructor(
    public client: ClientService,
    private route:  Router
    ) { }

  ngOnInit(): void {
  }
    verMas(){
      this.client.getRequestListaAdop("http://localhost:10101/galery-ppal").subscribe(
      (response: any) => {
          console.log(response);
          this.route.navigate(['/listaAdopcion']);
    
      },
      (error) => {
        console.log(error.status);
        }
      )
    }
}
