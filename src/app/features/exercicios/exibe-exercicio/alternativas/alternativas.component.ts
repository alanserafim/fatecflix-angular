import { Usuario } from './../../../../types/Usuario';
import { map } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import {
  Afirmativa,
  Exercicio,
  ExercicioTrueFalse,
  Resposta,
} from 'src/app/types/Exercicio';

@Component({
  selector: 'app-alternativas',
  templateUrl: './alternativas.component.html',
  styleUrls: ['./alternativas.component.css'],
})
export class AlternativasComponent implements OnInit {
  submetido = false;
  correta = false;
  verificador = false;
  resultado: string = '';
  respostasCorretas: any = [{}];

  get formAfirmativas(): FormArray {
    return this.exercicioForm.get('afirmativas') as FormArray;
  }

  exercicio: ExercicioTrueFalse = {
    exercicioId: 1,
    titulo: 'O que são props em React?',
    enunciado:
      'Props são muito importantes para o react, com base na aula responda:',
    proposicao: 'Selecione as alternativas corretas',
    afirmativas: [
      {
        identificador: 'A',
        conteudo: 'São funções anônimas',
        corretiva: 'Opção incorreta',
        categoria: false,
      },
      {
        identificador: 'B',
        conteudo: 'São hooks de estado',
        corretiva: 'Opção incorreta',
        categoria: false,
      },
      {
        identificador: 'C',
        conteudo: 'São paramêtros que podem ser passados nas tags',
        corretiva: 'Opção correta',
        categoria: true,
      },
      {
        identificador: 'D',
        conteudo: 'O termo props significa propriedades',
        corretiva: 'Opção correta',
        categoria: true,
      },
      {
        identificador: 'E',
        conteudo: 'Refere-se ao ciclo de vida do componente',
        corretiva: 'Opção incorreta',
        categoria: false,
      },
    ],
  };

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.criarFormControls();
    this.respostasCorretas = this.getRespostasCorretas();
  }

  //criando o formulário
  exercicioForm = this._formBuilder.group({
    afirmativas: this._formBuilder.array([]),
  });

  criarFormGroupAfirmativa(afirmativa: Afirmativa) {
    return this._formBuilder.group({
      identificador: [afirmativa.identificador],
      conteudo: [afirmativa.conteudo],
      corretiva: [afirmativa.corretiva],
      categoria: [false],
      resposta: [afirmativa.categoria]
    });
  }

  criarFormControls() {
    //@ts-ignore
    this.exercicio.afirmativas.forEach((afirmativa) => {
      //@ts-ignore
      const FormGroupAfirmativa = this.criarFormGroupAfirmativa(afirmativa);
      // const formAfirmativas = this.exercicioForm.get('afirmativas') as FormArray;
      this.formAfirmativas.push(FormGroupAfirmativa);
    });
  }

  postarDados() {
    const dados = this.exercicioForm.value;
    console.log(dados);
  }

  getRespostasCorretas() {
    return this.exercicio.afirmativas?.map((afirmativa) => {
      return {
        identificador: afirmativa.identificador,
        categoria: afirmativa.categoria,
      };
    });
  }

  getRespostasUsuario() {
    return this.exercicioForm.getRawValue().afirmativas?.map((afirmativa) => {
      return {
        //@ts-ignore
        identificador: afirmativa.identificador,
        //@ts-ignore
        categoria: afirmativa.categoria,
      };
    });
  }

  comparaRespostas(
    RepostaCorretas: Afirmativa[],
    respostasUsuario: Afirmativa[]
  ) {
    for (let index = 0; index < RepostaCorretas.length; index++) {
      let acertou = false;
      if (
        respostasUsuario[index].identificador ===
        this.respostasCorretas[index].identificador
      ) {
        if (
          respostasUsuario[index].categoria !==
          this.respostasCorretas[index].categoria
        ) {
          return false;
        }
      }
    }
    return true;
  }

  verificarRespostas() {
    this.submetido = true;
    //this.postarDados();
    const respostasUsuario = this.getRespostasUsuario();
    const resultadoUsuario = this.comparaRespostas(
      this.respostasCorretas,
      respostasUsuario
    );
    if (resultadoUsuario) {
      this.verificador = true;
      this.resultado = 'Parabéns, resposta correta!';
    } else {
      this.resultado = 'Ops, resposta incorreta. Tente novamente!';
    }
  }
}
