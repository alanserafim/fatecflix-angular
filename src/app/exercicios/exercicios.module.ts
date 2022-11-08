import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciciosRoutingModule } from './exercicios-routing.module';
import { NovoExercicioComponent } from './novo-exercicio/novo-exercicio.component';
import { AtualizaExercicioComponent } from './atualiza-exercicio/atualiza-exercicio.component';
import { DeletaExercicioComponent } from './deleta-exercicio/deleta-exercicio.component';
import { ListaExercicioComponent } from './lista-exercicio/lista-exercicio.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { FooterModule } from '../componentes/footer/footer.module';
import { HeaderModule } from '../componentes/header/header.module';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [
    NovoExercicioComponent,
    AtualizaExercicioComponent,
    DeletaExercicioComponent,
    ListaExercicioComponent
  ],
  imports: [
    CommonModule,
    ExerciciosRoutingModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    FooterModule,
    HeaderModule,
    MatCardModule,
    MatGridListModule,
    ReactiveFormsModule,
  ]
})
export class ExerciciosModule { }
