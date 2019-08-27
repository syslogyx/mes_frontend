import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JetmanLoaderComponent } from './jetman-loader.component';

describe('JetmanLoaderComponent', () => {
  let component: JetmanLoaderComponent;
  let fixture: ComponentFixture<JetmanLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JetmanLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JetmanLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
