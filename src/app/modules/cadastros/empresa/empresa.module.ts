import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// aplicação
import { EmpresaRoutingModule } from './empresa-routing.module';
import { EmpresaComponent } from './empresa.component';

// material
import { MaterialModule } from '../../material.module';

// formulario
import { FormularioModule } from '../../formulario/formulario.module';

// pesquisa
import { PesquisaModule } from '../../pesquisa/pesquisa.module';


@NgModule({
  declarations: [EmpresaComponent],
  imports: [
    CommonModule,
    EmpresaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    FormularioModule,
    PesquisaModule,
  ]
})
export class EmpresaModule { }
