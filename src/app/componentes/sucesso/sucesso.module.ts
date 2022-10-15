import { HeaderModule } from './../header/header.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SucessoComponent } from './sucesso.component';


@NgModule({
  declarations: [
    SucessoComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    HeaderModule
  ],
  exports: [
    SucessoComponent
  ]
})
export class SucessoModule { }
