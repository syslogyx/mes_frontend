import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoilsToProcessComponent } from './coils-to-process.component';

describe('CoilsToProcessComponent', () => {
  let component: CoilsToProcessComponent;
  let fixture: ComponentFixture<CoilsToProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoilsToProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoilsToProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
