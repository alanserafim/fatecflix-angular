import { CadastrarCursoComponent } from './cadastrar-curso/cadastrar-curso.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarCursosComponent } from './listar-cursos/listar-cursos.component';

const routes: Routes = [
  {
    path: 'cadastrar',
    component: CadastrarCursoComponent
  },
  {
    path: 'listar',
    component: ListarCursosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
