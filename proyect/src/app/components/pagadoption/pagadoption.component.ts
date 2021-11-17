import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../client.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

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

  ngOnInit(): void {
  }
    verMas(){
      this.client.getRequestListaAdop(`${this.BASE_API}/galeryPpal`).subscribe(
      (response: any) => {
          console.log(response);
          this.route.navigate(['/listaAdopcion']);
    
      },
      (error) => {
        console.log(error.status);
        this.route.navigate(['']);
        }
      )
    }
}
