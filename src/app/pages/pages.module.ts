import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages.routing.module';
import { UsuarioPageComponent } from './usuario-page/usuario-page.component';



@NgModule({
  declarations: [
    UsuarioPageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ],
  exports: []
})
export class PagesModule { }
