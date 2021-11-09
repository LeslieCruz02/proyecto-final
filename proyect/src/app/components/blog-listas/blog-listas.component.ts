import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-listas',
  templateUrl: './blog-listas.component.html',
  styleUrls: ['./blog-listas.component.css']
})
export class BlogListasComponent implements OnInit {
  
  constructor(
    public client: ClientService,
    private route:  Router
  ) { }

  datosMascota:any[]=[
    {
      nombre:"Pacho", 
      img: "../../../assets/public1.jpeg",
      edad:4, 
      raza:"criollo", 
      responsable:"Daniel", 
      tipoMascota:"Gato"
    },
    {
      nombre:"Maya", 
      img: "../../../assets/maya.jpeg",
      edad:2, 
      raza:"criollo", 
      responsable:"Daniel", 
      tipoMascota:"Gata"
    }
  ];
  
 
  ngOnInit(): void {
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
