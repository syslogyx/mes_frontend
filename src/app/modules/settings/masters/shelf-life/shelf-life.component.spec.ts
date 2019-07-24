import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelfLifeComponent } from './shelf-life.component';

describe('ShelfLifeComponent', () => {
  let component: ShelfLifeComponent;
  let fixture: ComponentFixture<ShelfLifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShelfLifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelfLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
