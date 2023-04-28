import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuntenticacaoGuard } from './services/guarda-rotas/auntenticacao.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/homepage/homepage.module').then((m) => m.HomepageModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/usuario-page/usuario-page.module').then((m) => m.UsuarioPageModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule),
    canLoad: [AuntenticacaoGuard],
  },
  {
path: 'acessibilidade',
loadChildren: ()=>
import('./pages/acessibilidade/acessibilidade.module').then((m) => m.AcessibilidadeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
