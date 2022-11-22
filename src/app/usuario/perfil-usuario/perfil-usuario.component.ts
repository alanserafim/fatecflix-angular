import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioLogadoService } from 'src/app/services/authentication/usuario-logado/usuario-logado.service';
import { ConsultarUsuariosService } from 'src/app/services/consultar-usuarios/consultar-usuarios.service';
import { Usuario } from 'src/app/types/Usuario';

import { UsuarioLogado } from './../../types/UsuarioLogado';

var usuarioLogado$ : UsuarioLogado

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {
  usuarioLogado$ : Observable <UsuarioLogado> = this.usuarioLogadoService.retornaUsuarioLogado()

  displayedColumns: string[] = ['posicao', 'curso', 'progresso', 'status', 'certificado'];

  submitted = false;
  // @ts-ignore: Object is possibly 'undefined'.
  userId: number;
  // @ts-ignore: Object is possibly 'undefined'.
  usuario: Usuario;

  constructor(
    private usuarioLogadoService: UsuarioLogadoService,
    private route: ActivatedRoute,
    private router: Router,
    private atualizaUsuario: ConsultarUsuariosService,
  ) { }

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


  /*
{
  "userId": 47,
  "username": "Alan Nunes Serafim",
  "email": "alan.serafim@fatec.sp.gov.br",
  "cpf": "39829237869",
  "password": "$2a$10$AnmOieYnyNIMbd94bdEBbe73IgOUO0L6HHg83NrjlIENEdoig/Mxy",
  "name": "Alan Nunes Serafim",
  "lastname": "Alan Nunes Serafim",
  "roles": [
    "user"
  ],
  "enabled": true,
  "authorities": [
    {
      "authority": "java.util.stream.ReferencePipeline$Head@78d24b43"
    }
  ],
  "accountNonExpired": true,
  "accountNonLocked": true,
  "credentialsNonExpired": true,
  "hibernateLazyInitializer": {}
}


   */
