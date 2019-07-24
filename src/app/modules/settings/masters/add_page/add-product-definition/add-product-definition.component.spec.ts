import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductDefinitionComponent } from './add-product-definition.component';

describe('AddProductDefinitionComponent', () => {
  let component: AddProductDefinitionComponent;
  let fixture: ComponentFixture<AddProductDefinitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductDefinitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
