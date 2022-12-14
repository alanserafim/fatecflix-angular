import { ResponderExercicioComponent } from './responder-exercicio/responder-exercicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizaExercicioComponent } from './atualiza-exercicio/atualiza-exercicio.component';
import { DeletaExercicioComponent } from './deleta-exercicio/deleta-exercicio.component';
import { ListaExercicioComponent } from './lista-exercicio/lista-exercicio.component';
import { NovoExercicioComponent } from './novo-exercicio/novo-exercicio.component';

const routes: Routes = [
  {
    path: 'cadastrar/:id',
    component: NovoExercicioComponent
  },
  {
    path: 'listar/:cursoId/matricula/:matriculaId',
    component: ListaExercicioComponent
  },
  {
    path: 'deletar/:id/curso/:cursoId',
    component: DeletaExercicioComponent
  },
  {
    path: 'atualizar/:id/curso/:cursoId',
    component: AtualizaExercicioComponent
  },
  {
    path: 'responder',
    component: ResponderExercicioComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciciosRoutingModule { }
