import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { TabsComponent } from './pages/tabs/tabs.component';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/sign-up/sign-up.module').then(m => m.SignUpPageModule)
  },
  {
    path: '',
    component: TabsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
          }
        ]
      },    
      {
        path: 'wallet',
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            loadChildren: () => import('./pages/wallet/wallet.module').then(m => m.WalletPageModule)
          }
        ]
      },
      {
        path: 'reports',
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            loadChildren: () => import('./pages/reports/reports.module').then(m => m.ReportsPageModule)
          }
        ]
      }
    ],
  },
  {
    path: 'home',
    pathMatch: 'full',
    redirectTo: 'tabs'
  },
  {
    path: 'reports',
    loadChildren: () => import('./pages/reports/reports.module').then( m => m.ReportsPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
