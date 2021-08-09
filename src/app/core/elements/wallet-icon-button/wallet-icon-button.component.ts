import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'wallet-icon-button',
  templateUrl: './wallet-icon-button.component.html',
  styleUrls: ['./wallet-icon-button.component.scss']
})
export class WalletIconButtonComponent implements OnInit {

  @Input() iconPath: string;

  @Output() callback = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  invoke(): void {
    this.callback.emit(null);
  }

}
