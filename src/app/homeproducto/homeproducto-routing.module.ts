import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeproductoPage } from './homeproducto.page';

const routes: Routes = [
  {
    path: '',
    component: HomeproductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeproductoPageRoutingModule {}
