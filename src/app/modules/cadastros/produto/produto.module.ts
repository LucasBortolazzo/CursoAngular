import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// aplicação
import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoComponent } from './produto.component';

// material
import { MaterialModule } from '../../material.module';

// formulário
import { FormularioModule } from '../../formulario/formulario.module';

// pesquisa
import { PesquisaModule } from '../../pesquisa/pesquisa.module';

// ngx-mask
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
    declarations: [ProdutoComponent],
    imports: [
        CommonModule,
        ProdutoRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        FlexLayoutModule,
        FormularioModule,
        PesquisaModule,
        NgxMaskModule.forRoot(),
    ]
})
export class ProdutoModule { }
