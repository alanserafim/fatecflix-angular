import { CadastrarAulasComponent } from './cadastrar-aulas/cadastrar-aulas.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'cadastrar',
    component: CadastrarAulasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AulasRoutes { }
