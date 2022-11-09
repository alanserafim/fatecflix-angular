import { CadastrarCursoComponent } from './cadastrar-curso/cadastrar-curso.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarCursosComponent } from './listar-cursos/listar-cursos.component';
import { DeletarCursoComponent } from './deletar-curso/deletar-curso.component';
import { AtualizarCursoComponent } from './atualizar-curso/atualizar-curso.component';
import { MatriculaComponent } from './matricula/matricula.component';
import { ExibirCursoComponent } from './exibir-curso/exibir-curso.component';
import { ExibirTrilhaCursoComponent } from './exibir-trilha-curso/exibir-trilha-curso.component';

const routes: Routes = [
  {
    path: 'cadastrar',
    component: CadastrarCursoComponent,
  },
  {
    path: 'listar',
    component: ListarCursosComponent,
  },
  {
    path: 'trilha',
    component: ExibirTrilhaCursoComponent,
  },
  {
    path: 'deletar/:id',
    component: DeletarCursoComponent,
  },
  {
    path: 'atualizar/:id',
    component: AtualizarCursoComponent,
  },
  {
    path: 'detalhar/:id',
    component: ExibirCursoComponent,
  },
  {
    path: 'matricula',
    component: MatriculaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
