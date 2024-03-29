import { Component, OnInit } from '@angular/core';
import { NovoCurso } from 'src/app/types/NovoCurso';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ListaCursosService } from 'src/app/services/cursos/listar-cursos/listar-cursos.service';
@Component({
  selector: 'app-categoria-cursos',
  templateUrl: './categoria-cursos.component.html',
  styleUrls: ['./categoria-cursos.component.css'],
})
export class CategoriaCursosComponent implements OnInit {
  // @ts-ignore: Object is possibly 'undefined'.
  cursos: Observable<NovoCurso[]>;
  // @ts-ignore: Object is possibly 'undefined'.
  cursosEncontrados: Observable<NovoCurso[]>;

  list: any[] = [];
  constructor(
    private router: Router,
    private listarCursosService: ListaCursosService
  ) {}

  ngOnInit(): void {
    this.listaCategoria();
  }

  listaCategoria() {
    this.cursos = this.listarCursosService
      .retornaCursosUsuario()
      .subscribe((categoria) => {
        this.list = categoria;
        this.list = Array.from(
          this.list.reduce((m, t) => m.set(t.categoria, t), new Map()).values()
        );
        console.log(this.list);
      });
  }

  getCursoByCategoria(categoria: string) {
    this.router
      .navigateByUrl('user/cursos/listar', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['user/cursos/listar', categoria]);
      });
  }

  gotoList() {
    this.router.navigate(['user/cursos/listar']);
  }

  // credit: https://stackoverflow.com/a/36744732/6513921
  private uniqueArray(target: Array<any>, property: any): Array<any> {
    return target.filter(
      (item, index) =>
        index === target.findIndex((t) => t[property] === item[property])
    );
  }
}
