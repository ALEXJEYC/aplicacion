import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuCincoPage } from './menu-cinco.page';

const routes: Routes = [
  {
    path: '',
    component: MenuCincoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuCincoPageRoutingModule {}
