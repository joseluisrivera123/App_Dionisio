import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepersonaPage } from './homepersona.page';

const routes: Routes = [
  {
    path: '',
    component: HomepersonaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepersonaPageRoutingModule {}
