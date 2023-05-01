import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginActivatedGuard } from './../services/guarda-rotas/login-activated.guard';
import { LandingComponent } from './landing/landing.component';
import { LoginHomeComponent } from './login/login.component';
import { NovoUsuarioCadastroHomeComponent } from './novo-usuario-cadastro/novo-usuario-cadastro.component';
import { AcessibilidadeComponent } from './acessibilidade/acessibilidade.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'login',
    component: LoginHomeComponent,
    canActivate : [LoginActivatedGuard]
  },
  {
    path: 'cadastro',
    component: NovoUsuarioCadastroHomeComponent,
    canActivate : [LoginActivatedGuard]
  },
  {
    path: 'acessibilidade',
    component: AcessibilidadeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
