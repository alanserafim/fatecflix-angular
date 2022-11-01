import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeRoutingModule } from 'src/app/home/home-routing.module';

import { HeaderComponent } from './header.component';
import { AdminComponent } from './navbar/admin/admin.component';



@NgModule({
  declarations: [
    HeaderComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
