import {Component} from '@angular/core';
import { CarreraService} from '../../services/carrera/carrera.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  'selector': 'app-carrera-show',
  'templateUrl': './carrera.show.component.html',
  styleUrls: ['./carrera.show.component.css']
})

export class CarreraShowComponent{
car:any;
constructor(private carreraService: CarreraService,
private activatedRoute:ActivatedRoute){
  var id:number = parseInt(this.activatedRoute.snapshot.paramMap.get("id"));
  

  this.car = {
    'nombre':'Desconocido',
    'id':0
  }
 this.carreraService.show(id)
      .subscribe((res) => {
        
        this.car.nombre = res["object"]["nombre"];
        this.car.id = res["object"]["id"];

      }, (err)=> {

      })
  }
}