import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';

import { CoursesRoutingModule } from './courses-routing.module';
import { CadastrarCursoComponent } from './cadastrar-curso/cadastrar-curso.component';
import {MatCardModule} from '@angular/material/card';
import { ExibirCursoComponent } from './exibir-curso/exibir-curso.component';
import { ExibirTrilhaCursoComponent } from './exibir-trilha-curso/exibir-trilha-curso.component';
import { ListarCursosComponent } from './listar-cursos/listar-cursos.component';
import { AtualizarCursoComponent } from './atualizar-curso/atualizar-curso.component';

@NgModule({
  declarations: [
    CadastrarCursoComponent,
    ExibirCursoComponent,
    ExibirTrilhaCursoComponent,
    ListarCursosComponent,
    AtualizarCursoComponent,
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatInputModule,
    MatCardModule
  ]
})
export class CoursesModule { }
