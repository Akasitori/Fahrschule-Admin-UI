import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeueLehrerHinzufuegenComponent } from './neue-lehrer-hinzufuegen.component';

describe('NeueLehrerHinzufuegenComponent', () => {
  let component: NeueLehrerHinzufuegenComponent;
  let fixture: ComponentFixture<NeueLehrerHinzufuegenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NeueLehrerHinzufuegenComponent]
    });
    fixture = TestBed.createComponent(NeueLehrerHinzufuegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
