import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LehrerDeleteDialogComponent } from './lehrer-delete-dialog.component';

describe('LehrerDeleteDialogComponent', () => {
  let component: LehrerDeleteDialogComponent;
  let fixture: ComponentFixture<LehrerDeleteDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LehrerDeleteDialogComponent]
    });
    fixture = TestBed.createComponent(LehrerDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
