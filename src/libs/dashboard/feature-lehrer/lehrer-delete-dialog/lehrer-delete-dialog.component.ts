import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LehrerFacade } from 'src/libs/domain/application/lehrer/lehrer.facade';

@Component({
  selector: 'app-lehrer-delete-dialog',
  templateUrl: './lehrer-delete-dialog.component.html',
  styleUrls: ['./lehrer-delete-dialog.component.css']
})

export class LehrerDeleteDialogComponent {
  @Input()
  vorname: string = "";

  @Input()
  nachname: string = "";

  @Input()
  id: string = "";

  constructor(
    @Inject(MAT_DIALOG_DATA)
      public data: any,
      private dialogRef: MatDialogRef<LehrerDeleteDialogComponent>,
      private router: Router,
      private lehrerFacade: LehrerFacade
  ){}

  lehrerNichtLoeschen(): void {
    this.dialogRef.close();
  }
  
  lehrerLoeschen(): void {
    this.lehrerFacade.deleteLehrerById(this.data.id);
    this.dialogRef.close();
    this.router.navigate(['/lehrerliste']);
  }
}
