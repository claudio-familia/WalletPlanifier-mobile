import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncomeFormComponent } from './form/income-form.component';

import { IncomePage } from './income.page';

const routes: Routes = [
  {
    path: '',
    component: IncomePage
  },
  {
    path: 'create',
    component: IncomeFormComponent
  },
  {
    path: 'details/:id',
    component: IncomeFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncomePageRoutingModule {}
