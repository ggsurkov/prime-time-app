import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RazlivPage } from './razliv.page';

const routes: Routes = [
  {
    path: '',
    component: RazlivPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RazlivPageRoutingModule {}
