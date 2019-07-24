import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShrinkAgeComponent } from './shrink-age.component';

describe('ShrinkAgeComponent', () => {
  let component: ShrinkAgeComponent;
  let fixture: ComponentFixture<ShrinkAgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShrinkAgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShrinkAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
