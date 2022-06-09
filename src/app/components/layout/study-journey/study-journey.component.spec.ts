import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyJourneyComponent } from './study-journey.component';

describe('StudyJourneyComponent', () => {
  let component: StudyJourneyComponent;
  let fixture: ComponentFixture<StudyJourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyJourneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
