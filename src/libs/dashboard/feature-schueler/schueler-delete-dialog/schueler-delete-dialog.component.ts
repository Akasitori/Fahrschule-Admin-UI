import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SchuelerFacade } from 'src/libs/domain/application/schueler/schueler.facade';

@Component({
  selector: 'app-schueler-delete-dialog',
  templateUrl: './schueler-delete-dialog.component.html',
  styleUrls: ['./schueler-delete-dialog.component.css']
})
export class SchuelerDeleteDialogComponent {

  @Input()
  vorname: string = "";

  @Input()
  nachname: string = "";

  @Input()
  id: string = "";

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    private dialogRef: MatDialogRef<SchuelerDeleteDialogComponent>,
    private router: Router,
    private schuelerFacade: SchuelerFacade
  ){

  }

  schuelerNichtLoeschen(): void {
    this.dialogRef.close();
  }

  schuelerLoeschen(): void {
    this.schuelerFacade.deleteSchuelerById(this.data.id);
    this.dialogRef.close();
    this.router.navigate(['/schuelerliste']);
  }

}
