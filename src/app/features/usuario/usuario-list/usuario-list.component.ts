import { Component, OnInit } from '@angular/core';
import { NovoUsuario } from 'src/app/types/NovoUsuario';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ConsultarUsuariosService } from 'src/app/services/usuarios/consultar-usuarios/consultar-usuarios.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort: any;

  displayedColumns: string[] = ['Nome', 'CPF', 'Username', 'Ações'];

   // @ts-ignore: Object is possibly 'undefined'.
  usuarios: Observable<NovoUsuario[]>;

  constructor(private consultarUsuarios: ConsultarUsuariosService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.usuarios = this.consultarUsuarios.getUsuarios();
    console.log(this.usuarios);
  }

  deletaUsuario(id : number) {
    this.router.navigate(['user/usuario/deletar', id]);
  }

  atualizaUsuario(id : number) {
    this.router.navigate(['user/usuario/atualizar', id])
  }

}
