import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-email-registration',
  templateUrl: './email-registration.page.html',
  styleUrls: ['./email-registration.page.scss'],
})
export class EmailRegistrationPage implements OnInit {
  private regForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
