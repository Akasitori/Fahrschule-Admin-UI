import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SchuelerFacade } from 'src/libs/domain/application/schueler/schueler.facade';
import { AktualisierterSchueler, NeuerSchueler, Schueler } from 'src/libs/domain/entities/schueler/schueler';

@Component({
  selector: 'app-neue-schueler-hinzufuegen',
  templateUrl: './neue-schueler-hinzufuegen.component.html',
  styleUrls: ['./neue-schueler-hinzufuegen.component.css']
})

export class NeueSchuelerHinzufuegenComponent {

  fuehrerscheinklassen = new FormControl('');
  fuehrerscheinklassenList: string[] = ['PKW', 'Motorad', 'LKW', 'Bus'];

  newSchuelerFormular: FormGroup = new FormGroup({});
  
  /*Inputs*/
  bearbeitenDeaktiviert = true;
  bearbeitungsmodusAktiv = false;
  bearbeitenButtonDeaktiviert = true;

  constructor(
    private schuelerFacade: SchuelerFacade,
    private formBuilder: FormBuilder,
    private router: Router
  ){}

  ngOnInit(){
    this.initialisiereFormular();
  }

  initialisiereFormular(){
    this.newSchuelerFormular = this.formBuilder.group({
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
      datumDerAnmeldung: ['', Validators.required],
      status: ['', Validators.required],
      fuehrerscheinklassen: ['', Validators.required],
      getriebeTyp: ['', Validators.required],
      lehrerId: ['', Validators.required]
    })
  }

  get formControls(){
    return this.newSchuelerFormular.controls;
  }


  speichernNewSchueler(){
    
    const formWerte = this.newSchuelerFormular.value;
      var newSchueler: NeuerSchueler = {
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
  
      if(newSchueler.lehrerId == ""){
        newSchueler.lehrerId = null;
      }
  
      this.schuelerFacade.createNewSchueler(newSchueler);
      this.router.navigate(['/home']);
  }

  Abbrechen(){
    this.router.navigate(['/home']);
  }

}
