import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioLogadoService } from 'src/app/services/authentication/usuario-logado/usuario-logado.service';
import { ConsultarCursoService } from 'src/app/services/consultar-curso/consultar-curso.service';
import { ListarAulasService } from 'src/app/services/listar-aulas/listar-aulas.service';
import { MatricularService } from 'src/app/services/matricular/matricular.service';
import { SweetalertService } from 'src/app/services/sweetalert/sweetalert.service';
import { Aula } from 'src/app/types/Aula';
import { Curso } from 'src/app/types/Curso';
import { Matricula } from 'src/app/types/Matricula';
import { NovoUsuario } from 'src/app/types/NovoUsuario';
import { UsuarioLogado } from 'src/app/types/UsuarioLogado';

@Component({
  selector: 'app-exibir-curso',
  templateUrl: './exibir-curso.component.html',
  styleUrls: ['./exibir-curso.component.css'],
})
export class ExibirCursoComponent implements OnInit {
  usuarioLogado$: Observable<UsuarioLogado> =
    this.usuarioLogadoService.retornaUsuarioLogado();
  isLoggedIn = true;
  // @ts-ignore: Object is possibly 'undefined'.
  aulas: Observable<Aula[]>;
  // @ts-ignore: Object is possibly 'undefined'.
  cursoId: number;
  // @ts-ignore: Object is possibly 'undefined'.
  curso: Curso;
  // @ts-ignore: Object is possibly 'undefined'.
  usuarios: Observable<NovoUsuario[]>;
  submitted = false;
  // @ts-ignore: Object is possibly 'undefined'.
  matricula: Matricula;
  // @ts-ignore: Object is possibly 'undefined'.
  matriculado: Observable<Matricula>;


  constructor(
    private matriculasService: MatricularService,
    private usuarioLogadoService: UsuarioLogadoService,
    private aulasService: ListarAulasService,
    private route: ActivatedRoute,
    private router: Router,
    private cursoService: ConsultarCursoService,
    private sweetalertService: SweetalertService
  ) {}

  ngOnInit() {
    this.curso = new Curso();
    this.cursoId = this.route.snapshot.params['id'];
    this.cursoService.getCursoById(this.cursoId).subscribe(
      (data) => {
        console.log(data);
        this.curso = data;
      },
      (error) => console.log(error)
    );

    this.usuarios = this.matriculasService.getMatriculasByCurso(this.cursoId);
    this.recebeListaAulas();
    console.log(this.usuarios);
  }

  gotoAulas(id: number) {
    this.router.navigate(['user/aulas/dashboard', id]);
  }

  gotoCadastroAulas(id: number) {
    this.router.navigate(['user/aulas/cadastrar', id]);
  }

  recebeListaAulas(){
    this.aulas = this.aulasService.listarAulas(this.cursoId);
  }

  matricular(id: number) {
    console.log(id);
    this.matricula = new Matricula(0.0, 0.0, 'Em progresso');
    this.matriculasService.matricular(id, this.matricula).subscribe(
      (data) => {
        console.log(data);
        this.sweetalertService.sucessAndMove(
          'Matricula realizada com sucesso',
          `/user/aulas/dashboard/${this.cursoId}`,
          'Sucesso'
        );
      },
      (error) => {
      console.log(error);
      this.sweetalertService.error('Matrícula não realizada');
      }
    );
  }

  atualizaCurso(id: number) {
    this.router.navigate(['user/cursos/atualizar', id]);
  }

  deletaCurso(id: number) {
    this.router.navigate(['user/cursos/deletar', id]);
  }

}
