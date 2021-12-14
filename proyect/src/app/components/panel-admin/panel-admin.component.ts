import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';
import { Router } from '@angular/router';
import { Usuarios } from '../../interface/info.interface';
import { Mascotas } from '../../interface/info.interface';
import { Solicitudes } from '../../interface/info.interface';
import { Publicidades } from '../../interface/info.interface';
import { Adopciones } from '../../interface/info.interface';
import { environment } from 'src/environments/environment';
import { Admon } from '../../interface/info.interface';
import {  FormBuilder, FormGroup, Validators} from '@angular/forms';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styleUrls: ['./panel-admin.component.css']
})
export class PanelAdminComponent implements OnInit {
  BASE_API: string=environment.BASE_API;
  form!: FormGroup;
  load: boolean = true;

  /*usuarios01: boolean = false;
  mascotas01: boolean = false;
  solicitudes01: boolean = false;
  publicidades01: boolean = false;
  adopciones01: boolean = false;*/

  opcion = 'default'
  
  titulo: boolean = true;
  admon: Admon [] = []
  usuarios : Usuarios [] = [];
  title = "mascotas"
  mascotas : Mascotas [] = [];
  solicitudes : Solicitudes [] = [];
  publicidades : Publicidades [] = [];
  adopciones : Adopciones [] = [];

  constructor(
    public client: ClientService,
    private route:  Router
  ) { }
/*let opcion = this.route.snapshot.paramMap.get("opcion");
    console.log(opcion);*/
  ngOnInit(): void {
    this.client.getRequestPerfil(`${this.BASE_API}/dateAdmin`).subscribe(
      (response: any) => {  
        this.admon = response.admon;
          console.log(this.admon);
      },
      (error) => {
        console.log(error.status);
        }
      )

    this.client.getRequestdatosMascotas().subscribe(
      (res:any)=>{
        this.mascotas = res.mascotas;
        console.log(this.mascotas);
      },
      (error:any)=>{
        console.log(error.status);
      }
    )

    this.client.getRequestUsuarios().subscribe(
      (res:any)=>{
        this.usuarios = res.usuarios;
        console.log(this.usuarios);
      },
      (error:any)=>{
        console.log(error.status);
      }
    )
    this.client.getRequestsolicitudes().subscribe(
      (res:any)=>{
        this.solicitudes = res.solicitudes;
        console.log(this.solicitudes);
      },
      (error:any)=>{
        console.log(error.status);
      }
    )
    this.client.getRequestPublicidades().subscribe(
      (res:any)=>{
        this.publicidades = res.publicidades;
        console.log(this.publicidades);
      },
      (error:any)=>{
        console.log(error.status);
      }
    )
    this.client.getRequestAdopciones().subscribe(
      (res:any)=>{
        this.adopciones = res.adopciones;
        console.log(this.adopciones);
      },
      (error:any)=>{
        console.log(error.status);
      }
    )
  }
  // eliminarUsuario(id:number){
  //   console.log("Hago peticion por delete al server para eliminar el user de id: ", id);
  // }
  // actualizarUsuario(id:number){
  //   console.log("Hago peticion por delete al server para eliminar el user de id: ", id);
  // }
  eliminarUsuario(id:any){

    this.client.delete(`${this.BASE_API}/deleteUser?id=${id}`)
        .subscribe( (response:any)=>{
          console.log(response);
          Swal.fire(
            ' Delete successful',
            '',
            'success'
          )
          this.client.getRequestUsuarios().subscribe(
            (res:any)=>{
              this.usuarios = res.usuarios;
              console.log(this.usuarios);
            },
            (error:any)=>{
              console.log(error.status);
            }
          );
        
        },
        (error: any)=>{
          Swal.fire(
            'No ha sido exitoso!',
            'Intentalo nuevamente!',
            'error'
          )
          console.log(error.status);          
        })
      }
  
  actualizarUsuario(id:any){
    this.client.update(`${this.BASE_API}/updateUser`, id)
        .subscribe( (response:any)=>{
          console.log(response);
          Swal.fire(
            ' Update successful',
            '',
            'success'
          )
          this.route.navigate(['/panelAdmin']);
        },
        (error: any)=>{
          Swal.fire(
            'No ha sido exitoso!',
            'Intentalo nuevamente!',
            'error'
          )
          console.log(error.status);          
        })
  }

  async onSubmit(){
    if (this.form.valid) {

      let data = {
        usuario: this.form.value.usuario,
        nombres: this.form.value.nombres,
        apellidos: this.form.value.apellidos,
        correo: this.form.value.correo,
        telefono: this.form.value.telefono,
        password: this.form.value.password
      }
       this.load = false;
       this.client.postRequestSendForm(`${this.BASE_API}/usuarios`, data).subscribe(
        (response:any)=>{
          console.log(response);
          Swal.fire(
            'Su registro ha sido exitoso!',
            '',
            'success'
          )
          this.route.navigate(['']);
        },
        (error: any)=>{
          Swal.fire(
            'Su registro no ha sido exitoso!',
            'Intentalo nuevamente!',
            'error'
          )
          console.log(error.status);          
        })
    }else{
      console.log("Form error");
    }
  }
  eliminarMascota(id:any){
    this.client.delete(`${this.BASE_API}/deleteMascota?id=${id}`)
        .subscribe( (response:any)=>{
          console.log(response);
          Swal.fire(
            ' Delete successful',
            '',
            'success'
          )
          this.client.getRequestdatosMascotas().subscribe(
            (res:any)=>{
              this.mascotas = res.mascotas;
              console.log(this.mascotas);
            },
            (error:any)=>{
              console.log(error.status);
            }
          );
        },
        (error: any)=>{
          Swal.fire(
            'No ha sido exitoso!',
            'Intentalo nuevamente!',
            'error'
          )
          console.log(error.status);          
        })
      }
  
  actualizarMascota(id:any){
    this.client.update(`${this.BASE_API}/updateMascota`, id)
        .subscribe( (response:any)=>{
          console.log(response);
          Swal.fire(
            ' Update successful',
            '',
            'success'
          )
          this.route.navigate(['/panelAdmin']);
        },
        (error: any)=>{
          Swal.fire(
            'No ha sido exitoso!',
            'Intentalo nuevamente!',
            'error'
          )
          console.log(error.status);          
        })
  }
 
  eliminarSolicitud(correo:any){
    this.client.delete(`${this.BASE_API}/deleteSolicitud?correo=${correo}`)
        .subscribe( (response:any)=>{
          console.log(response);
          Swal.fire(
            ' Delete successful',
            '',
            'success'
          )
          this.client.getRequestsolicitudes().subscribe(
            (res:any)=>{
              this.solicitudes = res.solicitudes;
              console.log(this.solicitudes);
            },
            (error:any)=>{
              console.log(error.status);
            }
          )
        },
        (error: any)=>{
          Swal.fire(
            'No ha sido exitoso!',
            'Intentalo nuevamente!',
            'error'
          )
          console.log(error.status);          
        })
      }
  
  actualizarSolicitud(correo:any){
    this.client.update(`${this.BASE_API}/updateSolicitud`, correo)
        .subscribe( (response:any)=>{
          console.log(response);
          Swal.fire(
            ' Update successful',
            '',
            'success'
          )
          this.route.navigate(['panelAdmin']);
        },
        (error: any)=>{
          Swal.fire(
            'No ha sido exitoso!',
            'Intentalo nuevamente!',
            'error'
          )
          console.log(error.status);          
        })
  }
 
  eliminarPublicidad(id:any){
    this.client.delete(`${this.BASE_API}/deletePublicidad?id=${id}`)
        .subscribe( (response:any)=>{
          console.log(response);
          Swal.fire(
            ' Delete successful',
            '',
            'success'
          )
          this.client.getRequestPublicidades().subscribe(
            (res:any)=>{
              this.publicidades = res.publicidades;
              console.log(this.publicidades);
            },
            (error:any)=>{
              console.log(error.status);
            }
          )
        },
        (error: any)=>{
          Swal.fire(
            'No ha sido exitoso!',
            'Intentalo nuevamente!',
            'error'
          )
          console.log(error.status);          
        })
      }
  
  actualizarPublicidad(id:any){
    this.client.update(`${this.BASE_API}/updatePublicidad`, id)
        .subscribe( (response:any)=>{
          console.log(response);
          Swal.fire(
            ' Update successful',
            '',
            'success'
          )
          this.route.navigate(['/panelAdmin']);
        },
        (error: any)=>{
          Swal.fire(
            'No ha sido exitoso!',
            'Intentalo nuevamente!',
            'error'
          )
          console.log(error.status);          
        })
  }
 
  eliminarAdopcion(id:any){
    this.client.delete(`${this.BASE_API}/deleteAdopcion?id=${id}`)
        .subscribe( (response:any)=>{
          console.log(response);
          Swal.fire(
            ' Delete successful',
            '',
            'success'
          )
          this.client.getRequestAdopciones().subscribe(
            (res:any)=>{
              this.adopciones = res.adopciones;
              console.log(this.adopciones);
            },
            (error:any)=>{
              console.log(error.status);
            }
          );
        },
        (error: any)=>{
          Swal.fire(
            'No ha sido exitoso!',
            'Intentalo nuevamente!',
            'error'
          )
          console.log(error.status);          
        })
      }
  
  actualizarAdopcion(id:any){
    this.client.update(`${this.BASE_API}/updateAdopcion`, id)
        .subscribe( (response:any)=>{
          console.log(response);
          Swal.fire(
            ' Update successful',
            '',
            'success'
          )
          this.route.navigate(['/panelAdmin']);
        },
        (error: any)=>{
          Swal.fire(
            'No ha sido exitoso!',
            'Intentalo nuevamente!',
            'error'
          )
          console.log(error.status);          
        })
  }
 

}
