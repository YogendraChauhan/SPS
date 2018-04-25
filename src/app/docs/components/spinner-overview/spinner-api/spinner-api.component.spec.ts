import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerApiComponent } from './spinner-api.component';

describe('SpinnerApiComponent', () => {
  let component: SpinnerApiComponent;
  let fixture: ComponentFixture<SpinnerApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
