import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeRoutingModule } from 'src/app/home/home-routing.module';

import { HeaderComponent } from './header.component';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
