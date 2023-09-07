import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuSeisPageRoutingModule } from './menu-seis-routing.module';

import { MenuSeisPage } from './menu-seis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuSeisPageRoutingModule
  ],
  declarations: [MenuSeisPage]
})
export class MenuSeisPageModule {}
