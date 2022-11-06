import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ListarAulasService } from 'src/app/services/listar-aulas/listar-aulas.service';
import { Aula } from 'src/app/types/Aula';
import { __values } from 'tslib';
import {Observable, of} from 'rxjs';
import { UsuarioLogado } from 'src/app/types/UsuarioLogado';
import { UsuarioLogadoService } from 'src/app/services/authentication/usuario-logado/usuario-logado.service';

@Component({
  selector: 'app-listar-aulas',
  templateUrl: './listar-aulas.component.html',
  styleUrls: ['./listar-aulas.component.css']
})
export class ListarAulasComponent implements OnInit {
  // @ts-ignore: Object is possibly 'undefined'.
  aulas: Observable<Aula[]>;

  videoUrl: string =  '';
  arr: Aula[] = [];
  // @ts-ignore: Object is possibly 'undefined'.
  cursoId: number;
  safeUrl?: SafeResourceUrl;
  videoId: string = '';

  usuarioLogado$ : Observable <UsuarioLogado> = this.usuarioLogadoService.retornaUsuarioLogado()
  isLoggedIn = true;

  constructor(private usuarioLogadoService: UsuarioLogadoService,private aulasService: ListarAulasService, private activatedRoute: ActivatedRoute, private _sanitizer: DomSanitizer) {
   }

  ngOnInit(){
    this.cursoId = this.activatedRoute.snapshot.params['id'];
    this.reloadData();
    this.getUrl();
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

  updateSrc(url: any) {
    let string = url;

    this.videoId = string.replace('https://www.youtube.com/watch?v=', '');
    //this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }

  getUrl() {
    this.aulasService.listarAulas(this.cursoId).subscribe(data => {
      this.videoUrl = data[0].video;
      this.videoId = this.videoUrl.replace('https://www.youtube.com/watch?v=', '');
      console.log(this.videoId);
      //this.videoUrl = url;
      //this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(url);
      //console.log(this.safeUrl);
    })
  }

  transform(url: string): SafeResourceUrl {
    var safeResource = this._sanitizer.bypassSecurityTrustResourceUrl(url);
    return safeResource;
  }

  reloadData() {
    this.aulas = this.aulasService.listarAulas(this.cursoId);
  }
}
