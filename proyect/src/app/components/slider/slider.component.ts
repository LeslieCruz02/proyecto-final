import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';
import { Router } from '@angular/router';
import { publicidades} from '../../interface/publicidades.interface';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],

})
export class SliderComponent implements OnInit {
  BASE_API: string=environment.BASE_API
  // com:boolean=false;
  load:boolean=true;

  constructor(
    public client: ClientService,
    private route:  Router
  ) { }

  publicidades : publicidades [] = [];

  ngOnInit(): void {

    this.client.getRequestPublicidades().subscribe(
      (res:any)=>{
        this.publicidades = res.publicidades; 
      },
      (error:any)=>{
        console.log(error.status);
      }
    )
   
  }
    
}
