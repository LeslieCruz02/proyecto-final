import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';
import { Router } from '@angular/router';
import { Mascotas } from '../../interface/mascotas.interface';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-blog-listas',
  templateUrl: './blog-listas.component.html',
  styleUrls: ['./blog-listas.component.css'],

})
export class BlogListasComponent implements OnInit {
  BASE_API: string=environment.BASE_API
  
  title = "mascotas"
  mascotas : Mascotas [] = [];
  
  
  constructor(
    public client: ClientService,
    private route:  Router
  ) { }
 
  ngOnInit(): void {

    this.client.getRequestdatosMascotas().subscribe(
      (res:any)=>{
        this.mascotas = res.mascotas;
      },
      (error:any)=>{
        console.log(error.status);
      }
    )
  }


  async reqGaleria(){
    this.client.getReqGaleria(`${this.BASE_API}/listaAdopcion`).subscribe(
    (response: any) => {
        console.log(response);
        this.route.navigate(['/galeria']);
  
    },
    (error) => {
      console.log(error.status);
      }
    )
  }

}
