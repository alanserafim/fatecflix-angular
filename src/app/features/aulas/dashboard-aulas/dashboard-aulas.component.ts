import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioLogadoService } from 'src/app/services/authentication/usuario-logado/usuario-logado.service';
import { ListarAulasService } from 'src/app/services/listar-aulas/listar-aulas.service';
import { Aula } from 'src/app/types/Aula';
import { UsuarioLogado } from 'src/app/types/UsuarioLogado';

@Component({
  selector: 'app-dashboard-aulas',
  templateUrl: './dashboard-aulas.component.html',
  styleUrls: ['./dashboard-aulas.component.css'],
})
export class DashboardAulasComponent implements OnInit {
  // @ts-ignore: Object is possibly 'undefined'.
  aulas: Observable<Aula[]>;
  // @ts-ignore: Object is possibly 'undefined'.
  aulaId: number;

  videoId: string = '';
  videoUrl: string = '';
  safeUrl?: SafeResourceUrl;
  videoDescricao: string = '';

  // @ts-ignore: Object is possibly 'undefined'.
  cursoId: number;

  usuarioLogado$: Observable<UsuarioLogado> =
  this.usuarioLogadoService.retornaUsuarioLogado();
  isLoggedIn = true;

  panelOpenState = true;


  constructor(
    private usuarioLogadoService: UsuarioLogadoService,
    private aulasService: ListarAulasService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.cursoId = this.activatedRoute.snapshot.params['id'];
    this.reloadData();
    this.getUrl();
  }

  reloadData() {
    this.aulas = this.aulasService.listarAulas(this.cursoId);
  }

  getUrl() {
    this.aulasService.listarAulas(this.cursoId).subscribe((data) => {
      this.videoUrl = data[0].video;
      this.videoId = this.videoUrl.replace(
        'https://www.youtube.com/watch?v=',
        ''
      );
      this.aulaId = data[0].aulaId;
      this.videoDescricao = data[0].conteudo;
      console.log(this.aulaId);
      console.log(this.videoId);
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

  updateSrc(url: any, id: any, conteudo: any) {
    let string = url;
    this.aulaId = id;
    console.log(this.aulaId);
    this.videoId = string.replace('https://www.youtube.com/watch?v=', '');
    this.videoDescricao = conteudo
    //this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);

  }
}
