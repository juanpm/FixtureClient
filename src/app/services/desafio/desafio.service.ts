import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DesafioService {
  api = environment.base_api;

  constructor(private http: HttpClient) {
    
  }
  private headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  });

  getFormUrlEncoded(toConvert) {
    const formBody = [];
    for (const property in toConvert) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(toConvert[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
  }
  index() {
    return this.http.get(this.api + "api/auth/desafios", {});
  }
  show(id:number) {
    return this.http.get(this.api + "api/auth/desafios/" + id, {});
  }
  post(disciplina_id:number, invitado_id:number, retador_id:number, 
    invitado_puntaje:number, retador_puntaje:number, ganador:string, 
    parent_id:number, fecha:Date, fase:string) {
    return this.http.post(this.api + "api/auth/desafios", 
      this.getFormUrlEncoded({
        'disciplina_id': disciplina_id,
        'invitado_id': invitado_id,
        'retador_id': retador_id,
        'invitado_puntaje': invitado_puntaje,
        'retador_puntaje': retador_puntaje,
        'ganador': ganador,
        'parent_id': parent_id,
        'fecha': fecha,
        'fase': fase,
      }), {'headers': this.headers});
  }
  put(id:number, data:any) {
    return this.http.put(this.api + "api/auth/desafios/" + id, 
      this.getFormUrlEncoded(data),
      {
        'headers': this.headers
      }
    );
  }
  delete(id: number) {
    return this.http.delete(this.api + "api/auth/desafios/" + id);
  }
}
