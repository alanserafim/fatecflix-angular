import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultarCursoService } from 'src/app/services/consultar-curso/consultar-curso.service';
import { Curso } from 'src/app/types/Curso';
import { UsuarioLogado } from 'src/app/types/UsuarioLogado';
import { Observable } from 'rxjs';
import { UsuarioLogadoService } from 'src/app/services/authentication/usuario-logado/usuario-logado.service';
import { Matricula } from 'src/app/types/Matricula';
import { MatricularService } from 'src/app/services/matricular/matricular.service';
import { NovoUsuario } from 'src/app/types/NovoUsuario';

@Component({
  selector: 'app-exibir-curso',
  templateUrl: './exibir-curso.component.html',
  styleUrls: ['./exibir-curso.component.css']
})
export class ExibirCursoComponent implements OnInit {
  usuarioLogado$ :  Observable<UsuarioLogado> = this.usuarioLogadoService.retornaUsuarioLogado()
  isLoggedIn = true;

  // @ts-ignore: Object is possibly 'undefined'.
  cursoId: number;
  // @ts-ignore: Object is possibly 'undefined'.
  curso: Curso;
// @ts-ignore: Object is possibly 'undefined'.
  usuarios: Observable<NovoUsuario[]>
  submitted = false;

  constructor(private matriculasService: MatricularService,private usuarioLogadoService: UsuarioLogadoService, private route: ActivatedRoute, private router: Router, private cursoService: ConsultarCursoService) { }

  ngOnInit() {
    this.curso = new Curso();
    this.cursoId = this.route.snapshot.params['id'];
    this.cursoService.getCursoById(this.cursoId).subscribe(data => {
      console.log(data);
      this.curso = data;
    }, error => console.log(error));

    this.usuarios = this.matriculasService.getMatriculasByCurso(this.cursoId);
    console.log(this.usuarios);
  }

  gotoAulas(id: number) {
    this.router.navigate(['user/aulas/dashboard', id])
  }

  gotoCadastroAulas(id: number) {
    this.router.navigate(['user/aulas/cadastrar', id])
  }

}
