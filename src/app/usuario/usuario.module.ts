import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';

import { HeaderModule } from '../componentes/header/header.module';
import { MessagesModule } from '../componentes/messages/messages.module';
import { CoursesModule } from '../courses/courses.module';
import { MatriculaComponent } from '../courses/matricula/matricula.component';
import { HomeModule } from '../home/home.module';
import { FooterModule } from './../componentes/footer/footer.module';
import { SucessoModule } from './../componentes/sucesso/sucesso.module';
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
    MatTableModule,
    MatPaginatorModule,
    CoursesModule
  ]
})
export class UsuarioModule { }
