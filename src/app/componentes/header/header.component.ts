import { Component, OnInit } from '@angular/core';
import { UsuarioLogadoService } from 'src/app/services/authentication/usuario-logado/usuario-logado.service';
import { Observable } from 'rxjs';
import { UsuarioLogado } from './../../types/UsuarioLogado';
import { Router } from '@angular/router'
import { TokenService } from 'src/app/services/authentication/token/token.service';

//var usuarioLogado$ : UsuarioLogado
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usuarioLogado$ : Observable <UsuarioLogado> = this.usuarioLogadoService.retornaUsuarioLogado();
  isLoggedIn = this.tokeService.possuiToken();
  constructor(private usuarioLogadoService: UsuarioLogadoService, private route: Router, private tokeService: TokenService) { }

  ngOnInit(): void {
  }

  recebeUsuarioLogado(){
    this.usuarioLogadoService.retornaUsuarioLogado().subscribe(
      (usuario) => {
        console.log(usuario);

      }, (error) => {
        alert("Credenciais inválidas");
        console.log(error);
      }
    )
  }
}
