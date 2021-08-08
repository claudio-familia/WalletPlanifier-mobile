import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wallet-input',
  templateUrl: './wallet-input.component.html',
  styleUrls: ['./wallet-input.component.scss']
})
export class WalletInputComponent implements OnInit {

  @Input() title: string;
  @Input() name: string;
  @Input() type: string;
  @Input() placeholder: string;
  @Input() value: string;
  @Input() isRequired: boolean = false;  
  @Output() callback: EventEmitter<any> = new EventEmitter<any>();  

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

  emitValue(){
    this.callback.emit(this.value);
  }
}
