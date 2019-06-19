import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainTechComponent } from './domain-tech.component';

describe('DomainTechComponent', () => {
  let component: DomainTechComponent;
  let fixture: ComponentFixture<DomainTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomainTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
