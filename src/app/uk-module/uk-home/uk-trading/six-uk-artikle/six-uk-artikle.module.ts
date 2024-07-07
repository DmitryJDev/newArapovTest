import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUkSixComponent } from './home-uk-six/home-uk-six.component';

import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
const routes: Routes = [{ path: '', component: HomeUkSixComponent }];

@NgModule({
  declarations: [HomeUkSixComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SixUkArtikleModule {}
