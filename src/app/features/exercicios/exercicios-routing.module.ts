import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizaExercicioComponent } from './atualiza-exercicio/atualiza-exercicio.component';
import { DeletaExercicioComponent } from './deleta-exercicio/deleta-exercicio.component';
import { ListaExercicioComponent } from './exibe-exercicio/stepper/lista-exercicio.component';
import { NovoExercicioComponent } from './novo-exercicio/novo-exercicio.component';
import { AlternativasComponent } from './exibe-exercicio/alternativas/alternativas.component';

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
    path: 'exibir',
    component: AlternativasComponent
  },
  {
    path: 'deletar/:id/curso/:cursoId',
    component: DeletaExercicioComponent
  },
  {
    path: 'atualizar/:id/curso/:cursoId',
    component: AtualizaExercicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciciosRoutingModule { }
