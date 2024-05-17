import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'home',
    loadChildren: () => import('./home/home.module').then(_ => _.HomeModule)
  },

  {
    path:'schuelerliste',
    loadChildren: () => import('../libs/dashboard/feature-schueler/schueler.module').then(_ => _.FeatureSchuelerModule),
  },

  {
    path:'lehrerliste',
    loadChildren: () => import('../libs/dashboard/feature-lehrer/lehrer-list.module').then(_ => _.FeatureLehrerModule),
  },

  { 
    //wenn der Benutzer komische Adresse eingetragen hat, soll zur Home weitergeleitet werden
    path: '**', 
    redirectTo: 'home' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
