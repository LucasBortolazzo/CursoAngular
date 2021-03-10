import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
    Router,
    Event as RouterEvent,
    NavigationStart,
    NavigationEnd,
    NavigationCancel,
    NavigationError
} from '@angular/router';
import { Subscription } from 'rxjs';

// produto
import { Produto } from 'src/app/modules/cadastros/produto/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
    selector: 'app-produto',
    templateUrl: 'produto.component.html'
})

export class ProdutoComponent implements OnInit, OnDestroy {
    /**
     * @author Lucas
     * @description Variável utilizada no template para exibir os produtos retornados pela API
     */
    public produtos: Produto[];

    /**
     * @author Lucas
     * @description Variável utilizada para se inscrever no evento de pesquisa do service,
     * que é disparado quando o usuário pressiona enter no campo de busca no componente "home"
     */
    public subscription: Subscription;

    constructor(private router: Router, private produtoService: ProdutoService) {
        this.produtoService.products().subscribe((listaProdutos) => {
            this.produtos = listaProdutos;
        });

        this.subscription = this.produtoService.pesquisar.subscribe((filtro: string) => {
            this.pesquisarProduto(filtro);
        });
    }

    /**
     * @author Lucas
     * @description Método responsável por chamar o método "getProductsByName" do service
     * passando como parâmetro o filtro digitado pelo usuário no campo de busca
     */
    private pesquisarProduto(filtro: string) {
        this.produtoService.getProductsByName(filtro).subscribe((listaProdutos) => {
            this.produtos = listaProdutos;
        });
    }

    ngOnInit() { }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
