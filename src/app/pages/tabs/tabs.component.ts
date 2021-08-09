import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {

  constructor(private router: Router) { }

  goToHome(): void {
    this.router.navigate(['home']);
  }

  goToReports(): void {
    this.router.navigate(['']);
  }

  goToWallet(): void {
    this.router.navigate(['wallet']);
  }

}