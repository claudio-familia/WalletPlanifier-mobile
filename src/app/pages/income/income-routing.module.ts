import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncomeDetailComponent } from './detail/income-detail.component';
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
    path: 'edit/:id',
    component: IncomeFormComponent
  },
  {
    path: 'details/:id',
    component: IncomeDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncomePageRoutingModule {}
