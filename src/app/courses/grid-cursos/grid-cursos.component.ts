import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioLogadoService } from 'src/app/services/authentication/usuario-logado/usuario-logado.service';
import { ListaCursosService } from 'src/app/services/listar-cursos/listar-cursos.service';
import { MatricularService } from 'src/app/services/matricular/matricular.service';
import { UsuarioLogado } from 'src/app/types/UsuarioLogado';

@Component({
  selector: 'app-grid-cursos',
  templateUrl: './grid-cursos.component.html',
  styleUrls: ['./grid-cursos.component.css']
})
export class GridCursosComponent implements OnInit {

  displayedColumns: string[] = ['Titulo', 'Descrição', 'Carga Horária', 'Atualização', 'Avaliação', 'Ações'];
  usuarioLogado$ : Observable<UsuarioLogado> = this.usuarioLogadoService.retornaUsuarioLogado()
  isLoggedIn = true;
  // @ts-ignore: Object is possibly 'undefined'.
  cursos: Observable<NovoCurso[]>;
  // @ts-ignore: Object is possibly 'undefined'.
  matricula: Matricula;
  // @ts-ignore: Object is possibly 'undefined'.
  matriculado: Observable<Matricula>;
// @ts-ignore: Object is possibly 'undefined'.
  categoria: string;

  constructor(private route: ActivatedRoute, private usuarioLogadoService: UsuarioLogadoService,private listarCursosService: ListaCursosService, private router: Router, private matriculaService: MatricularService) { }

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

  ngOnInit() {
    this.categoria = this.route.snapshot.params['categoria'];

    this.cursos = this.listarCursosService.returnaCursosPelaCategoria(this.categoria);

    console.log(this.cursos);
  }



  deletaCurso(id : number) {
    this.router.navigate(['/cursos/deletar', id]);
  }

  atualizaCurso(id : number) {
    this.router.navigate(['/cursos/atualizar', id])
  }

  detalhar(id: number) {

    //console.log(id);

    /*this.matricula = new Matricula(0.0, 0.0, "Em progresso")

    this.matriculaService.matricular(id, this.matricula).subscribe(data => console.log(data),
    error => console.log(error));*/

    this.router.navigate(['/cursos/detalhar', id]);
  }

  getCursoByCategoria(categoria: string) {
    this.cursos = this.listarCursosService.returnaCursosPelaCategoria(categoria);
    console.log(this.cursos);
    console.log("Entrei aqui");
  }

}
