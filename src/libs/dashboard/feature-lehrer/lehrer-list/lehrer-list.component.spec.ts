import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureLehrerComponent } from './lehrer-list.component';

describe('FeatureLehrerComponent', () => {
  let component: FeatureLehrerComponent;
  let fixture: ComponentFixture<FeatureLehrerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeatureLehrerComponent]
    });
    fixture = TestBed.createComponent(FeatureLehrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
