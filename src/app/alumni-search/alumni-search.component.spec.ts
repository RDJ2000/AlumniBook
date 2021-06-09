import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniSearchComponent } from './alumni-search.component';

describe('AlumniSearchComponent', () => {
  let component: AlumniSearchComponent;
  let fixture: ComponentFixture<AlumniSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumniSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumniSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
