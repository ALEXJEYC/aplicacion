import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuCincoPageRoutingModule } from './menu-cinco-routing.module';

import { MenuCincoPage } from './menu-cinco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuCincoPageRoutingModule
  ],
  declarations: [MenuCincoPage]
})
export class MenuCincoPageModule {}
