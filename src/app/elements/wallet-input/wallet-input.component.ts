import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wallet-input',
  templateUrl: './wallet-input.component.html',
  styleUrls: ['./wallet-input.component.scss']
})
export class WalletInputComponent implements OnInit {

  @Input() title: string;
  @Input() type: string;
  @Input() callback: any;

  inputType: string = '';
  showPassword: boolean = false

  constructor() { }

  ngOnInit() {
    this.inputType = this.type;
  }

  showOrHidePassword(): void {
    this.showPassword = !this.showPassword;

    this.inputType = this.showPassword ? 'text' : 'password';
  }
}
