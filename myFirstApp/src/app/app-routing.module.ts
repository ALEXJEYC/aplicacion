import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: ':nombre/home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'menu-dos',
    loadChildren: () => import('./pages/menu-dos/menu-dos.module').then( m => m.MenuDosPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./pages/registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./pages/recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: 'revisar',
    loadChildren: () => import('./pages/revisar/revisar.module').then( m => m.RevisarPageModule)
  },
  {
    path: 'menu-tres',
    loadChildren: () => import('./pages/menu-tres/menu-tres.module').then( m => m.MenuTresPageModule)
  },
  {
    path: 'menu-cuatro',
    loadChildren: () => import('./pages/menu-cuatro/menu-cuatro.module').then( m => m.MenuCuatroPageModule)
  },
  {
    path: 'menu-cinco',
    loadChildren: () => import('./pages/menu-cinco/menu-cinco.module').then( m => m.MenuCincoPageModule)
  },
  {
    path: 'menu-seis',
    loadChildren: () => import('./pages/menu-seis/menu-seis.module').then( m => m.MenuSeisPageModule)
  },







];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
