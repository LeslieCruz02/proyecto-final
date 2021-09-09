import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagInicioComponent } from './containers/pag-inicio/pag-inicio.component';
import { GaleriaprincipalComponent } from './containers/galeriaprincipal/galeriaprincipal.component';
import { ContactenosComponent } from './containers/contactenos/contactenos.component';
import { HomeComponent } from './containers/home/home.component';
import { RegistroComponent } from './containers/registro/registro.component';
import { PerfilPComponent } from './containers/perfil-p/perfil-p.component';
import { PerfilInfoComponent } from './containers/perfil-info/perfil-info.component'; 
import { RegistroMascotaComponent } from './containers/registro-mascota/registro-mascota.component';
import { GaleriaComponent } from './containers/galeria/galeria.component';
import { ListadoAdopcionesComponent } from './containers/listado-adopciones/listado-adopciones.component';



const routes: Routes = [
  {path:'', component:PagInicioComponent},
  {path:'galery-ppal', component:GaleriaprincipalComponent},
  {path:'contactenos', component:ContactenosComponent},  {path: 'registro', component: RegistroComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'home', component: HomeComponent},
  {path: 'perfilP', component: PerfilPComponent},
  {path: 'perfilInfo', component: PerfilInfoComponent},
  {path: 'rmascota', component: RegistroMascotaComponent},
  {path:'galeria', component:GaleriaComponent},
  {path:'listaAdopcion', component: ListadoAdopcionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
