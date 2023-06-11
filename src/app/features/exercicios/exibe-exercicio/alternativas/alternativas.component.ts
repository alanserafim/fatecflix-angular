import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-alternativas',
  templateUrl: './alternativas.component.html',
  styleUrls: ['./alternativas.component.css']
})
export class AlternativasComponent implements OnInit {


  submetido = false;
  correta = false;
  verificador = false;
  enunciado: string = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti repellendus sunt nesciunt labore nobis, illo in! Quod temporibus aperiam totam quo doloremque praesentium distinctio, omnis placeat deserunt incidunt! Quasi, accusantium!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias eos odit reprehenderit ducimus. Voluptatum incidunt voluptate eos earum enim modi voluptates expedita amet porro, sunt consequatur dolor odio possimus dolores?";
  proposicao: string = "Escolha a alternativa correta"
  identificador: string = "A"
  conteudo: string = "Lorem ipsum dolor sit amet consectetur adipisicinelit. Commodi quos, eaque libero laboriosam veniam eius nemo quod imped"
  resultado: string = ""

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

    exercicioForm = this._formBuilder.group({
      alternativaA: false,
      alternativaB: false,
    });



  verificarRespostas() {
    this.submetido = true;
    this.verificador = true;
    if(this.verificador){
      this.resultado = "Parabéns, resposta correta!"
    } else {
      this.resultado = "Ops, resposta incorreta. Tente novamente!"
    }

  }

}
