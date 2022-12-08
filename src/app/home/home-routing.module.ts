import { NovoUsuarioCadastroHomeComponent } from './novo-usuario-cadastro/novo-usuario-cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginActivatedGuard } from './../services/guarda-rotas/login-activated.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginHomeComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
