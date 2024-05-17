import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lehrer-feedcard',
  templateUrl: './lehrer-feedcard.component.html',
  styleUrls: ['./lehrer-feedcard.component.css']
})
export class LehrerFeedcardComponent {

  @Input()
  vorname = "";
  
  @Input()
  nachname =""

  @Input()
  id = "";

  stars: number[] = [1, 2, 3, 4, 5];

}
