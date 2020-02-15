import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInpageComponent } from './sign-inpage.component';

describe('SignInpageComponent', () => {
  let component: SignInpageComponent;
  let fixture: ComponentFixture<SignInpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
