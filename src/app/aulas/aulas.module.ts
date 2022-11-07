import { YouTubePlayerModule } from '@angular/youtube-player';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';

import { AulasRoutes } from './aulas.routing';
import { CadastrarAulasComponent } from './cadastrar-aulas/cadastrar-aulas.component';
import { DashboardAulasComponent } from './dashboard-aulas/dashboard-aulas.component';
import { ExibirAulaComponent } from './exibir-aula/exibir-aula.component';
import { ListarAulasComponent } from './listar-aulas/listar-aulas.component';
import { HeaderModule } from '../componentes/header/header.module';
import { FooterModule } from '../componentes/footer/footer.module';
import { SafePipe } from '../pipe/safe.pipe';

@NgModule({
  declarations: [
    CadastrarAulasComponent,
    ListarAulasComponent,
    DashboardAulasComponent,
    ExibirAulaComponent,
    SafePipe,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    AulasRoutes,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatGridListModule,
    FooterModule,
    HeaderModule,
    YouTubePlayerModule
  ]
})
export class AulasModule { }
