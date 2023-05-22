import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioLogadoService } from 'src/app/services/authentication/usuario-logado/usuario-logado.service';
import { ListaCursosService } from 'src/app/services/listar-cursos/listar-cursos.service';
import { UsuarioLogado } from 'src/app/types/UsuarioLogado';

@Component({
  selector: 'app-menu-cursos',
  templateUrl: './menu-cursos.component.html',
  styleUrls: ['./menu-cursos.component.css']
})
export class MenuCursosComponent implements OnInit {
  usuarioLogado$ : Observable <UsuarioLogado> = this.usuarioLogadoService.retornaUsuarioLogado()

  listaExibicao: String[] = ['Frontend', 'Ferramentas']
  // @ts-ignore: Object is possibly 'undefined'.
  cursos: Observable<NovoCurso[]>;

  categorias: String[] = [""];

  constructor(
    private usuarioLogadoService: UsuarioLogadoService,
    private router: Router,
    private listarCursosService: ListaCursosService,
  ) { }

  ngOnInit(): void {
    this.listaCursos();
    // for (let i = 0; i < this.cursos.length; i++) {
    //   this.categorias[0] = this.cursos[0];
    // }
  }

  listaCursos() {
    this.cursos = this.listarCursosService.retornaCursosUsuario();
    console.log(this.cursos);
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


  detalhar(id: number) {
    this.router.navigate(['cursos/detalhar', id]);
  }
}
