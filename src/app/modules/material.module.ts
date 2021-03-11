import { NgModule } from '@angular/core';
import {
    MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, MatCardModule, MatInputModule,
    MatFormFieldModule, MatSelectModule, MatMenuModule, MatTableModule, MatProgressBarModule, MatProgressSpinnerModule,
    MatDialogModule, MatTooltipModule,
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
        MatTooltipModule,
    ]
})
export class MaterialModule {

}
