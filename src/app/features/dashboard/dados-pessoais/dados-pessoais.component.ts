import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioLogadoService } from 'src/app/services/authentication/usuario-logado/usuario-logado.service';
import { UsuarioLogado } from 'src/app/types/UsuarioLogado';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.css']
})
export class DadosPessoaisComponent implements OnInit {

  usuarioLogado$ : Observable <UsuarioLogado> = this.usuarioLogadoService.retornaUsuarioLogado()

  constructor(
    private usuarioLogadoService: UsuarioLogadoService
  ) { }

  ngOnInit(): void {
  }

}
