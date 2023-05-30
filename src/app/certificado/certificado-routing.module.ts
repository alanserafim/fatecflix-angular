import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CertificadoComponent } from '../certificado/certificado.component';

const routes: Routes = [
  {
    path: 'certificado',
    component: CertificadoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
