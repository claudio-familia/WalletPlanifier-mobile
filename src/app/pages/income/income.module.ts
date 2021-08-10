import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncomePageRoutingModule } from './income-routing.module';

import { IncomePage } from './income.page';
import { IncomeFormComponent } from './form/income-form.component';
import { CoreModule } from 'src/app/core/core.module';
import { IncomeDetailComponent } from './detail/income-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncomePageRoutingModule,
    CoreModule
  ],
  declarations: [IncomePage, IncomeFormComponent, IncomeDetailComponent]
})
export class IncomePageModule {}
