import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';
import { Router } from '@angular/router';
import { Mascotas } from '../../interface/mascotas.interface';


@Component({
  selector: 'app-blog-listas',
  templateUrl: './blog-listas.component.html',
  styleUrls: ['./blog-listas.component.css'],

})
export class BlogListasComponent implements OnInit {
  
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
        console.log(this.mascotas);
      },
      (error:any)=>{
        console.log(error.status);
      }
    )
  }


  async reqGaleria(){
    this.client.getReqGaleria("http://localhost:10101/listaAdopcion").subscribe(
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
