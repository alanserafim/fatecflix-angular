import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { JsonParsePipePipe } from '../../pipe/json-parse-pipe.pipe';
import { SharedModule } from './../../shared/shared.module';
import { AtualizaExercicioComponent } from './atualiza-exercicio/atualiza-exercicio.component';
import { DeletaExercicioComponent } from './deleta-exercicio/deleta-exercicio.component';
import { ExerciciosRoutingModule } from './exercicios-routing.module';
import { ListaExercicioComponent } from './lista-exercicio/lista-exercicio.component';
import { NovoExercicioComponent } from './novo-exercicio/novo-exercicio.component';

@NgModule({
  declarations: [
    NovoExercicioComponent,
    AtualizaExercicioComponent,
    DeletaExercicioComponent,
    ListaExercicioComponent,
    JsonParsePipePipe,
  ],
  imports: [
    CommonModule,
    ExerciciosRoutingModule,
    SharedModule
  ]
})
export class ExerciciosModule { }
