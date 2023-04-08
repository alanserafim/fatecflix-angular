import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeRoutingModule } from 'src/app/home/home-routing.module';

import { HeaderComponent } from './header.component';
import { AdminComponent } from './navbar/admin/admin.component';
import {MatIconModule} from '@angular/material/icon';
import { BarraAcessibilidadeComponent } from './barra-acessibilidade/barra-acessibilidade.component';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    HeaderComponent,
    AdminComponent,
    BarraAcessibilidadeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatExpansionModule,
    ScrollToModule.forRoot()
  ],
  exports: [
    HeaderComponent,
    BarraAcessibilidadeComponent
  ]
})
export class HeaderModule { }
