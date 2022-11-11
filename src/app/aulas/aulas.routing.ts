import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizarAulasComponent } from './atualizar-aulas/atualizar-aulas.component';

import { CadastrarAulasComponent } from './cadastrar-aulas/cadastrar-aulas.component';
import { DashboardAulasComponent } from './dashboard-aulas/dashboard-aulas.component';
import { DeletarAulasComponent } from './deletar-aulas/deletar-aulas.component';
import { ExibirAulaComponent } from './exibir-aula/exibir-aula.component';
import { ListarAulasComponent } from './listar-aulas/listar-aulas.component';

const routes: Routes = [
  {
    path: 'cadastrar/:id',
    component: CadastrarAulasComponent
  },
  {
    path: 'exibir/:id',
    component: ExibirAulaComponent
  },
  {
    path: 'listar/:id',
    component: ListarAulasComponent
  },
  {
    path: 'dashboard/:id',
    component: DashboardAulasComponent
  },
  {
    path: 'atualizar/:id/cursos/:cursoId',
    component: AtualizarAulasComponent
  },
  {
    path: 'deletar/:id',
    component: DeletarAulasComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class AulasRoutes { }