import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeproductoPageRoutingModule } from './homeproducto-routing.module';

import { HomeproductoPage } from './homeproducto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeproductoPageRoutingModule,

  ],
  declarations: [HomeproductoPage]
})
export class HomeproductoPageModule {}
