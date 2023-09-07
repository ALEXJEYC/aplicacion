import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuSeisPage } from './menu-seis.page';

const routes: Routes = [
  {
    path: '',
    component: MenuSeisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuSeisPageRoutingModule {}
