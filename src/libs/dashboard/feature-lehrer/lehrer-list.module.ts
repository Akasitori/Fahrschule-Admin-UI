import { NgModule } from '@angular/core';
import { LehrerDeleteDialogComponent } from './lehrer-delete-dialog/lehrer-delete-dialog.component';
import { LehrerFeedcardComponent } from './lehrer-feedcard/lehrer-feedcard.component';
import { LehrerKontaktdatenComponent } from './lehrer-kontaktdaten/lehrer-kontaktdaten.component';
import { LehrerlistRouterModule } from './lehrer-list.routes';
import { FeatureLehrerComponent } from './lehrer-list/lehrer-list.component';
import { NeueLehrerHinzufuegenComponent } from './neue-lehrer-hinzufuegen/neue-lehrer-hinzufuegen.component';

//Material
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
    imports:[
        LehrerlistRouterModule,
        ReactiveFormsModule,
        CommonModule,

        //Material
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatMomentDateModule,
        MatSelectModule,
        MatOptionModule
    ],
    
    declarations:[
        FeatureLehrerComponent,
        LehrerKontaktdatenComponent,
        LehrerFeedcardComponent,
        LehrerKontaktdatenComponent,
        NeueLehrerHinzufuegenComponent,
        LehrerDeleteDialogComponent,
    ]
})

export class FeatureLehrerModule {}