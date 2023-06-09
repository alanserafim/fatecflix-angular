import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alternativas',
  templateUrl: './alternativas.component.html',
  styleUrls: ['./alternativas.component.css']
})
export class AlternativasComponent implements OnInit {

  enunciado: string = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti repellendus sunt nesciunt labore nobis, illo in! Quod temporibus aperiam totam quo doloremque praesentium distinctio, omnis placeat deserunt incidunt! Quasi, accusantium!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias eos odit reprehenderit ducimus. Voluptatum incidunt voluptate eos earum enim modi voluptates expedita amet porro, sunt consequatur dolor odio possimus dolores?";
  proposicao: string = "Escolha a alternativa correta"
  identificador: string = "A"
  conteudo: string = "Lorem ipsum dolor sit amet consectetur adipisicinelit. Commodi quos, eaque libero laboriosam veniam eius nemo quod imped"

  constructor() { }

  ngOnInit(): void {
  }

}
