import { MenuCursosComponent } from './menu-cursos/menu-cursos.component';
import { CadastrarCursoComponent } from './cadastrar-curso/cadastrar-curso.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarCursosComponent } from './listar-cursos/listar-cursos.component';
import { DeletarCursoComponent } from './deletar-curso/deletar-curso.component';
import { AtualizarCursoComponent } from './atualizar-curso/atualizar-curso.component';
import { MatriculaComponent } from './matricula/matricula.component';
import { ExibirCursoComponent } from './exibir-curso/exibir-curso.component';
import { ExibirTrilhaCursoComponent } from './exibir-trilha-curso/exibir-trilha-curso.component';
import { GridCursosComponent } from './grid-cursos/grid-cursos.component';
import { BreadcrumbModule } from 'angular-crumbs';

const routes: Routes = [
  {
    path: 'cadastrar',
    component: CadastrarCursoComponent,
  },
  {
    path: 'listar', data: {breadcrumb: "listar"},
    component: ListarCursosComponent,
  },
  {
    path: 'listar/:categoria',
    component: GridCursosComponent,
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
    path: 'detalhar/:id', data: {breadcrumb: "detalhar"},
    component: ExibirCursoComponent,
  },
  {
    path: 'matricula',
    component: MatriculaComponent,
  },
  {
    path: 'menu',
    component: MenuCursosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
