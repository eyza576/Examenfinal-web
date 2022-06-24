import { Component, OnInit } from '@angular/core';
import { AsignaturaService } from './asignatura.service';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.component.html',

})
export class AsignaturaComponent implements OnInit {
  listarasignatura: any;
  constructor(private asignaturaService:AsignaturaService) { 
  }
  
  ngOnInit(): void {
    this.lista();
  }
  lista(){
    this.asignaturaService.lista().subscribe((res:any)=>{
      this.listarasignatura=res.data;
    })
  }

}
