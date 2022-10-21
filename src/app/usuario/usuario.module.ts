import { SucessoModule } from './../componentes/sucesso/sucesso.module';
import { FooterModule } from './../componentes/footer/footer.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

import { HeaderModule } from '../componentes/header/header.module';
import { MessagesModule } from '../componentes/messages/messages.module';
import { HomeModule } from '../home/home.module';
import { LoginComponent } from './login/login.component';
import { NovoUsuarioCadastroComponent } from './novo-usuario-cadastro/novo-usuario-cadastro.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { SucessoRequisicaoComponent } from './sucesso-requisicao/sucesso-requisicao.component';


@NgModule({
  declarations: [
    LoginComponent,
    NovoUsuarioCadastroComponent,
    PerfilUsuarioComponent,
    SucessoRequisicaoComponent
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
    MatListModule
  ]
})
export class UsuarioModule { }
