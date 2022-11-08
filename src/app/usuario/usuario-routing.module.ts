import { SucessoRequisicaoComponent } from './sucesso-requisicao/sucesso-requisicao.component';
import { NovoUsuarioCadastroComponent } from './novo-usuario-cadastro/novo-usuario-cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioDeleteComponent } from './usuario-delete/usuario-delete.component';
import { AtualizarUsuarioComponent } from './atualizar-usuario/atualizar-usuario.component';
import { HistoricoUsuarioComponent } from './historico-usuario/historico-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'cadastro',
    component: NovoUsuarioCadastroComponent
  },
  {
    path: 'sucesso',
    component: SucessoRequisicaoComponent
  },
  {
    path: 'perfil',
    component: PerfilUsuarioComponent
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
