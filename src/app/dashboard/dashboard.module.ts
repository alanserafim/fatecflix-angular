import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';

import { FooterModule } from './../componentes/footer/footer.module';
import { HeaderModule } from './../componentes/header/header.module';
import { CursosMatriculadosComponent } from './cursos-matriculados/cursos-matriculados.component';
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardUsuarioComponent } from './dashboard-usuario/dashboard-usuario.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    DadosPessoaisComponent,
    CursosMatriculadosComponent,
    DashboardUsuarioComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    FooterModule,
    HeaderModule,
    MatListModule,
    MatSelectModule,
    MatSidenavModule,
    MatIconModule
  ]
})
export class DashboardModule { }
