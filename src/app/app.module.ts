import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { AsignaturaComponent } from './asignatura/asignatura.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AsignaturaService } from './asignatura/asignatura.service';
import { CrearComponent } from './asignatura/crear/crear.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    AsignaturaComponent,
    CrearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule, 
    FormsModule,
    HttpClientModule
    
  ],
  providers: [AsignaturaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
