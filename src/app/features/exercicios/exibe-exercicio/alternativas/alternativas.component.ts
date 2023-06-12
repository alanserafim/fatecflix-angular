import { map } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Afirmativa, Exercicio, ExercicioTrueFalse, Resposta } from 'src/app/types/Exercicio';

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
  get formAfirmativas(): FormArray {
    return this.exercicioForm.get('afirmativas') as FormArray;
  }

  exercicio : ExercicioTrueFalse = {
    exercicioId: 1,
    titulo: "O que são props em React?",
    enunciado: "Props são muito importantes para o react, com base na aula responda:",
    proposicao: "Selecione as alternativas corretas",
    afirmativas: [
      {
        identificador: "A",
        conteudo: "São funções anônimas",
        corretiva: "Opção incorreta",
        categoria: false
      },
      {
        identificador: "B",
        conteudo: "São hooks de estado",
        corretiva: "Opção incorreta",
        categoria: false
      },
      {
        identificador: "C",
        conteudo: "São paramêtros que podem ser passados nas tags",
        corretiva: "Opção correta",
        categoria: true
      },
      {
        identificador: "D",
        conteudo: "O termo props significa propriedades",
        corretiva: "Opção correta",
        categoria: true
      },
      {
        identificador: "E",
        conteudo: "Refere-se ao ciclo de vida do componente",
        corretiva: "Opção incorreta",
        categoria: false
      },
    ]
  }

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // this.getIdentificador();

      //@ts-ignore
    this.exercicio.afirmativas.forEach(afirmativa => {
      //@ts-ignore
      const FormGroupAfirmativa = this.criarFormGroupAfirmativa(afirmativa),
      // const formAfirmativas = this.exercicioForm.get('afirmativas') as FormArray;
      this.formAfirmativas.push(FormGroupAfirmativa);

    });
  }

  //criando o formulário
  exercicioForm = this._formBuilder.group({
    //@ts-ignore
    afirmativas: this._formBuilder.array([])
  });


  postarDados(){
    const dados = this.exercicioForm.value;
    console.log(dados);

  }

  criarFormGroupAfirmativa(afirmativa: Afirmativa){
    return this._formBuilder.group({
      identificador: [afirmativa.identificador],
      conteudo: [afirmativa.conteudo],
      corretiva: [afirmativa.corretiva],
      categoria: [afirmativa.categoria]
    })
  }



  getRespostas() {
    console.log(this.exercicioForm);
    this.verificador = false;
    const resposta = this.exercicioForm.getRawValue();
    // if (resposta.alternativaA == true && resposta.alternativaB == false) {
    //   this.verificador = true;
    //   return true;
    // } else {
    //   return false;
    // }
  }

  verificarRespostas() {
    this.submetido = true;
    this.postarDados()
    if (true) {
      this.resultado = 'Parabéns, resposta correta!';
    } else {
      this.resultado = 'Ops, resposta incorreta. Tente novamente!';
    }
  }
}
