import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { AulasRoutes } from './aulas.routing';
import { CadastrarAulasComponent } from './cadastrar-aulas/cadastrar-aulas.component';
import { ListarAulasComponent } from './listar-aulas/listar-aulas.component';
import { DashboardAulasComponent } from './dashboard-aulas/dashboard-aulas.component';
import { ExibirAulaComponent } from './exibir-aula/exibir-aula.component';


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
    FormsModule
  ]
})
export class AulasModule { }
