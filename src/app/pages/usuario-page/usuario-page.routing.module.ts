import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioPageComponent } from './usuario-page.component';
import { AuntenticacaoGuard } from '../../services/guarda-rotas/auntenticacao.guard';

const routes: Routes = [
  {
    path: '',
    component: UsuarioPageComponent,
    children: [
      {
        path: "usuario",
        loadChildren: () =>
          import('../../features/usuario/usuario.module').then((m) => m.UsuarioModule),
          canLoad: [AuntenticacaoGuard],
      },
      {
        path: 'cursos',
        loadChildren: () =>
          import('../../features/courses/courses.module').then((m) => m.CoursesModule),
        canLoad: [AuntenticacaoGuard],
      },
      {
        path: 'aulas',
        loadChildren: () =>
          import('../../features/aulas/aulas.module').then((m) => m.AulasModule),
        canLoad: [AuntenticacaoGuard],
      },
      {
        path: 'exercicios',
        loadChildren: () =>
          import('../../features/exercicios/exercicios.module').then((m) => m.ExerciciosModule),
        canLoad: [AuntenticacaoGuard],
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioPageRoutingModule { }
