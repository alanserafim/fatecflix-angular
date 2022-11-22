import { AuntenticacaoGuard } from './services/guarda-rotas/auntenticacao.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanLoad } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
},
  {
    path: 'home',
    loadChildren:()=> import ('./home/home.module').then((m)=> m.HomeModule , )
  },
  {
    path: 'usuario',
    loadChildren:()=> import ('./usuario/usuario.module').then((m)=> m.UsuarioModule ),
    canLoad : [AuntenticacaoGuard],
  },
  {
    path: 'cursos',
    loadChildren:()=> import ('./courses/courses.module' ).then((m)=> m.CoursesModule ),
    canLoad : [AuntenticacaoGuard],
  },
  {
    path: 'dashboard', data: {breadcrumb: "dashboard"},
    loadChildren:()=> import ('./dashboard/dashboard.module' ).then((m)=> m.DashboardModule ),
    canLoad : [AuntenticacaoGuard],
  },
  {
    path: 'aulas',
    loadChildren:()=> import ('./aulas/aulas.module' ).then((m)=> m.AulasModule ),
    canLoad : [AuntenticacaoGuard],
  },
  {
    path: 'exercicios',
    loadChildren:()=> import ('./exercicios/exercicios.module' ).then((m)=> m.ExerciciosModule ),
    canLoad : [AuntenticacaoGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
