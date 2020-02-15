import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateBarComponent } from './estimate-bar.component';

describe('EstimateBarComponent', () => {
  let component: EstimateBarComponent;
  let fixture: ComponentFixture<EstimateBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimateBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimateBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
