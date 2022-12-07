import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoursesModule } from '../courses/courses.module';
import { HomeModule } from '../home/home.module';
import { SharedModule } from './../shared/shared.module';
import { AtualizarUsuarioComponent } from './atualizar-usuario/atualizar-usuario.component';
import { HistoricoUsuarioComponent } from './historico-usuario/historico-usuario.component';
import { LoginComponent } from './login/login.component';
import { NovoUsuarioCadastroComponent } from './novo-usuario-cadastro/novo-usuario-cadastro.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { SucessoRequisicaoComponent } from './sucesso-requisicao/sucesso-requisicao.component';
import { UsuarioDeleteComponent } from './usuario-delete/usuario-delete.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioRoutingModule } from './usuario-routing.module';

//import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    LoginComponent,
    NovoUsuarioCadastroComponent,
    PerfilUsuarioComponent,
    SucessoRequisicaoComponent,
    UsuarioListComponent,
    UsuarioDeleteComponent,
    AtualizarUsuarioComponent,
    HistoricoUsuarioComponent,
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    HomeModule,
    CoursesModule,
    SharedModule
  ]
})
export class UsuarioModule { }
