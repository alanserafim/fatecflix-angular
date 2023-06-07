import { DialogComponent } from './login/dialog/dialog.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { LandingComponent } from './landing/landing.component';
import { LoginHomeComponent } from './login/login.component';
import { NovoUsuarioCadastroHomeComponent } from './novo-usuario-cadastro/novo-usuario-cadastro.component';
import { AcessibilidadeComponent } from './acessibilidade/acessibilidade.component';

@NgModule({
  declarations: [
    LoginHomeComponent,
    NovoUsuarioCadastroHomeComponent,
    LandingComponent,
    AcessibilidadeComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  exports:[]
})
export class HomeModule { }
