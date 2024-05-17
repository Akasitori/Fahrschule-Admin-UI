import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchuelerDeleteDialogComponent } from './schueler-delete-dialog.component';

describe('SchuelerDeleteDialogComponent', () => {
  let component: SchuelerDeleteDialogComponent;
  let fixture: ComponentFixture<SchuelerDeleteDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchuelerDeleteDialogComponent]
    });
    fixture = TestBed.createComponent(SchuelerDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
