import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryPitchListComponent } from './story-pitch-list.component';

describe('StoryPitchListComponent', () => {
  let component: StoryPitchListComponent;
  let fixture: ComponentFixture<StoryPitchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryPitchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryPitchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
