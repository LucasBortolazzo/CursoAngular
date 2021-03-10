import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// shared
import { environment } from 'src/environments/environment';

// models
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public token: string;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.token = localStorage.getItem('acess_token');
  }

  public logar(login: any) {
    const api = environment.api + `/auth`;
    return this.http.post(api, login).pipe(map((resposta: any) => {
      this.token = resposta.data.token;
      localStorage.setItem('acess_token', this.token);
      return resposta;
    }));
  }

  public cadastrar(usuario: Usuario): Observable<any> {
    const api = environment.api + '/auth/singin';
    return this.http.post(api, usuario);
  }

  public sair() {
    localStorage.removeItem('acess_token');
    this.router.navigateByUrl('home');
    this.token = null;
  }
}
