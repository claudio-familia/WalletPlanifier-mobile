import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { BaseService } from 'src/app/core/services/base.service';
import { Wallet } from 'src/app/models/wallet.model';
import { WalletService } from 'src/app/services/wallet.service';
import { Chart, registerables } from 'chart.js';
import * as Utils from '../../core/utils/utils';
import { DashboardService } from 'src/app/services/dashboard.service';
import { ActivatedRoute } from '@angular/router';

Chart.register(...registerables);

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

  @ViewChild("lineCanvas") lineCanvas: ElementRef;

  wallet: Wallet = null;
  showNoWalletMessage: boolean = false;
  lineChart: Chart;
  chartData = {
    labels: [],
    values: []
  }

  constructor(private walletService: WalletService, 
              private loadingService: LoadingController,
              private dashboardService: DashboardService,
              private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    this.activatedRoute.params.subscribe(
      async res => {
        if(this.lineChart) {
          this.lineChart.destroy();
          this.chartData = {
            labels: [],
            values: []
          }
        }
        await this.init();
      }
    )
  }

  private async init() {
    await this.getWallet();

    await this.getChartData();

    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: this.chartData.labels,
        datasets: [{
          label: 'Wallet historic Chart',
          data: this.chartData.values,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        }]
      },
    });
  }

  private async getChartData() {
    await this.dashboardService.getWallet().toPromise().then(
      res => {
        res.reverse().map(item => {
          this.chartData.labels.push(item.date);
          this.chartData.values.push(item.value);
        });
      }
    );
  }

  private async getWallet() {
    const loading = await this.loadingService.create();

    loading.present();

    await this.walletService.get().toPromise()
      .then(res => {
        if (res && res.length > 0)
          this.wallet = res[0];
        else
          this.showNoWalletMessage = true;
      }).finally(() => { loading.dismiss() });
  }
}
