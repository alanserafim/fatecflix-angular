import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastrarAulasComponent } from './cadastrar-aulas/cadastrar-aulas.component';
import { DashboardAulasComponent } from './dashboard-aulas/dashboard-aulas.component';
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
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class AulasRoutes { }
