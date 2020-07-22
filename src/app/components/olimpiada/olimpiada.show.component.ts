import { Component, OnInit } from '@angular/core';
import { OlimpiadaService } from '../../services/olimpiada/olimpiada.service';
import { ActivatedRoute } from "@angular/router";
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-olimpiada-show',
  templateUrl: './olimpiada.show.component.html',
  styleUrls: ['./olimpiada.show.component.css']
})
export class OlimpiadaShowComponent {
  olim:any; 
  constructor(private olimpiadaService : OlimpiadaService, 
    private activatedRoute : ActivatedRoute) { 
      var id : number = parseInt(this.activatedRoute.
        snapshot.paramMap.get("id"));

      this.olim = {
        'nombre': 'Desconocido',
        'id': 0
      }

      this.olimpiadaService.show(id)
        .subscribe((res) => {
          
          this.olim.nombre = res["object"]["nombre"];
          this.olim.id = res["object"]["id"];

        }, (err)=> {

      })
    }
}
