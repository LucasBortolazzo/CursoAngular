import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import {
    Router,
    ActivatedRoute,
    Event as RouterEvent,
    NavigationStart,
    NavigationEnd,
    NavigationCancel,
    NavigationError
} from '@angular/router';

// api
import { Api } from 'src/app/services/api';
import { EmpresaService } from 'src/app/services/empresa.service';

// aplicação
import { ColunaConfig } from './models/coluna-config';
import { PesquisaConfig } from './models/pesquisa-config';

// sweetalert
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
    selector: 'app-pesquisa',
    templateUrl: 'pesquisa.component.html',
    providers: [PesquisaComponent],
    styleUrls: ['pesquisa.component.css']
})

export class PesquisaComponent implements OnInit {
    public displayedColumns = [];

    public colunas: ColunaConfig[];

    public dataSource = new MatTableDataSource<any>();

    /**
     * @author Lucas
     * @description Variável utilizada para guardar os registros retornados pela API que são exibidos na grid(datasource)
     * vindos através do data(alimentado através do resolver) da rota. Esses registros são armazenados
     * para que seja possível fazer o "refresh" na grid após remover um registro(tendo em vista que a URL não é alterada,
     * logo não é feito um "refresh" no data da rota, pois o resolver já resolveu a rota atual).
     */
    public registros = [];

    /**
     * @author Lucas
     * @description Variável que guarda o pathApi retornados pela config
     */
    public pathApi: string;

    /**
     * @author Lucas
     * @description API da pesquisa que será criado dinamicamente de acordo com classe que está chamando de forma genérica
     */
    public api: Api<''>;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private http: HttpClient,
    ) {
        const config: PesquisaConfig = this.route.snapshot.data as any;
        this.displayedColumns = [...config.colunas.map(col => col.nome), 'action'];
        this.colunas = config.colunas;
        this.registros = config.registros;
        this.dataSource.data = config.registros;
        this.pathApi = config.pathApi;

        /**
         * cria manualmente a API com base no pathApi(sem injeção de dependência), de uma forma que, não exista dependência
         * com objetos específicos(Empresa, Produto, etc). Feito desta forma para conseguir utilizar a API de pesquisa de forma genérica.
         */
        this.api = new Api(http, this.pathApi);
    }

    ngOnInit() { }

    public editar(value: any) {
        this.router.navigate([value.id], { relativeTo: this.route.parent });
    }

    /**
     * @author Lucas
     * @description Método chamado no template ao excluir um registro na grid
     * Esse método chama o método delete da API(criada dinamicamente) e atualiza a grid
     */
    public excluir(value: any) {
        Swal.fire({
            title: `Tem certeza que deseja excluir o registro ${value.id} ?`,
            showDenyButton: true,
            confirmButtonText: 'Sim',
            denyButtonText: 'Não',
        }).then((result) => {
            if (result.isConfirmed) {
                this.api.deletar(value.id).subscribe(() => {
                    // remove o registro recém excluído do datasource da grid
                    this.dataSource.data.splice(this.dataSource.data.indexOf(value), 1);

                    // atualiza a grid
                    this.dataSource._updateChangeSubscription();
                },
                    error => {
                        console.log('Ocorreu um eror ao excluir o registro.', error);
                    }
                );
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Registro deletado com sucesso!',
                    showConfirmButton: false,
                    timer: 1000,
                });
            }
        });
    }

    public cadastrar() {
        this.router.navigate(['novo'], { relativeTo: this.route.parent });
    }

    /**
     * @author Lucas
     * @description Método chamado no template(evento keyup do campo de pesquisa) responsável por aplicar
     * o filtro digitado pelo usuário na grid
     */
    applyFilter(filterValue: string) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    }
}
