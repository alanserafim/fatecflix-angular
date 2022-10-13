import { MessagesModule } from './../componentes/messages/messages.module';
import { HomeModule } from './../home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalDataRoutingModule } from './personal-data-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { SucessComponent } from './sucess/sucess.component';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    SucessComponent,
    NovoUsuarioComponent,
  ],
  imports: [
    CommonModule,
    PersonalDataRoutingModule,
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
    ReactiveFormsModule
  ]
})
export class PersonalDataModule { }
