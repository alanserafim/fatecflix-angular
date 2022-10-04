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
    path: 'dados',
    loadChildren:()=> import ('./personal-data/personal-data.module').then((m)=> m.PersonalDataModule )
  },
  {
    path: 'cursos',
    loadChildren:()=> import ('./courses/courses.module' ).then((m)=> m.CoursesModule )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
