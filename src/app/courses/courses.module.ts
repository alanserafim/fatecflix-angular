import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

import { FooterModule } from './../componentes/footer/footer.module';
import { HeaderModule } from './../componentes/header/header.module';
import { AtualizarCursoComponent } from './atualizar-curso/atualizar-curso.component';
import { CadastrarCursoComponent } from './cadastrar-curso/cadastrar-curso.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { ExibirCursoComponent } from './exibir-curso/exibir-curso.component';
import { ExibirTrilhaCursoComponent } from './exibir-trilha-curso/exibir-trilha-curso.component';
import { ListarCursosComponent } from './listar-cursos/listar-cursos.component';
import { SucessoModule } from '../componentes/sucesso/sucesso.module';

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
    MatCardModule,
    FooterModule,
    HeaderModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    SucessoModule
  ]
})
export class CoursesModule { }
