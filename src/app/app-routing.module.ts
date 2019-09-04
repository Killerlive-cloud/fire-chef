import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'mesas', loadChildren: './mesas/mesas.module#MesasPageModule' },
  { path: 'cocina', loadChildren: './cocina/cocina.module#CocinaPageModule' },
  { path: 'caja', loadChildren: './caja/caja.module#CajaPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
