import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRuSixteenComponent } from './home-ru-sixteen/home-ru-sixteen.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeRuSixteenComponent }];
@NgModule({
  declarations: [HomeRuSixteenComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SixteenRuArtickleModule {}
