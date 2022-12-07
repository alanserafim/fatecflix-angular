import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { SafePipe } from '../pipe/safe.pipe';
import { SharedModule } from './../shared/shared.module';
import { AtualizarAulasComponent } from './atualizar-aulas/atualizar-aulas.component';
import { CadastrarAulasComponent } from './cadastrar-aulas/cadastrar-aulas.component';
import { ComentarComponent } from './comentar/comentar.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { DashboardAulasComponent } from './dashboard-aulas/dashboard-aulas.component';
import { DeletaComentarioComponent } from './deleta-comentario/deleta-comentario.component';
import { DeletarAulasComponent } from './deletar-aulas/deletar-aulas.component';
import { ExibirAulaComponent } from './exibir-aula/exibir-aula.component';
import { ListarAulasComponent } from './listar-aulas/listar-aulas.component';

@NgModule({
  declarations: [
    CadastrarAulasComponent,
    ListarAulasComponent,
    DashboardAulasComponent,
    ExibirAulaComponent,
    SafePipe,
    AtualizarAulasComponent,
    DeletarAulasComponent,
    ComentarComponent,
    ComentariosComponent,
    DeletaComentarioComponent,
  ],
  imports: [
    CommonModule,
    YouTubePlayerModule,
    SharedModule
  ]
})
export class AulasModule { }
