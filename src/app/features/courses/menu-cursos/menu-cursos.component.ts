import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioLogadoService } from 'src/app/services/authentication/usuario-logado/usuario-logado.service';
import { ListaCursosService } from 'src/app/services/cursos/listar-cursos/listar-cursos.service';
import { NovoCurso } from 'src/app/types/NovoCurso';
import { UsuarioLogado } from 'src/app/types/UsuarioLogado';

@Component({
  selector: 'app-menu-cursos',
  templateUrl: './menu-cursos.component.html',
  styleUrls: ['./menu-cursos.component.css'],
})
export class MenuCursosComponent implements OnInit {
  usuarioLogado$: Observable<UsuarioLogado> =
    this.usuarioLogadoService.retornaUsuarioLogado();

  // @ts-ignore: Object is possibly 'undefined'.
  cursos: Observable<NovoCurso[]>;
  // @ts-ignore: Object is possibly 'undefined'.
  cursosEncontrados: Observable<NovoCurso[]>;

  categoriasList: any[] = [];
  listaDeCategorias: string[] = []
  categoriaSelecionada: string = ''

  constructor(
    private usuarioLogadoService: UsuarioLogadoService,
    private router: Router,
    private listarCursosService: ListaCursosService
  ) {}

  ngOnInit(): void {
    this.listaCategorias();
    this.categoriaSelecionada = 'Todos'
    console.log(this.categoriaSelecionada == 'Todos')

  }

  listaCategorias() {
   return this.listarCursosService
      .retornaCursosUsuario()
      .subscribe((categoria) => {
        this.categoriasList = categoria;
        this.categoriasList = Array.from(
          this.categoriasList
            .reduce((m, t) => m.set(t.categoria, t), new Map())
            .values()
        );
        console.log("categoriaList")
        console.log(this.categoriasList)
        //@ts-ignore
        this.listaDeCategorias = this.categoriasList.map(curso => String(curso.categoria))
        console.log("listaDeCategorias")
        console.log(this.listaDeCategorias)

      });
  }

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

  detalhar(id: number) {
    this.router.navigate(['cursos/detalhar', id]);
  }

  selecionaCategoria(categoria: string){
    this.categoriaSelecionada = categoria
  }
}
