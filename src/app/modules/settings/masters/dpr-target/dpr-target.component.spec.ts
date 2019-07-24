import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DprTargetComponent } from './dpr-target.component';

describe('DprTargetComponent', () => {
  let component: DprTargetComponent;
  let fixture: ComponentFixture<DprTargetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DprTargetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DprTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
