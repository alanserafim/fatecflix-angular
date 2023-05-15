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
  aulaDescricao: string = '';
  aulaTitulo: string = '';

  videoId: string = '';
  videoUrl: string = '';
  safeUrl?: SafeResourceUrl;


  // @ts-ignore: Object is possibly 'undefined'.
  cursoId: number;

  usuarioLogado$: Observable<UsuarioLogado> = this.usuarioLogadoService.retornaUsuarioLogado();
  isLoggedIn = true;
  // @ts-ignore: Object is possibly 'undefined'.
  usuario: UsuarioLogado

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
    this.recebeUsuarioLogado();
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
      this.aulaDescricao = data[0].conteudo;
      this.aulaTitulo = data[0].titulo;
      console.log(this.aulaId);
      console.log(this.videoId);
    });
  }

  recebeUsuarioLogado() {
    this.usuarioLogadoService.retornaUsuarioLogado().subscribe(
      (usuario) => {
        this.usuario = usuario;
        console.log(usuario);
      },
      (error) => {
        alert('Credenciais inválidas');
        console.log(error);
      }
    );
  }

  updateSrc(url: any, id: any, conteudo: any, titulo: any) {
    let string = url;
    this.aulaId = id;
    console.log(this.aulaId);
    this.videoId = string.replace('https://www.youtube.com/watch?v=', '');
    this.aulaDescricao = conteudo;
    this.aulaTitulo = titulo;
    //this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);

  }
}
