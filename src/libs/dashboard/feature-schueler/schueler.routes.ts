import { RouterModule, Routes } from '@angular/router';
import { FeatureSchuelerComponent } from './schueler-list/schueler-list.component';
import { SchuelerKontaktdatenComponent } from './schueler-kontaktdaten/schueler-kontaktdaten.component';
import { NeueSchuelerHinzufuegenComponent } from './neue-schueler-hinzufuegen/neue-schueler-hinzufuegen.component';

const SCHUELERLIST_ROUTES: Routes = [
    {
        path:'',
        component: FeatureSchuelerComponent
    },
    {
        path:'kontaktdaten/:id',
        component: SchuelerKontaktdatenComponent
    },
    {
        path:'neue-schueler-hinzufuegen',
        component: NeueSchuelerHinzufuegenComponent
    },
    {
        //wenn der Benutzer komische Adresse eingetragen hat, soll zur Home weitergeleitet werden
        path: '**',
        redirectTo: '' 
    },
]

export const SchulerlistRouterModule = RouterModule.forChild(SCHUELERLIST_ROUTES);