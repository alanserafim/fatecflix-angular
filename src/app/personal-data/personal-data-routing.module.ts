import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SucessComponent } from './sucess/sucess.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'cadastro',
    component: SignupComponent
  },
  {
    path: 'sucesso',
    component: SucessComponent
  },
  {
    path: 'novo-usuario',
    component: NovoUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalDataRoutingModule { }
