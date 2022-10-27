import { CommonModule } from '@angular/common';
//import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';

import { HeaderModule } from '../componentes/header/header.module';
import { MessagesModule } from '../componentes/messages/messages.module';
import { HomeModule } from '../home/home.module';
import { FooterModule } from './../componentes/footer/footer.module';
import { SucessoModule } from './../componentes/sucesso/sucesso.module';
import { LoginComponent } from './login/login.component';
import { NovoUsuarioCadastroComponent } from './novo-usuario-cadastro/novo-usuario-cadastro.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { SucessoRequisicaoComponent } from './sucesso-requisicao/sucesso-requisicao.component';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioDeleteComponent } from './usuario-delete/usuario-delete.component';
import { AtualizarUsuarioComponent } from './atualizar-usuario/atualizar-usuario.component';


@NgModule({
  declarations: [
    LoginComponent,
    NovoUsuarioCadastroComponent,
    PerfilUsuarioComponent,
    SucessoRequisicaoComponent,
    UsuarioListComponent,
    UsuarioDeleteComponent,
    AtualizarUsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatButtonModule,
    HomeModule,
    MatIconModule,
    FormsModule,
    MessagesModule,
    ReactiveFormsModule,
    HeaderModule,
    FooterModule,
    SucessoModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule
  ]
})
export class UsuarioModule { }
