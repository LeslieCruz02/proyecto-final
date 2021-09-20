import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  com:boolean=false;
  constructor(
    public client: ClientService,
    private route:  Router
  ) { }

  ngOnInit(): void {
  }
  quieroAdop(){
    this.client.getRequestAdop('http://localhost:10101/home').subscribe(
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
