import { DashboardAulasComponent } from './dashboard-aulas/dashboard-aulas.component';
import { ListarAulasComponent } from './listar-aulas/listar-aulas.component';
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
  },
  {
    path: 'listar',
    component: ListarAulasComponent
  },
  {
    path: 'dashboard',
    component: DashboardAulasComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AulasRoutes { }
