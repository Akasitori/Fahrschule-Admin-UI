import { Component, OnInit } from '@angular/core';
import { LehrerFacade } from 'src/libs/domain/application/lehrer/lehrer.facade';

@Component({
  selector: 'app-lehrer-list',
  templateUrl: './lehrer-list.component.html',
  styleUrls: ['./lehrer-list.component.css']
})

export class FeatureLehrerComponent implements OnInit{

  lehrerList$ = this.lehrerFacade.lehrerList$;

  constructor(
    private lehrerFacade : LehrerFacade
  ){}

  ngOnInit(): void {
    const test = this.lehrerFacade.getAllLehrer();
  }

}
