import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailRegistrationPage } from './email-registration.page';

describe('EmailRegistrationPage', () => {
  let component: EmailRegistrationPage;
  let fixture: ComponentFixture<EmailRegistrationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailRegistrationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailRegistrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
