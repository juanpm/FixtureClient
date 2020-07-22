import { Component, OnInit } from '@angular/core';
import { OlimpiadaService } from '../../services/olimpiada/olimpiada.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-olimpiada',
  templateUrl: './olimpiada.component.html',
  styleUrls: ['./olimpiada.component.css']
})
export class OlimpiadaComponent implements OnInit {
  lista:any;
  newOlimpiadaForm;
  crud_operation = {is_new: false, is_visible: false}
  
  constructor(private formBuilder:FormBuilder,
    private router: Router,
    private olimpiadaService:OlimpiadaService) { 
      this.newOlimpiadaForm = this.formBuilder.group({
        'nombre': '',
        'descripcion': '',
        'fecha_inicio': '',
        'fecha_fin_inscripcion': '',
        'fecha_fin': ''
      })
  
      this.olimpiadaService.index()
        .subscribe((res) => {
          // Aqui el codigo cuando la peticion sea ok.
  
          this.lista = res["objects"];
        }, (err)=>{
          // Aqui el codigo cuando la peticion sea fallida.
  
        });
    }

  ngOnInit(): void {
  }
  
  crearOlimpiada() {
    this.olimpiadaService
    .post(this.newOlimpiadaForm.value.nombre,this.newOlimpiadaForm.value.descripcion,
      this.newOlimpiadaForm.value.fecha_inicio,
      this.newOlimpiadaForm.value.fecha_fin_inscripcion,
      this.newOlimpiadaForm.value.fecha_fin)
      .subscribe((res)=>{
        if ( res['status'] ) {
          alert(">" + res["object"]["nombre"]);
        }
      }, (err) => {

    })
  }
  new() {
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = true;
  }

}
