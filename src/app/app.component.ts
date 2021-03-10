import { Component } from '@angular/core';
import {
    Router,
    Event as RouterEvent,
    NavigationStart,
    NavigationEnd,
    NavigationCancel,
    NavigationError,
} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public title = 'treinamento-angular';

    /**
     * @author Lucas
     * @description Variável utilizada no template para exibir o "aguarde" enquanto os dados são carregados da API
     */
    public loading = true;

    constructor(private router: Router) {
        this.router.events.subscribe((e: RouterEvent) => {
            this.navigationInterceptor(e);
        });
    }

    /**
     * @author Lucas
     * @description Método responsável por setar a variável que controla se a página está carregando para "true"
     */
    public carregando() {
        this.loading = true;
    }

    /**
     * @author Lucas
     * @description Método responsável por setar a variável que controla se a página está carregando para "false"
     */
    public finalizouCarregamentoRota() {
        this.loading = false;
    }

    /**
     * @author Lucas
     * @description Método responsável interceptar a navegação entre as rotas e validar se a rota já foi ativada,
     * ou se está aguardando o resolver. O roteador espera que os dados sejam resolvidos antes que a rota seja finalmente ativada,
     * enquanto aguarda os dados da API, a aplicação mostrará uma mensagem de "aguarde" para o usuário
     */
    public navigationInterceptor(event: RouterEvent): void {
        if (event instanceof NavigationStart) {
            this.carregando();
        }

        if (event instanceof NavigationEnd) {
            this.finalizouCarregamentoRota();
        }

        if (event instanceof NavigationCancel) {
            this.finalizouCarregamentoRota();
        }
        if (event instanceof NavigationError) {
            this.finalizouCarregamentoRota();
        }
    }
}
