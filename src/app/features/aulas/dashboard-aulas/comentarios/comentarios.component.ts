import { UsuarioLogado } from '../../../../types/UsuarioLogado';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { Comentario } from 'src/app/types/Comentario';
import { UsuarioLogadoService } from 'src/app/services/authentication/usuario-logado/usuario-logado.service';
import { ComentarioService } from 'src/app/services/aulas/comentario/comentario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  // @ts-ignore: Object is possibly 'undefined'.
  comentarios: Observable<Comentario[]>;
  // @ts-ignore: Object is possibly 'undefined'.
  @Input() aulaId: number;

  // @ts-ignore: Object is possibly 'undefined'.
  @Input() cursoId: number;

  usuarioLogado$ : Observable <UsuarioLogado> = this.usuarioLogadoService.retornaUsuarioLogado()

  constructor(private usuarioLogadoService: UsuarioLogadoService, private comentarioService: ComentarioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.reloadData();
    console.log(this.aulaId);
  }

  ngOnChanges() {
    this.reloadData();
    if(this.aulaId) {
      console.log(this.aulaId);
    }
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

  reloadData() {
    this.comentarios = this.comentarioService.comentarios(this.aulaId);
    console.log(this.comentarios);
  }

  deleta(id: any, cursoId: number) {
    console.log(cursoId);
    this.router.navigate(['user/aulas/comentario/deletar', id, 'curso', cursoId]);
  }
}
