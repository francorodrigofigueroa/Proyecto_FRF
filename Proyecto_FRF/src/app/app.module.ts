import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './conponents/header/header.component';
import { LogoAPComponent } from './conponents/logo-ap/logo-ap.component';
import { BannerComponent } from './conponents/banner/banner.component';
import { AcercaDeComponent } from './conponents/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './conponents/experiencia/experiencia.component';
import { EducacionComponent } from './conponents/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './conponents/hys/hys.component';
import { ProyectoComponent } from './conponents/proyecto/proyecto.component';
import { FooterComponent } from './conponents/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HysComponent,
    ProyectoComponent,
    FooterComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
