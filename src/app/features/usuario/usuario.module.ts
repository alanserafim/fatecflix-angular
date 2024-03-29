import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeModule } from '../../home/home.module';
import { SharedModule } from './../../shared/shared.module';
import { AtualizarUsuarioComponent } from './atualizar-usuario/atualizar-usuario.component';
import { HistoricoUsuarioComponent } from './historico-usuario/historico-usuario.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { SucessoRequisicaoComponent } from './sucesso-requisicao/sucesso-requisicao.component';
import { UsuarioDeleteComponent } from './usuario-delete/usuario-delete.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { CoursesModule } from '../courses/courses.module';

//import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
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
