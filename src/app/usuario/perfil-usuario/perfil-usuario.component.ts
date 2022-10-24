import { UsuarioLogado } from './../../types/UsuarioLogado';
import { Observable } from 'rxjs';
import { UsuarioLogadoService } from './../../services/authentication/usuario/usuario-logado.service';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  curso: string;
  posicao: number;
  progresso: number;
  status: string;
  certificado: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {posicao: 1, curso: 'Node', progresso: 40, status: 'Em andamento', certificado: 'Indisponível'},
  {posicao: 2, curso: 'Spring', progresso: 10, status: 'Em andamento', certificado: 'Indisponível'},
  {posicao: 3, curso: 'Estrutura de Dados', progresso: 100, status: 'Concluído', certificado: 'Disponível'},
];

const usuarioLogado$ : UsuarioLogado = {name: "", email: '', cpf: "", perfil: ['']}


@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {
  usuarioLogado$ : Observable <UsuarioLogado> = this.usuarioLogadoService.retornaUsuarioLogado()

  displayedColumns: string[] = ['posicao', 'curso', 'progresso', 'status', 'certificado'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(
    private usuarioLogadoService: UsuarioLogadoService,

  ) { }

  ngOnInit(): void {

  }

  recebeUsuarioLogado(){
    this.usuarioLogadoService.retornaUsuarioLogado().subscribe(
      (usuario) => {
        usuarioLogado$.name = usuario.name;
        usuarioLogado$.email = usuario.email;
        usuarioLogado$.cpf = usuario.cpf;
        usuarioLogado$.perfil = usuario.roles;
        console.log(usuarioLogado$);

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
