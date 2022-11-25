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


const routes: Routes = [
  {
    path: 'listar',
    component: ListarCursosComponent,
    data:{
      breadcrumb: 'Todos'
    },
    children:[ {
      path: 'listar/:categoria',
      component: GridCursosComponent,
      data:{
        breadcrumb: ':categoria'
      },
    },
    {
      path: 'cadastrar',
      component: CadastrarCursoComponent,
      data:{
        breadcrumb: 'cadastro'
      },
    },
    {
      path: 'trilha',
      component: ExibirTrilhaCursoComponent,
      data:{
        breadcrumb: 'trilha'
      },
    },
    {
      path: 'deletar/:id',
      component: DeletarCursoComponent,
      data:{
        breadcrumb: 'deletar'
      },
    },
    {
      path: 'atualizar/:id',
      component: AtualizarCursoComponent,
      data:{
        breadcrumb: 'atualizar'
      },
    },
    {
      path: 'detalhar/:id',
      component: ExibirCursoComponent,
      data:{
        breadcrumb: 'detalhar'
      },
    },
    {
      path: 'matricula',
      component: MatriculaComponent,
      data:{
        breadcrumb: 'matricula'
      },
    },
    {
      path: 'menu',
      component: MenuCursosComponent,
    }]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
