import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AtualizarAulasComponent } from './atualizar-aulas/atualizar-aulas.component';
import { CadastrarAulasComponent } from './cadastrar-aulas/cadastrar-aulas.component';
import { DashboardAulasComponent } from './dashboard-aulas/dashboard-aulas.component';
import { DeletaComentarioComponent } from './deleta-comentario/deleta-comentario.component';
import { DeletarAulasComponent } from './deletar-aulas/deletar-aulas.component';
import { ListarAulasComponent } from './dashboard-aulas/listar-aulas/listar-aulas.component';

const routes: Routes = [
  {
    path: 'cadastrar/:id',
    component: CadastrarAulasComponent
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
  {
    path: 'comentario/deletar/:id/curso/:cursoId',
    component: DeletaComentarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class AulasRoutes { }
