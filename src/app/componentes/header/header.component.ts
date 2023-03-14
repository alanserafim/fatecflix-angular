import { Component, OnInit, HostListener  } from '@angular/core';
import { UsuarioLogadoService } from 'src/app/services/authentication/usuario-logado/usuario-logado.service';
import { Observable } from 'rxjs';
import { UsuarioLogado } from './../../types/UsuarioLogado';
import { Router } from '@angular/router'
import { TokenService } from 'src/app/services/authentication/token/token.service';
import { ETheme } from './ETheme';

//var usuarioLogado$ : UsuarioLogado
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usuarioLogado$ : Observable <UsuarioLogado> = this.usuarioLogadoService.retornaUsuarioLogado();
  isLoggedIn = this.tokeService.possuiToken();
  public nome: string = ETheme.NOME_COM_CONTRASTE;

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

  font_size = 16;

  setFontSize(idd: string) {

     //calc font size
     if(idd === 'a+'){
      this.font_size += 1;
    } else if(idd === 'a-') {
      this.font_size -= 1;
    } else {
      this.font_size = 16;
    }

    //set font size
    let htmlRoot:HTMLElement = <HTMLElement> document.getElementsByTagName("body")[0];

    console.log(htmlRoot);

    if (htmlRoot != null) {
      htmlRoot.style.fontSize = `${this.font_size}px`;
      console.log(htmlRoot.style.fontSize);
    }



  }

  public toogle() {
    const theme = document.body.classList.toggle('contraste');

    if (theme) {
      return (this.nome = ETheme.NOME_SEM_CONTRASTE);
    }

    return (this.nome = ETheme.NOME_COM_CONTRASTE)
  }

  // atalhos acessibilidade
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if(event.key == '+'){
      // Your row selection code
      console.log(event.key);
      this.setFontSize("a+")
    }
    if(event.key == '-'){
      // Your row selection code
      console.log(event.key);
      this.setFontSize("a-")
    }
    if(event.key == 'c'){
      // Your row selection code
      console.log(event.key);
      this.toogle();
    }
}
}
