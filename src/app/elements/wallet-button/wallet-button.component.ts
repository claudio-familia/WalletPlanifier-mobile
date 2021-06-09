import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'wallet-button',
  templateUrl: './wallet-button.component.html',
  styleUrls: ['./wallet-button.component.scss'],
})
export class WalletButtonComponent implements OnInit {

  @Input() title: string;
  @Input() styleType: string;

  @Output() callback = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  invoke(): void {
    this.callback.emit(null);
  }
}
