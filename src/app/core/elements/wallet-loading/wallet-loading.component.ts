import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wallet-loading',
  templateUrl: './wallet-loading.component.html',
  styleUrls: ['./wallet-loading.component.scss'],
})
export class WalletLoadingComponent implements OnInit {

  @Input() show: boolean = false; 

  constructor() { }

  ngOnInit() {}

}
