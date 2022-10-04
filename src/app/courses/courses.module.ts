import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';

import { CoursesRoutingModule } from './courses-routing.module';
import { CadastrarCursoComponent } from './cadastrar-curso/cadastrar-curso.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    CadastrarCursoComponent,
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatInputModule,
    MatCardModule
  ]
})
export class CoursesModule { }
