import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './interface/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url = 'http://localhost:8080/api/usuarios';
  constructor(private http: HttpClient) { }

  getUsuarios():Observable<any>{
    return this.http.get(this.url);
  }

  getUnUsuario(id: string):Observable<any>{
    return this.http.get(this.url+'/'+id);
  }

  saveUsuario(usuario: Usuario):Observable<any>{
    return this.http.post(this.url, usuario);
  }

  editUsuario(id: string, usuario:Usuario):Observable<any>{
    return this.http.put(this.url+'/'+id, usuario);
  }

  deleteUsuario(id:string):Observable<any>{
    return this.http.delete(this.url+'/'+id);
  }
}
