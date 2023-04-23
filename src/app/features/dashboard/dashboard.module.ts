import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
import { CursosMatriculadosComponent } from './cursos-matriculados/cursos-matriculados.component';
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
import { DashboardUsuarioComponent } from './dashboard-usuario/dashboard-usuario.component';

@NgModule({
  declarations: [
    DadosPessoaisComponent,
    CursosMatriculadosComponent,
    DashboardUsuarioComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DashboardModule { }
