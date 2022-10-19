import { SucessoRequisicaoComponent } from './sucesso-requisicao/sucesso-requisicao.component';
import { NovoUsuarioCadastroComponent } from './novo-usuario-cadastro/novo-usuario-cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';

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
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
