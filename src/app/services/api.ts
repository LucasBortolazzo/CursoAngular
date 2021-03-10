import { HttpClient } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

// shared
import { environment } from 'src/environments/environment';

// produto
import { Produto } from '../modules/cadastros/produto/models/produto';

export class Api<T> {

    public url: string;

    /**
     * @author Lucas
     * @description Variável emite eventos quando precisa fazer uma nova pesquisa com filtros.
     * O componente que possuí o campo de pesquisa(home.component) emite este evento quando o usuário pressiona enter no campo.
     * O componente que responsável por exibir os produtos(produto.component) se inscreve neste evento e refaz a pesquisa
     * no "produtoService" passando como parâmetro o filtro digitado pelo usuário.
     */
    public pesquisar: EventEmitter<string> = new EventEmitter();

    constructor(
        public http: HttpClient,
        public path: string
    ) {
        this.url = environment.api + '/api/' + path;
    }

    public criar(obj: T): Observable<T> {
        return this.http.post<T>(this.url, obj).pipe(map((item: any) => {
            return item.data;
        }));
    }

    public ler(id: number): Observable<T> {
        return this.http.get<T>(this.url + '/' + id).pipe(map((item: any) => {
            return item.data;
        }));
    }

    public alterar(obj: T, id: number): Observable<T> {
        return this.http.put<T>(`${this.url}/${id}`, obj).pipe(map((item: any) => {
            return item.data;
        }));
    }

    public deletar(id: number): Observable<void> {
        return this.http.delete<void>(`${this.url}/${id}`);
    }

    /**
     * @author Lucas
     * @description Método que um Observable<Produto[]> com todos os produtos da tabela
     */
    public products(): Observable<Produto[]> {
        return this.http.get<T>(`${this.url}/`).pipe(map((item: any) => {
            return item.data;
        }));
    }

    /**
     * @author Lucas
     * @description Método que um Observable<Produto[]> com os produtos que atendem ao parâmetro de filtro
     * @param: filter: Filtro digitado pelo usuário no campo de busca
     */
    public getProductsByName(filter: string): Observable<Produto[]> {
        const url = `${this.url}/pesquisar?value=${filter}`;

        return this.http.get<T>(`${url}`).pipe(map((item: any) => {
            return item;
        }));
    }
}
