import { Component, OnInit } from '@angular/core';
import AppButtonModel from 'src/elements/button/app-button-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  appButtonModel: AppButtonModel;

  constructor() { }

  ngOnInit() {
  }

}
