import { Component, OnInit, ChangeDetectionStrategy, Input, OnDestroy } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

// shared
import { AdminGuard } from 'src/app/services/admin.guard';
import { Api } from 'src/app/services/api';

// sweetalert
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
    selector: 'app-crud',
    templateUrl: './crud.component.html',
    styleUrls: ['./crud.component.css'],
    changeDetection: ChangeDetectionStrategy.Default,
})
export class CrudComponent implements OnInit, OnDestroy {

    @Input() public form: NgForm;

    @Input() public titulo: string;

    @Input() public api: Api<any>;

    public registroId = null;

    private subscription: Subscription;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private adminGuard: AdminGuard
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.ler(params.id);
        });
    }

    /**
     * @author Lucas
     * @description Método que exibe uma mensagem de sucesso após gravar um registro do crud com êxito
     */
    ShowMessageSuccess() {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Bom trabalho. Registro gravado com sucesso!',
            showConfirmButton: false,
            timer: 1000,
        });
    }

    /**
     * @author Lucas
     * @description Método que exibe uma mensagem de informação se o registro da pesquisa não existir
     */
    ShowMessageNotFound() {
        Swal.fire({
            position: 'top-end',
            icon: 'info',
            title: 'Registro não encontrado',
            showConfirmButton: false,
            timer: 2000,
        });
    }

    /**
     * @author Lucas
     * @description Método que exibe uma mensagem de erro caso ocorra alguma exceção nas operações do crud(insert, update, delete)
     */
    ShowMessageError() {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Ocorreu um erro inesperado. Por favor, espere alguns instantes e tenta novamente.',
            showConfirmButton: false,
            timer: 2000,
        });
    }

    /**
     * @author Lucas
     * @description Método que exibe uma mensagem de sucesso após excluir o registro com êxito
     */
    ShowMessageDelete() {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Bom trabalho. Registro excluído com sucesso!',
            showConfirmButton: false,
            timer: 1000,
        });
    }

    /**
     * @author Lucas
     * @description Método que exibe uma mensagem de informação para o usuário ao tentar gravar um formulário inválido
     */
    ShowMessageInvalidForm() {
        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: 'Campos inválidos. Corrija as informações para prosseguir.',
            showConfirmButton: false,
            timer: 1000,
        });
    }

    private ler(id: number) {
        if (id) {
            this.registroId = id;
            this.api.ler(id).subscribe(registro => {
                if (registro) {
                    this.form.form.patchValue(registro);
                }
            }, error => {
                console.error(error);
                this.ShowMessageNotFound();
                this.abrirNovoRegistro();
            });
        }
    }

    public salvar() {
        if (this.form.valid) {
            if (this.registroId) {
                this.alterar();
            } else {
                this.criar();
            }
            this.ShowMessageSuccess();
        } else {
            this.ShowMessageInvalidForm();
        }
    }

    private alterar() {
        const value = this.form.form.value;
        value.id = this.registroId;
        this.api.alterar(value, this.registroId).subscribe(registro => {
            if (registro) {
                this.form.form.patchValue(registro);
            }
        }, error => {
            console.error(error);
            this.ShowMessageError();
        });
    }

    private criar() {
        this.api.criar(this.form.form.value).subscribe((registro) => {
            this.ShowMessageSuccess();
            this.limpar();
        }, error => {
            console.error(error);
            this.ShowMessageError();
        });
    }

    public limpar() {
        if (this.registroId) {
            this.abrirNovoRegistro();
        } else {
            this.form.resetForm();
        }
    }

    private abrirNovoRegistro() {
        this.router.navigate(['novo'], { relativeTo: this.route.parent });
    }

    public deletar() {
        this.api.deletar(this.registroId).subscribe(() => {
            this.ShowMessageDelete();
            this.limpar();
        }, error => {
            console.error(error);
            this.ShowMessageError();
        });
    }

    /**
     * @author Lucas
     * @description Método responsável por navegar até a rota de pesquisa
     */
    public voltarPesquisa() {
        this.router.navigate(['pesquisa'], { relativeTo: this.route.parent });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
