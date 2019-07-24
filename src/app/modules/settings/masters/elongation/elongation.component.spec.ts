import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElongationComponent } from './elongation.component';

describe('ElongationComponent', () => {
  let component: ElongationComponent;
  let fixture: ComponentFixture<ElongationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElongationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElongationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
