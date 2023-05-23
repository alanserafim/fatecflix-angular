import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioLogadoService } from 'src/app/services/authentication/usuario-logado/usuario-logado.service';
import { ListaCursosService } from 'src/app/services/cursos/listar-cursos/listar-cursos.service';
import { MatricularService } from 'src/app/services/usuarios/matricular/matricular.service';
import { UsuarioLogado } from 'src/app/types/UsuarioLogado';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  usuarioLogado$ : Observable <UsuarioLogado> = this.usuarioLogadoService.retornaUsuarioLogado()
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
  ) { }

  ngOnInit(): void {
    this.listaCursos();
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

  listaCursos() {
    this.cursos = this.listarCursosService.retornaCursosUsuario();
    console.log(this.cursos);
  }

  deletaCurso(id : number) {
    this.router.navigate(['cursos/deletar', id]);
  }

  atualizaCurso(id : number) {
    this.router.navigate(['cursos/atualizar', id])
  }

  detalhar(id: number) {
    this.router.navigate(['cursos/detalhar', id]);
  }
}
