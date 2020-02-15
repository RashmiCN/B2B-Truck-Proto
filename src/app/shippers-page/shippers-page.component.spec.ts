import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippersPageComponent } from './shippers-page.component';

describe('ShippersPageComponent', () => {
  let component: ShippersPageComponent;
  let fixture: ComponentFixture<ShippersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
