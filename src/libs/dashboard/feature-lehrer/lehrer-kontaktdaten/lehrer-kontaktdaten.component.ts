import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { LehrerFacade } from 'src/libs/domain/application/lehrer/lehrer.facade';
import { AktualisierterLehrer, Lehrer } from 'src/libs/domain/entities/lehrer/lehrer';
import { LehrerDeleteDialogComponent } from '../lehrer-delete-dialog/lehrer-delete-dialog.component';

@Component({
  selector: 'app-lehrer-kontaktdaten',
  templateUrl: './lehrer-kontaktdaten.component.html',
  styleUrls: ['./lehrer-kontaktdaten.component.css']
})
export class LehrerKontaktdatenComponent implements OnInit{
  
  id!: string;
  vorname!: string;
  nachname!: string;

  /*Inputs*/
  bearbeitenEingabeDeaktiviert = true;

  /*Knöpfe*/
  speichernDeaktiv = true;
  bearbeitungsmodusAktiv = false;
  bearbeitenButtonDeaktiviert = true;

  lehrerById$ = this.lehrerFacade.lehrerById$;
  lehrerKontaktdatenFormular: FormGroup = new FormGroup({});

  constructor(
    private lehrerFacade: LehrerFacade,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ){}

  ngOnInit(): void {
    this.leseLehrerIdAusUrl();
    this.initialisiereFormular();
    this.holeLehrerKontaktdatenVonDb();
  }
  
  leseLehrerIdAusUrl() {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
    if (this.id !== ''){
      this.lehrerFacade.getLehrerById(this.id);
    }    
  }
  
  initialisiereFormular(){
    this.lehrerKontaktdatenFormular = this.formBuilder.group({
      vorname: ['', Validators.required],
      nachname: ['', Validators.required],
      geburtsdatum: ['', Validators.required],
      geschlecht: ['', Validators.required],
      strasse: ['', Validators.required],
      hausNr: ['', Validators.required],
      stadt: ['', Validators.required],
      plz: ['', Validators.required],
      tel: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      fuehrerscheinklasse : [''],
      zertifikate : ['', Validators.required]
    })
  }

  holeLehrerKontaktdatenVonDb(){
    this.lehrerById$.subscribe({
      next: (data) => {
        if (data != null){
          this.setzeWerteImFormular(data);
          this.ladeVornameUndNachnameDesLehrers(data);
          this.bearbeitenButtonDeaktiviert = false;
        }
      }
    })
  }

  setzeWerteImFormular(data: Lehrer) {
    this.lehrerKontaktdatenFormular.patchValue({
      vorname: data.vorname,
      nachname: data.nachname,
      geburtsdatum: data.geburtsdatum,
      geschlecht: data.geschlecht,
      strasse: data.adresse.strasse,
      hausNr: data.adresse.hausNr,
      stadt: data.adresse.stadt,
      plz: data.adresse.plz,
      tel: data.kontaktdaten.tel,
      email: data.kontaktdaten.email,
      fuehrerscheinklasse: data.fuererscheinklasse,
      zertifikate : data.zertifizierterFahrlehrer
    })
  }

  ladeVornameUndNachnameDesLehrers(data: Lehrer){
    this.vorname = data.vorname;
    this.nachname = data.nachname;
  }

  bearbeitungsAktiv(){
    this.bearbeitenEingabeDeaktiviert = false;
    this.bearbeitungsmodusAktiv = true;
  }

  bearbeitungsDeaktiv(){
    this.bearbeitenEingabeDeaktiviert = true;
    this.bearbeitungsmodusAktiv = false;
  }

  speichernKontaktdaten(){
    const formWerte = this.lehrerKontaktdatenFormular.value;

    const aktualisierterLehrer: AktualisierterLehrer = {
      id: this.id,
      vorname: formWerte.vorname,
      nachname: formWerte.nachname,
      geburtsdatum: formWerte.geburtsdatum,
      geschlecht: formWerte.geschlecht,
      adresse:{
        strasse: formWerte.strasse,
        hausNr: formWerte.hausNr,
        stadt: formWerte.stadt,
        plz: formWerte.plz,
      },
      kontaktdaten: {
        tel: formWerte.tel,
        email: formWerte.email,
      },
      fuererscheinklasse: formWerte.fuehrerscheinklasse,
      zertifizierterFahrlehrer: formWerte.zertifikate
    }
    console.log("Lehrer schmehrer sag ich da immer: ", aktualisierterLehrer);
    this.lehrerFacade.updateByAdminLehrer(aktualisierterLehrer);
    this.bearbeitungsDeaktiv();
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(
      LehrerDeleteDialogComponent,
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