import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentFeedComponent } from './parent-feed.component';

describe('ParentFeedComponent', () => {
  let component: ParentFeedComponent;
  let fixture: ComponentFixture<ParentFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
