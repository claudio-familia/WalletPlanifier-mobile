import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'wallet-button',
  templateUrl: './wallet-button.component.html',
  styleUrls: ['./wallet-button.component.scss'],
})
export class WalletButtonComponent implements OnInit {

  @Input() title: string;
  @Input() styleType: string;  
  @Input() isFormButton: boolean = false;

  @Output() callback = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  invoke(): void {
    this.callback.emit(null);
  }

  public getStyleButton(){    
    switch(this.styleType){
      case 'success':
        return 'wallet-button-success';
      case 'danger' : 
        return 'wallet-button-danger';
      case 'dark' : 
        return 'wallet-button-dark';
      default: 
        return 'wallet-button-primary'
    }
  }
}
