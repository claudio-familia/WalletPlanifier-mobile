import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'wallet-back-button',
  templateUrl: './wallet-back-button.component.html',
  styleUrls: ['./wallet-back-button.component.scss'],
})
export class WalletBackButtonComponent implements OnInit {

  @Output() callback = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  invoke(): void {
    this.callback.emit(null);
  }
}
