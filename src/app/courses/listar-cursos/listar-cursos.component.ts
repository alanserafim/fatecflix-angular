import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaCursosService } from '../../services/listar-cursos/listar-cursos.service';

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.css']
})
export class ListarCursosComponent implements OnInit {
  listaCursosUsuario$ : Observable<any> = this.listarCursosService.retornaCursosUsuario();

  constructor(
    private listarCursosService : ListaCursosService
  ) { }

  ngOnInit(): void {
  console.log(this.listaCursosUsuario$);
  
  }

}
