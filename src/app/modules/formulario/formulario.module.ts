import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

// aplicação
import { ErroPipe } from './pipes/erro.pipe';
import { CrudComponent } from './components/crud/crud.component';

// material
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [ErroPipe, CrudComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  exports: [
    ErroPipe,
    CrudComponent,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ]
})
export class FormularioModule { }
