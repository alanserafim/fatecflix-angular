import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { AulasRoutes } from './aulas.routing';
import { CadastrarAulasComponent } from './cadastrar-aulas/cadastrar-aulas.component';
import { DashboardAulasComponent } from './dashboard-aulas/dashboard-aulas.component';
import { ExibirAulaComponent } from './exibir-aula/exibir-aula.component';
import { ListarAulasComponent } from './listar-aulas/listar-aulas.component';


@NgModule({
  declarations: [
    CadastrarAulasComponent,
    ListarAulasComponent,
    DashboardAulasComponent,
    ExibirAulaComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    AulasRoutes,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatIconModule
  ]
})
export class AulasModule { }
