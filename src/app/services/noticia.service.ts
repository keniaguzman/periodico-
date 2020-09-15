import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  baseUrlInternacional:string="./assets/internacional.json"
  baseUrlNacional:string="./assets/nacional.json"
  baseUrlNota:string="./assets/nota.json"

  constructor(private http: HttpClient) {

  }
  obtenerNoticia(tipoNoticia:string) {

     if (tipoNoticia=="internacional") {
      try {
        return this.http.get(this.baseUrlInternacional)
      } catch(error) {
        console.error(error);
        console.error(error.error);
        console.error(error.headers);
      }
     } else {
      try {
        return this.http.get(this.baseUrlNacional);
      } catch(error) {
        console.error(error);
        console.error(error.error);
        console.error(error.headers);
      }
     }
  }
  obtenerNota(id:String) {
    try {
      return this.http.get(this.baseUrlNota);
    } catch(error) {
      console.error(error);
      console.error(error.error);
      console.error(error.headers);
    }
  }

}

