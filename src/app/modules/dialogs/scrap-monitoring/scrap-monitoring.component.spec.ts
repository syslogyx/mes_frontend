import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrapMonitoringComponent } from './scrap-monitoring.component';

describe('ScrapMonitoringComponent', () => {
  let component: ScrapMonitoringComponent;
  let fixture: ComponentFixture<ScrapMonitoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrapMonitoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrapMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
