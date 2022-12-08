import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AtualizarUsuarioComponent } from './atualizar-usuario/atualizar-usuario.component';
import { HistoricoUsuarioComponent } from './historico-usuario/historico-usuario.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { SucessoRequisicaoComponent } from './sucesso-requisicao/sucesso-requisicao.component';
import { UsuarioDeleteComponent } from './usuario-delete/usuario-delete.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'perfil'
  },
  {
    path: 'perfil',
    component: PerfilUsuarioComponent
  },
  {
    path: 'sucesso',
    component: SucessoRequisicaoComponent
  },
  {
    path: 'lista',
    component: UsuarioListComponent
  },
  {
    path: 'deletar/:id',
    component: UsuarioDeleteComponent
  },
  {
    path: 'atualizar/:id',
    component: AtualizarUsuarioComponent
  },
  {
    path: 'historico',
    component: HistoricoUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
