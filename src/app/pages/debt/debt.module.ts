import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DebtPageRoutingModule } from './debt-routing.module';

import { DebtPage } from './debt.page';
import { CoreModule } from 'src/app/core/core.module';
import { DebtFormComponent } from './form/debt-form.component';
import { DebtDetailComponent } from './detail/debt-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DebtPageRoutingModule,
    CoreModule
  ],
  declarations: [DebtPage, DebtFormComponent, DebtDetailComponent]
})
export class DebtPageModule {}
