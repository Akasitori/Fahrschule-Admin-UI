import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-schueler-feedcard',
  templateUrl: './schueler-feedcard.component.html',
  styleUrls: ['./schueler-feedcard.component.css']
})
export class SchuelerFeedcardComponent {

  @Input()
  vorname = "Behnoush";
  
  @Input()
  nachname ="Tasharrofi"

  @Input()
  status = "Theorie Bestanden";

  @Input()
  geschlecht = "";

  @Input()
  id = "22";

}
