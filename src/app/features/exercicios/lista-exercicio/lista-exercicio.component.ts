import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListaExercicioService } from 'src/app/services/lista-exercicios/lista-exercicio.service';
import { Exercicio } from 'src/app/types/Exercicio';
import { UsuarioLogado } from 'src/app/types/UsuarioLogado';
import {elementAt, Observable} from 'rxjs';
import { UsuarioLogadoService } from 'src/app/services/authentication/usuario-logado/usuario-logado.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { RespondeExercicioService } from 'src/app/services/responde-exercicio/responde-exercicio.service';

@Component({
  selector: 'app-lista-exercicio',
  templateUrl: './lista-exercicio.component.html',
  styleUrls: ['./lista-exercicio.component.css'],
})
export class ListaExercicioComponent implements OnInit {
   // @ts-ignore: Object is possibly 'undefined'.
   exercicios: Observable<Exercicio[]>;
// @ts-ignore: Object is possibly 'undefined'.
   cursoId: number;
   // @ts-ignore: Object is possibly 'undefined'.
   matriculaId: number;
// @ts-ignore: Object is possibly 'undefined'.
  selectAdvType: FormGroup;
// @ts-ignore: Object is possibly 'undefined'.
  arrayLength = 0;
  respostas: string[] = [];
  acertos = 0;
  historicoEnabled = false;
  status = '';

  acertosArr = [];
  controleAfirmativasSelecionadas = 0;

   usuarioLogado$ : Observable<UsuarioLogado> = this.usuarioLogadoService.retornaUsuarioLogado()
  isLoggedIn = true;
// @ts-ignore: Object is possibly 'undefined'.
  //formExercicios = new FormArray(this.exercicios.forEach(() => new FormGroup({})));

  constructor(private historicoService: RespondeExercicioService,private fb: FormBuilder, private listarExercicios: ListaExercicioService, private router: Router,private route: ActivatedRoute, private usuarioLogadoService: UsuarioLogadoService) { }

  ngOnInit(): void {
    this.cursoId = this.route.snapshot.params['cursoId'];
    this.matriculaId = this.route.snapshot.params['matriculaId'];
    this.selectAdvType = this.fb.group({
      firstCtrl: [null, Validators.required]
    });
    this.reloadData();
  }

  reloadData() {
    this.exercicios = this.listarExercicios.listarExercicios(this.cursoId);
    console.log(this.exercicios);
  }

  atualiza(id: any) {
    this.router.navigate(['exercicios/atualizar', id, 'curso', this.cursoId]);
  }

  deleta(id: any) {
    this.router.navigate(['exercicios/deletar', id, 'curso', this.cursoId]);
  }

  gotoCadastra() {
    this.router.navigate(['exercicios/cadastrar', this.cursoId]);
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

  responder(resposta: string, index: number, id: any) {
    console.log(resposta);
    this.respostas.push(resposta);

    this.exercicios.subscribe((data: Exercicio[]) => {
      if(data.length > 6) {
        if (data.at(index)?.resposta === resposta) {
          this.acertos++;

          console.log(this.acertos);
        }

      } else if (data.length < 6) {
        if (data.at(index)?.resposta === resposta) {
          this.acertos = this.acertos + 2.5;
          console.log(this.acertos);
        }
      } else if (data.length === 2) {
        if (data.at(index)?.resposta === resposta) {
          this.acertos = (this.acertos + 2) * 2;
          console.log(this.acertos);
        }
      } else if (data.length === 1) {
        if (data.at(index)?.resposta === resposta) {
          this.acertos = 10;
          console.log(this.acertos);
        }
      }

      if(this.acertos >= 6) {
        this.historicoEnabled = true;
        console.log(id);
        console.log(this.cursoId);
        this.historicoService.geraHistorico(this.acertos, this.matriculaId, this.cursoId).subscribe(
          data => console.log(data)
        );

        this.status = 'Parabéns você foi aprovado, continue assim!';
      } else {
        this.status = 'Você foi reprovado, estude mais!';
      }
    })
  }
}
