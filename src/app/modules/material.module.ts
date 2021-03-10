import { NgModule } from '@angular/core';
import {
    MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, MatCardModule, MatInputModule,
    MatFormFieldModule, MatSelectModule, MatMenuModule, MatTableModule, MatProgressBarModule, MatProgressSpinnerModule, MatDialogModule,
} from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatMenuModule,
        MatTableModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatMenuModule,
        MatTableModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatDialogModule,
    ]
})
export class MaterialModule {

}
