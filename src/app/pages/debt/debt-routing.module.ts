import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DebtPage } from './debt.page';
import { DebtFormComponent } from './form/debt-form.component';

const routes: Routes = [
  {
    path: '',
    component: DebtPage
  },
  {
    path: 'create',
    component: DebtFormComponent
  },
  {
    path: 'details/:id',
    component: DebtFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DebtPageRoutingModule {}
