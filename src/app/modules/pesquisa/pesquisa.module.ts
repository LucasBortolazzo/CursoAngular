import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';

import { PesquisaComponent } from './pesquisa.component';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        FormsModule,
        MaterialModule,
    ],
    exports: [],
    declarations: [PesquisaComponent],
    providers: [],
})
export class PesquisaModule { }
