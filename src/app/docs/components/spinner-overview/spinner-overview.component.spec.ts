import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerOverviewComponent } from './spinner-overview.component';

describe('SpinnerOverviewComponent', () => {
  let component: SpinnerOverviewComponent;
  let fixture: ComponentFixture<SpinnerOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
