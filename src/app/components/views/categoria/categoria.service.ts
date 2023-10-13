import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from './categoria.model';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  /*pegando a Url padrao que esta declarado no environment.ts e declarando em uma variavel*/
  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { } //inicia ja contruindo a requisicoes

//-----------------------------------------------------------------------------------------------------
  /*Listando todas as Categorias*/
  findAll():Observable<Categoria[]> {

    /*Estamos pegando a url padrao do site e atribuindo o que vem depois da barra[/] */
    const url = `${this.baseUrl}/categorias`

    return this.http.get<Categoria[]>(url)
  }
}
