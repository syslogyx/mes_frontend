import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DowntimeRegisterComponent } from './downtime-register.component';

describe('DowntimeRegisterComponent', () => {
  let component: DowntimeRegisterComponent;
  let fixture: ComponentFixture<DowntimeRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DowntimeRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DowntimeRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
