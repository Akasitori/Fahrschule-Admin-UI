import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LehrerFeedcardComponent } from './lehrer-feedcard.component';

describe('LehrerFeedcardComponent', () => {
  let component: LehrerFeedcardComponent;
  let fixture: ComponentFixture<LehrerFeedcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LehrerFeedcardComponent]
    });
    fixture = TestBed.createComponent(LehrerFeedcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
