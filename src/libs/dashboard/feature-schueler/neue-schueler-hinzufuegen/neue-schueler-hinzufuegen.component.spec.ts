import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeueSchuelerHinzufuegenComponent } from './neue-schueler-hinzufuegen.component';

describe('NeueSchuelerHinzufuegenComponent', () => {
  let component: NeueSchuelerHinzufuegenComponent;
  let fixture: ComponentFixture<NeueSchuelerHinzufuegenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NeueSchuelerHinzufuegenComponent]
    });
    fixture = TestBed.createComponent(NeueSchuelerHinzufuegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
