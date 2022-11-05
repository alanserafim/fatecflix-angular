import { ExibirAulaComponent } from './exibir-aula/exibir-aula.component';
import { CadastrarAulasComponent } from './cadastrar-aulas/cadastrar-aulas.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'cadastrar',
    component: CadastrarAulasComponent
  },
  {
    path: 'exibir',
    component: ExibirAulaComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AulasRoutes { }
