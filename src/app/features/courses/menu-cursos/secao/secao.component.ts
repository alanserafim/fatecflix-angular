import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ListaCursosService } from 'src/app/services/cursos/listar-cursos/listar-cursos.service';
import { UsuarioLogado } from 'src/app/types/UsuarioLogado';

@Component({
  selector: 'app-secao',
  templateUrl: './secao.component.html',
  styleUrls: ['./secao.component.css']
})
export class SecaoComponent implements OnInit {
  // @ts-ignore: Object is possibly 'undefined'.
  cursos: Observable<NovoCurso[]>;
   // @ts-ignore: Object is possibly 'undefined'.
  @Input() categoriaExibicao: String;

  constructor(
    private listarCursosService: ListaCursosService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.listaCursos();
  }

  listaCursos() {
    this.cursos = this.listarCursosService.retornaCursosUsuario();
    console.log(this.cursos);
  }
  detalhar(id: number) {
    this.router.navigate(['user/cursos/detalhar', id]);
  }
}
