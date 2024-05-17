import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { LehrerFacade } from 'src/libs/domain/application/lehrer/lehrer.facade';
import { SchuelerFacade } from 'src/libs/domain/application/schueler/schueler.facade';
import { AktualisierterSchueler, Schueler } from 'src/libs/domain/entities/schueler/schueler';
import { SchuelerDeleteDialogComponent } from '../schueler-delete-dialog/schueler-delete-dialog.component';

@Component({
  selector: 'app-schueler-kontaktdaten',
  templateUrl: './schueler-kontaktdaten.component.html',
  styleUrls: ['./schueler-kontaktdaten.component.css']
})

export class SchuelerKontaktdatenComponent {

  private readonly destroy$ = new Subject();

  schuelerById$ = this.schuelerFacade.schuelerById$
  lehrerList$ = this.lehrerFacade.lehrerList$
  
  schuelerForm!: FormGroup;

  vorname!: string;
  nachname!: string;
  lehrerName!: string;
  id?: string;

  data: any;

  /*Inputs*/
  bearbeitenDeaktiviert = true;
  bearbeitungsmodusAktiv = false;
  bearbeitenButtonDeaktiviert = true;


  fuehrerscheinklassenList: string[] = ['PKW', 'Motorad', 'LKW', 'Bus'];

  constructor(
    private route: ActivatedRoute,
    private schuelerFacade: SchuelerFacade,
    private formBuilder: FormBuilder,
    private lehrerFacade: LehrerFacade,
    private dialog: MatDialog
  )
  {
    this.initForm();

    this.subscribeTo_schuelerById();
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      console.log('ID from URL:', id);
  
      // Check if id is not null before passing it to getSchuelerById
      if (id !== null) {
        this.schuelerFacade.getSchuelerById(id);
      } else {
        console.error('ID is null');
        // Handle the case where id is null (optional)
      }
    });
  }

  ngOnInit(){
    this.initForm();
    this.lehrerFacade.getAllLehrer();
  }

  ngOnDestroy(){
    this.unsubscribeFromAllSubscriptions();
  }

  initForm() {
    this.schuelerForm = this.formBuilder.group({
      vorname: ['', Validators.required],
      nachname: ['', Validators.required],
      geschlecht: ['', Validators.required],
      geburtsdatum: ['', Validators.required],

      strasse: ['', Validators.required],
      hausNr: ['', Validators.required],
      stadt: ['', Validators.required],
      plz: ['', Validators.required],

      tel: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],

      datumDerAnmeldung: ['', Validators.required],
      status: ['', Validators.required],
      fuehrerscheinklassen: ['', Validators.required],
      getriebeTyp: ['', Validators.required],

      lehrerId: ['', Validators.required],
      id: ['', Validators.required]

/*       lehrerName: [],
      id: ['', Validators.required], */
      // Add other form controls as needed
    });
  }

  setFormData(personData: Schueler) {
    //const geburtsdatum = this.aendereDatumZuKurzemDatum(personData.geburtsdatum);
    //const datumDerAnmeldung = this.aendereDatumZuKurzemDatum(personData.datumDerAnmeldung);
    this.schuelerForm.patchValue({
      vorname: personData.vorname,
      nachname: personData.nachname,
      geschlecht: personData.geschlecht,
      geburtsdatum: personData.geburtsdatum,

      strasse: personData.adresse.strasse,
      hausNr: personData.adresse.hausNr,
      stadt: personData.adresse.stadt,
      plz: personData.adresse.plz,

      tel: personData.kontaktdaten.tel,
      email: personData.kontaktdaten.email,

      datumDerAnmeldung: personData.datumDerAnmeldung,
      status: personData.status,
      fuehrerscheinklassen: personData.fuererscheinklasse,
      getriebeTyp: personData.getriebeTyp,

      lehrerId: personData.lehrerId,
      id: personData.id
    });
  }
  
  //nein, einfach nur nein
  aendereDatumZuKurzemDatum(datum: string | Date): string | null{
    const datePipe = new DatePipe('de-DE');
    return datePipe.transform(datum, 'MM/dd/yyyy');
  }

  private subscribeTo_schuelerById(){
    this.schuelerById$
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: data => {
        if(data != null){
          this.setFormData(data);
          this.vorname = data.vorname;
          this.nachname = data.nachname;
          this.bearbeitenButtonDeaktiviert = false;
          this.id = data.id;
        }
      }
    });
  }


  private unsubscribeFromAllSubscriptions(){
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  bearbeitungAktivieren(){
    this.bearbeitenDeaktiviert = false;
    this.bearbeitungsmodusAktiv = true;
  }

  bearbeitungDeaktivieren(){
    this.bearbeitenDeaktiviert = true;
    this.bearbeitungsmodusAktiv = false;
  }

  speichernKontaktdaten(){
    const formWerte = this.schuelerForm.value;
    const aktualisierterSchueler: AktualisierterSchueler = {
      id: formWerte.id,
      vorname: formWerte.vorname,
      nachname: formWerte.nachname,
      adresse: {
        strasse: formWerte.strasse,
        hausNr: formWerte.hausNr,
        stadt: formWerte.stadt,
        plz: formWerte.plz,
      },
      kontaktdaten: {
        tel: formWerte.tel,
        email: formWerte.email,
      },
      geschlecht: formWerte.geschlecht,
      geburtsdatum: formWerte.geburtsdatum,
      datumDerAnmeldung: formWerte.datumDerAnmeldung,
      status: formWerte.status,
      fuererscheinklasse: formWerte.fuehrerscheinklassen,
      getriebeTyp: formWerte.getriebeTyp,
      lehrerId: formWerte.lehrerId
    }

    if(aktualisierterSchueler.lehrerId == ""){
      aktualisierterSchueler.lehrerId = null;
    }

    aktualisierterSchueler.geburtsdatum = aktualisierterSchueler.geburtsdatum
    console.log("aktualisierter schueler; " , aktualisierterSchueler);
    this.schuelerFacade.updateByAdminSchueler(aktualisierterSchueler);
    this.bearbeitungDeaktivieren();
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(
      SchuelerDeleteDialogComponent,
      {
        width: '700px',
        data:{
          vorname: this.vorname,
          nachname: this.nachname,
          id: this.id
        }
      }
    );
  }

}
