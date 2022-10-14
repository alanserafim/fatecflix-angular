import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { MessagesModule } from './../componentes/messages/messages.module';
import { HomeModule } from './../home/home.module';
import { LoginComponent } from './login/login.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { PersonalDataRoutingModule } from './personal-data-routing.module';
import { SignupComponent } from './signup/signup.component';
import { SucessComponent } from './sucess/sucess.component';



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
