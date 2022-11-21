import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Historico } from 'src/app/types/Historico';
import { HistoricoService } from 'src/app/services/historico/historico.service';

@Component({
  selector: 'app-historico-usuario',
  templateUrl: './historico-usuario.component.html',
  styleUrls: ['./historico-usuario.component.css']
})
export class HistoricoUsuarioComponent implements OnInit {
// @ts-ignore: Object is possibly 'undefined'.
  historicos: Observable<Historico[]>;

  constructor(private historicosService: HistoricoService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.historicos = this.historicosService.listarAulas();
    console.log(this.historicos);
  }

}
