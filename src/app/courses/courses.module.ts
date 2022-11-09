import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

import { SucessoModule } from '../componentes/sucesso/sucesso.module';
import { FooterModule } from './../componentes/footer/footer.module';
import { HeaderModule } from './../componentes/header/header.module';
import { AtualizarCursoComponent } from './atualizar-curso/atualizar-curso.component';
import { CadastrarCursoComponent } from './cadastrar-curso/cadastrar-curso.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { DeletarCursoComponent } from './deletar-curso/deletar-curso.component';
import { ExibirCursoComponent } from './exibir-curso/exibir-curso.component';
import { CardComponent } from './exibir-trilha-curso/card/card.component';
import { ExibirTrilhaCursoComponent } from './exibir-trilha-curso/exibir-trilha-curso.component';
import { ModalTrilhaComponent } from './exibir-trilha-curso/modal-trilha/modal-trilha.component';
import { CardsComponent } from './listar-cursos/cards/cards.component';
import { ListarCursosComponent } from './listar-cursos/listar-cursos.component';
import { TabelaComponent } from './listar-cursos/tabela/tabela.component';
import { MatriculaComponent } from './matricula/matricula.component';


@NgModule({
  declarations: [
    CadastrarCursoComponent,
    ExibirCursoComponent,
    ExibirTrilhaCursoComponent,
    ListarCursosComponent,
    AtualizarCursoComponent,
    DeletarCursoComponent,
    MatriculaComponent,
    CardComponent,
    ModalTrilhaComponent,
    CardsComponent,
    TabelaComponent,
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
    SucessoModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonToggleModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }],
})
export class CoursesModule {}
