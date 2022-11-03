import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarAulasComponent } from './cadastrar-aulas/cadastrar-aulas.component';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    CadastrarAulasComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class AulasModule { }
