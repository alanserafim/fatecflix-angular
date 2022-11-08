import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListaExercicioService } from 'src/app/services/lista-exercicios/lista-exercicio.service';
import { Exercicio } from 'src/app/types/Exercicio';
import { UsuarioLogado } from 'src/app/types/UsuarioLogado';
import {Observable} from 'rxjs';
import { UsuarioLogadoService } from 'src/app/services/authentication/usuario-logado/usuario-logado.service';

@Component({
  selector: 'app-lista-exercicio',
  templateUrl: './lista-exercicio.component.html',
  styleUrls: ['./lista-exercicio.component.css']
})
export class ListaExercicioComponent implements OnInit {
   // @ts-ignore: Object is possibly 'undefined'.
   exercicios: Observable<Exercicio[]>;
// @ts-ignore: Object is possibly 'undefined'.
   cursoId: number;

   usuarioLogado$ : Observable<UsuarioLogado> = this.usuarioLogadoService.retornaUsuarioLogado()
  isLoggedIn = true;

  constructor(private listarExercicios: ListaExercicioService, private router: Router,private route: ActivatedRoute, private usuarioLogadoService: UsuarioLogadoService) { }

  ngOnInit(): void {
    this.cursoId = this.route.snapshot.params['id'];
    this.reloadData();
  }

  reloadData() {
    this.exercicios = this.listarExercicios.listarExercicios(this.cursoId);
    console.log(this.exercicios);
  }

  atualiza(id: any) {
    this.router.navigate(['/exercicios/atualizar', id, 'curso', this.cursoId]);
  }

  deleta(id: any) {
    this.router.navigate(['/exercicios/deletar', id]);
  }

  gotoCadastra() {
    this.router.navigate(['/exercicios/cadastrar', this.cursoId]);
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

}
