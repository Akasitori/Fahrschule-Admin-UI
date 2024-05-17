import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LehrerFacade } from 'src/libs/domain/application/lehrer/lehrer.facade';
import { NeuerLehrer } from 'src/libs/domain/entities/lehrer/lehrer';

@Component({
  selector: 'app-neue-lehrer-hinzufuegen',
  templateUrl: './neue-lehrer-hinzufuegen.component.html',
  styleUrls: ['./neue-lehrer-hinzufuegen.component.css']
})
export class NeueLehrerHinzufuegenComponent {

  newLehrerFormular: FormGroup = new FormGroup({});
  
  /*Inputs*/
  bearbeitenDeaktiviert = true;
  bearbeitungsmodusAktiv = false;
  bearbeitenButtonDeaktiviert = true;

  constructor(
    private lehrerFacade: LehrerFacade,
    private formBuilder: FormBuilder,
    private router: Router
  ){}

  ngOnInit(){
    this.initialisiereFormular();
  }

  initialisiereFormular(){
    this.newLehrerFormular = this.formBuilder.group({
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
      fuehrerscheinklasse: [''],
      zertifikate : ['', Validators.required]
    })
  }

  get formControls(){
    return this.newLehrerFormular.controls;
  }

  speichernNeuerLehrer(){
    const formWerte = this.newLehrerFormular.value;
      var newLehrer: NeuerLehrer = {
        vorname: formWerte.vorname,
        nachname: formWerte.nachname,
        geschlecht: formWerte.geschlecht,
        geburtsdatum: formWerte.geburtsdatum,
        adresse: {
          strasse: formWerte.strasse,
          stadt: formWerte.stadt,
          hausNr: formWerte.hausNr,
          plz: formWerte.plz
        },
        kontaktdaten: {
          tel: formWerte.tel,
          email: formWerte.email
        },
        zertifizierterFahrlehrer:formWerte.zertifikate,
      }

      this.lehrerFacade.createNewLehrer(newLehrer);
      this.router.navigate(['/home']);
  }

  Abbrechen(){
    this.router.navigate(['/home']);
  }
  
}
