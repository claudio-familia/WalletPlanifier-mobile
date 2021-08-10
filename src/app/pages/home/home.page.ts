import { Component, OnInit } from '@angular/core';
import { Balance } from 'src/app/models/balance.model';
import { AuthService } from 'src/app/services/auth.service';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    public apiService: AuthService,
    private dashboardService: DashboardService
  ) { }

  secretData: any = null;
  balance: Balance = new Balance();

  ngOnInit() {
    this.getBalance();
  }

  async getData() {
    this.secretData = null;
 
    this.apiService.getSecretData().subscribe((res: any) => {      
      this.secretData = res;
    });
  }

  getBalance() {
    this.dashboardService.getBalance().subscribe((balance: Balance) => {
      this.balance = balance;
    });
  }
}
