import { Component, OnInit } from '@angular/core';
import { UsuarioLogadoService } from 'src/app/services/authentication/usuario-logado/usuario-logado.service';
import { Observable } from 'rxjs';
import { UsuarioLogado } from './../../../../types/UsuarioLogado';
import { Router } from '@angular/router'
import { TokenService } from 'src/app/services/authentication/token/token.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  usuarioLogado$ : Observable <UsuarioLogado> = this.usuarioLogadoService.retornaUsuarioLogado()
  isLoggedIn = true;
  constructor(private usuarioLogadoService: UsuarioLogadoService, private route: Router, private tokenService: TokenService) { }


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

  irParaConsultaDeUsuario() {
    this.route.navigate(['/usuario/lista']);
  }

  loggout() {
    this.tokenService.excluiToken();
    this.route.navigate(['/home']);
  }


}
