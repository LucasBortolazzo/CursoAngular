import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

// shared
import { ProdutoService } from 'src/app/services/produto.service';

// aplicação
import { SOMENTE_LETRAS, SOMENTE_LETRAS_NUMEROS_ESPACO, SOMENTE_URL } from './validators/produto-cadastro.validator';

@Component({
    selector: 'app-produto',
    templateUrl: './produto.component.html',
    styleUrls: ['./produto.component.css'],
})
export class ProdutoComponent {

    public form: FormGroup;

    constructor(
        private fb: FormBuilder,
        public service: ProdutoService
    ) {
        this.criarForm();
    }

    /**
     * @author Lucas
     * @description Método responsável por criar o formulário
     */
    public criarForm(): void {
        this.form = this.fb.group({
            nome: [null, Validators.compose([Validators.required, Validators.pattern(SOMENTE_LETRAS),
            Validators.minLength(3), Validators.maxLength(100)])],
            marca: [null, Validators.compose([Validators.required, Validators.pattern(SOMENTE_LETRAS),
            Validators.minLength(3), Validators.maxLength(100)])],
            codigoBarra: [null, Validators.compose([Validators.pattern(SOMENTE_LETRAS_NUMEROS_ESPACO),
            Validators.maxLength(40)])],
            preco: [null, Validators.compose([Validators.required, Validators.maxLength(16)])],
            imagem: [null, Validators.compose([Validators.required, Validators.pattern(SOMENTE_URL),
            Validators.maxLength(1000)])],
        });
    }

    public get nome() {
        return this.form.get('nome');
    }

    public get marca() {
        return this.form.get('marca');
    }

    public get codigoBarra() {
        return this.form.get('codigoBarra');
    }

    public get preco() {
        return this.form.get('preco');
    }

    public get imagem() {
        return this.form.get('imagem');
    }
}

