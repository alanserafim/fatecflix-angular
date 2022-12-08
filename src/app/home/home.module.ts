import { NovoUsuarioCadastroHomeComponent } from './novo-usuario-cadastro/novo-usuario-cadastro.component';
import { LoginHomeComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { CardComponent } from './homepage/card/card.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    HomepageComponent,
    CardComponent,
    LoginHomeComponent,
    NovoUsuarioCadastroHomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  exports:[]
})
export class HomeModule { }
