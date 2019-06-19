import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEodListComponent } from './user-eod-list.component';

describe('UserEodListComponent', () => {
  let component: UserEodListComponent;
  let fixture: ComponentFixture<UserEodListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEodListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
