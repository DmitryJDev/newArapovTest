import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UkHomeComponent } from './uk-home/uk-home.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { UkHomePageComponent } from './uk-home/uk-home-page/uk-home-page.component';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: UkHomeComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' }, //new

      { path: 'home', component: UkHomePageComponent },
      {
        path: 'studying',
        loadChildren: () =>
          import('./uk-home/uk-studying/uk-studying.module').then(
            (m) => m.UkStudyingModule
          ),
      },
      {
        path: 'trading',
        loadChildren: () =>
          import('./uk-home/uk-trading/uk-trading.module').then(
            (m) => m.UkTradingModule
          ),
      },
      {
        path: 'crypto',
        loadChildren: () =>
          import('./uk-home/uk-crypto/uk-crypto.module').then(
            (m) => m.UkCryptoModule
          ),
      },
      {
        path: 'blog',
        loadChildren: () =>
          import('./uk-home/ukblog/ukblog.module').then((m) => m.UkblogModule),
      },
    ],
  },
];

@NgModule({
  declarations: [UkHomeComponent, UkHomePageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UkModuleModule {}
