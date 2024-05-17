import { Component, OnInit } from '@angular/core';
import { SchuelerFacade } from 'src/libs/domain/application/schueler/schueler.facade';

@Component({
  selector: 'app-schueler-list',
  templateUrl: './schueler-list.component.html',
  styleUrls: ['./schueler-list.component.css']
})

export class FeatureSchuelerComponent implements OnInit{

  schuelersMitZuordnung$ = this.schuelerFacade.schuelersMitZuordnung$;
  schuelersOhneZuordnung$ = this.schuelerFacade.schuelersOhneZuordnung$;

  constructor(
    private schuelerFacade: SchuelerFacade){}

  ngOnInit(): void {
    this.schuelerFacade.getAllSchueler();
  }

}
