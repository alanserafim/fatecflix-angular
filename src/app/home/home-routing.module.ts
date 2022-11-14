import { LoginGuard } from './../services/guarda-rotas/login.guard';
import { AuntenticacaoGuard } from './../services/guarda-rotas/auntenticacao.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent},
  {
    path: 'login',
    loadChildren:()=> import ('../usuario/usuario.module' ).then((m)=> m.UsuarioModule ),
    canLoad : [LoginGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
