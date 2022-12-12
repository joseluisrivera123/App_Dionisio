import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomepersonaPageRoutingModule } from './homepersona-routing.module';

import { HomepersonaPage } from './homepersona.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomepersonaPageRoutingModule
  ],
  declarations: [HomepersonaPage]
})
export class HomepersonaPageModule {}
