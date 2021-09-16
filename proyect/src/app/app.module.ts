import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderIniComponent } from './components/header-ini/header-ini.component';
import { FooterIniComponent } from './components/footer-ini/footer-ini.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PagInicioComponent } from './containers/pag-inicio/pag-inicio.component';
import { HeaderpagComponent } from './components/headerpag/headerpag.component';
import { FooterpagComponent } from './components/footerpag/footerpag.component';
import { PaggaleryComponent } from './components/paggalery/paggalery.component';
import { PagadoptionComponent } from './components/pagadoption/pagadoption.component';
import { GaleriaprincipalComponent } from './containers/galeriaprincipal/galeriaprincipal.component';
import { ContactenosComponent } from './containers/contactenos/contactenos.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HomeComponent } from './containers/home/home.component';
import { PerfilInfoComponent } from './containers/perfil-info/perfil-info.component';
import { PerfilPComponent } from './containers/perfil-p/perfil-p.component';
import { RegistroComponent } from './containers/registro/registro.component';
import { RegistroMascotaComponent } from './containers/registro-mascota/registro-mascota.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { Comentarios1Component } from './components/comentarios1/comentarios1.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { Perfil1Component } from './components/perfil1/perfil1.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { RegMascota1Component } from './components/reg-mascota1/reg-mascota1.component';
import { SliderComponent } from './components/slider/slider.component';
import { GaleriaComponent } from './containers/galeria/galeria.component';
import { ListadoAdopcionesComponent } from './containers/listado-adopciones/listado-adopciones.component';
import { SleaderComponent } from './components/sleader/sleader.component';
import { GaleryPrincipalComponent } from './components/galery-principal/galery-principal.component';
import { BlogListasComponent } from './components/blog-listas/blog-listas.component';
import { PublicidadComponent } from './components/publicidad/publicidad.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderIniComponent,
    FooterIniComponent,
    InicioComponent,
    PagInicioComponent,
    HeaderpagComponent,
    FooterpagComponent,
    PaggaleryComponent,
    PagadoptionComponent,
    GaleriaprincipalComponent,
    ContactenosComponent,
    FormularioComponent,
    HomeComponent,
    PerfilInfoComponent,
    PerfilPComponent,
    RegistroComponent,
    RegistroMascotaComponent,
    ComentariosComponent,
    Comentarios1Component,
    HeaderComponent,
    NavComponent,
    PerfilComponent,
    Perfil1Component,
    RegistrarComponent,
    RegMascota1Component,
    SliderComponent,
    GaleriaComponent,
    ListadoAdopcionesComponent,
    SleaderComponent,
    GaleryPrincipalComponent,
    BlogListasComponent,
    PublicidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
