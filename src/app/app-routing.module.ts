import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
},
  {
    path: 'home',
    loadChildren:()=> import ('./home/home.module').then((m)=> m.HomeModule )
  },
  {
    path: 'usuario',
    loadChildren:()=> import ('./usuario/usuario.module').then((m)=> m.UsuarioModule )
  },
  {
    path: 'cursos',
    loadChildren:()=> import ('./courses/courses.module' ).then((m)=> m.CoursesModule )
  },
  {
    path: 'dashboard',
    loadChildren:()=> import ('./dashboard/dashboard.module' ).then((m)=> m.DashboardModule )
  },
  {
    path: 'aulas',
    loadChildren:()=> import ('./aulas/aulas.module' ).then((m)=> m.AulasModule )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
