import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonApiComponent } from './button-api.component';

describe('ButtonApiComponent', () => {
  let component: ButtonApiComponent;
  let fixture: ComponentFixture<ButtonApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});