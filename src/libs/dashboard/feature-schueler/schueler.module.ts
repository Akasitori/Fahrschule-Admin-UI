import { NgModule } from '@angular/core';
import { SchulerlistRouterModule } from './schueler.routes';
import { FeatureSchuelerComponent } from './schueler-list/schueler-list.component';
import { SchuelerFeedcardComponent } from './schueler-feedcard/schueler-feedcard.component'; 
import { SchuelerKontaktdatenComponent } from './schueler-kontaktdaten/schueler-kontaktdaten.component';
import { NeueSchuelerHinzufuegenComponent } from './neue-schueler-hinzufuegen/neue-schueler-hinzufuegen.component';

//Material
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import { NeueSchuelerFeedcardComponent } from './neue-schueler-feedcard/neue-schueler-feedcard.component'; 
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { SchuelerDeleteDialogComponent } from './schueler-delete-dialog/schueler-delete-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
    imports:[
        SchulerlistRouterModule,

        //Material
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatDatepickerModule,
        MatNativeDateModule, 
        MatMomentDateModule,
        MatIconModule,
        MatSelectModule,
        MatFormFieldModule,
        MatTabsModule,
        HttpClientModule,
        CommonModule,
        MatDialogModule
    ],
    
    declarations:[
        FeatureSchuelerComponent,
        SchuelerFeedcardComponent,
        SchuelerKontaktdatenComponent,
        NeueSchuelerHinzufuegenComponent,
        NeueSchuelerFeedcardComponent,
        SchuelerDeleteDialogComponent,
    ]
})

export class FeatureSchuelerModule {}