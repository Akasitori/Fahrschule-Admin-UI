import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LehrerKontaktdatenComponent } from './lehrer-kontaktdaten.component';

describe('LehrerKontaktdatenComponent', () => {
  let component: LehrerKontaktdatenComponent;
  let fixture: ComponentFixture<LehrerKontaktdatenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LehrerKontaktdatenComponent]
    });
    fixture = TestBed.createComponent(LehrerKontaktdatenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
