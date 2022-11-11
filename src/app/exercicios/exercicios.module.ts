import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';

import { FooterModule } from '../componentes/footer/footer.module';
import { HeaderModule } from '../componentes/header/header.module';
import { AtualizaExercicioComponent } from './atualiza-exercicio/atualiza-exercicio.component';
import { DeletaExercicioComponent } from './deleta-exercicio/deleta-exercicio.component';
import { ExerciciosRoutingModule } from './exercicios-routing.module';
import { ListaExercicioComponent } from './lista-exercicio/lista-exercicio.component';
import { NovoExercicioComponent } from './novo-exercicio/novo-exercicio.component';
import { ResponderExercicioComponent } from './responder-exercicio/responder-exercicio.component';
import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [
    NovoExercicioComponent,
    AtualizaExercicioComponent,
    DeletaExercicioComponent,
    ListaExercicioComponent,
    ResponderExercicioComponent
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
    MatStepperModule,
    MatListModule
  ]
})
export class ExerciciosModule { }
