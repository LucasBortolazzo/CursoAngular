import { Component, Input, OnInit } from '@angular/core';

// shared
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'],
})

export class HomeComponent implements OnInit {

    constructor(private produtoService: ProdutoService) { }

    /**
     * @author Lucas
     * @description Método utilizado no template, chamado ao pressionar "enter" no campo de busca.
     * Responsável por chamar o método genérico do service, que emitirá um evento e notificará seus
     * inscritos(lista de exibição de produtos) para refazer a pesquisa com o filtro atual digitado no campo de busca
     */
    public search(filtro: string) {
        this.produtoService.pesquisar.emit(filtro);
    }

    ngOnInit() { }
}
