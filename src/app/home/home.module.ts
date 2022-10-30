import { FooterModule } from './../componentes/footer/footer.module';
import { HeaderModule } from './../componentes/header/header.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { CardComponent } from './homepage/card/card.component';

@NgModule({
  declarations: [
    HomepageComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    HeaderModule,
    FooterModule
  ],
  exports:[]
})
export class HomeModule { }
