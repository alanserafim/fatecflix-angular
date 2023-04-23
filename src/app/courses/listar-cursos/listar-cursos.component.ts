import { ListaCursosService } from './../../services/listar-cursos/listar-cursos.service';
import { NovoCurso } from './../../types/NovoCurso';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Matricula } from 'src/app/types/Matricula';
import { MatricularService } from 'src/app/services/matricular/matricular.service';
import { UsuarioLogado } from 'src/app/types/UsuarioLogado';
import { UsuarioLogadoService } from 'src/app/services/authentication/usuario-logado/usuario-logado.service';
/**/

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.css'],
})
export class ListarCursosComponent implements OnInit {
  displayedColumns: string[] = [
    'Titulo',
    'Descrição',
    'Carga Horária',
    'Atualização',
    'Avaliação',
    'Ações',
  ];
  usuarioLogado$: Observable<UsuarioLogado> =
    this.usuarioLogadoService.retornaUsuarioLogado();
  isLoggedIn = true;
  // @ts-ignore: Object is possibly 'undefined'.
  cursos: Observable<NovoCurso[]>;
  // @ts-ignore: Object is possibly 'undefined'.
  matricula: Matricula;
  // @ts-ignore: Object is possibly 'undefined'.
  matriculado: Observable<Matricula>;

  constructor(
    private usuarioLogadoService: UsuarioLogadoService,
    private listarCursosService: ListaCursosService,
    private router: Router,
    private matriculaService: MatricularService
  ) {}

  recebeUsuarioLogado() {
    this.usuarioLogadoService.retornaUsuarioLogado().subscribe(
      (usuario) => {
        console.log(usuario);
      },
      (error) => {
        alert('Credenciais inválidas');
        console.log(error);
      }
    );
  }

  listaCursos() {
    this.cursos = this.listarCursosService.retornaCursosUsuario();
    console.log(this.cursos);
  }

  ngOnInit(): void {
    this.listaCursos();
  }

  deletaCurso(id: number) {
    this.router.navigate(['user/cursos/deletar', id]);
  }

  atualizaCurso(id: number) {
    this.router.navigate(['user/cursos/atualizar', id]);
  }

  matricular(id: number) {
    console.log(id);

    this.matricula = new Matricula(0.0, 0.0, 'Em progresso');

    this.matriculaService.matricular(id, this.matricula).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );

    this.router.navigate(['user/cursos/detalhar', id]);
  }

  detalhar(id: number) {
    this.router.navigate(['user/cursos/detalhar', id]);
  }

  getCursoByCategoria(categoria: string) {
    this.cursos =
      this.listarCursosService.returnaCursosPelaCategoria(categoria);
    console.log(this.cursos);
    console.log('Entrei aqui');
  }
}
