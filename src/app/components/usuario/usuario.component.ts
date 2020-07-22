import {Component} from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
  'selector': 'app-usuario',
  'templateUrl': './usuario.component.html'
})

export class UsuarioComponent {
  lista:any;

  constructor(private usuarioService : UsuarioService) {
    this.usuarioService.index()
      .subscribe((res) => {
        // Aqui el codigo cuando la peticion sea ok.

        this.lista = res["objects"];
      }, (err)=>{
        // Aqui el codigo cuando la peticion sea fallida.

      });
  }
}