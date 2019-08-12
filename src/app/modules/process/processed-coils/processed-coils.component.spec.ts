import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessedCoilsComponent } from './processed-coils.component';

describe('ProcessedCoilsComponent', () => {
  let component: ProcessedCoilsComponent;
  let fixture: ComponentFixture<ProcessedCoilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessedCoilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessedCoilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
