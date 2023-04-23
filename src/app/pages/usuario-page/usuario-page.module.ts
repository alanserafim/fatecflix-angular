import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { UsuarioPageComponent } from './usuario-page.component';
import { UsuarioPageRoutingModule } from './usuario-page.routing.module';



@NgModule({
  declarations: [
    UsuarioPageComponent
  ],
  imports: [
    CommonModule,
    UsuarioPageRoutingModule,
    SharedModule
  ],
  exports: []
})
export class UsuarioPageModule { }
