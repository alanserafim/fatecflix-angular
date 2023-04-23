import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { SharedModule } from './../../shared/shared.module';

import { AtualizarCursoComponent } from './atualizar-curso/atualizar-curso.component';
import { CadastrarCursoComponent } from './cadastrar-curso/cadastrar-curso.component';
import { CategoriaCursosComponent } from './categoria-cursos/categoria-cursos.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { DeletarCursoComponent } from './deletar-curso/deletar-curso.component';
import { ExibirCursoComponent } from './exibir-curso/exibir-curso.component';
import { CardComponent } from './exibir-trilha-curso/card/card.component';
import { ExibirTrilhaCursoComponent } from './exibir-trilha-curso/exibir-trilha-curso.component';
import { ModalTrilhaComponent } from './exibir-trilha-curso/modal-trilha/modal-trilha.component';
import { GridCursosComponent } from './grid-cursos/grid-cursos.component';
import { CardsComponent } from './listar-cursos/cards/cards.component';
import { ListarCursosComponent } from './listar-cursos/listar-cursos.component';
import { TabelaComponent } from './listar-cursos/tabela/tabela.component';
import { MatriculaComponent } from './matricula/matricula.component';
import { MenuCursosComponent } from './menu-cursos/menu-cursos.component';
import { SecaoComponent } from './menu-cursos/secao/secao.component';

@NgModule({
  declarations: [
    CadastrarCursoComponent,
    ExibirCursoComponent,
    ExibirTrilhaCursoComponent,
    ListarCursosComponent,
    AtualizarCursoComponent,
    DeletarCursoComponent,
    CardComponent,
    ModalTrilhaComponent,
    CardsComponent,
    TabelaComponent,
    GridCursosComponent,
    CategoriaCursosComponent,
    MenuCursosComponent,
    SecaoComponent,
    MatriculaComponent
  ],
  exports: [MatriculaComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }],
})
export class CoursesModule {}
