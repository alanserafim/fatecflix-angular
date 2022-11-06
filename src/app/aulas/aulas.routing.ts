import { DashboardAulasComponent } from './dashboard-aulas/dashboard-aulas.component';
import { ListarAulasComponent } from './listar-aulas/listar-aulas.component';
import { ExibirAulaComponent } from './exibir-aula/exibir-aula.component';
import { CadastrarAulasComponent } from './cadastrar-aulas/cadastrar-aulas.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

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
