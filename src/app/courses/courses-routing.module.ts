import { CadastrarCursoComponent } from './cadastrar-curso/cadastrar-curso.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarCursosComponent } from './listar-cursos/listar-cursos.component';
import { DeletarCursoComponent } from './deletar-curso/deletar-curso.component';
import { AtualizarCursoComponent } from './atualizar-curso/atualizar-curso.component';

const routes: Routes = [
  {
    path: 'cadastrar',
    component: CadastrarCursoComponent
  },
  {
    path: 'listar',
    component: ListarCursosComponent
  },
  {
    path: 'deletar',
    component: DeletarCursoComponent
  },
  {
    path: 'atualizar',
    component: AtualizarCursoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
