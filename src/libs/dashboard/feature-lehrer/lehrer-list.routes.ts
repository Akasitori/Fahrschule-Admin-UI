import { RouterModule, Routes } from "@angular/router";
import { LehrerKontaktdatenComponent } from "./lehrer-kontaktdaten/lehrer-kontaktdaten.component";
import { FeatureLehrerComponent } from "./lehrer-list/lehrer-list.component";
import { NeueLehrerHinzufuegenComponent } from "./neue-lehrer-hinzufuegen/neue-lehrer-hinzufuegen.component";


const LEHRERLIST_ROUTES: Routes = [
    {
        path:'',
        component: FeatureLehrerComponent
    },
    {
        path:'kontaktdaten/:id',
        component: LehrerKontaktdatenComponent
    },
    {
        path:'neue-lehrer-hinzufuegen',
        component: NeueLehrerHinzufuegenComponent
    },
    {
        //wenn der Benutzer komische Adresse eingetragen hat, soll zur Home weitergeleitet werden
        path: '**',
        redirectTo: ''
    }
]

export const LehrerlistRouterModule = RouterModule.forChild(LEHRERLIST_ROUTES); 