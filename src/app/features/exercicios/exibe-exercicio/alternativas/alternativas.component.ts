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
  + "dignissimos ullam laudantium dolores ad cumque facilis repellendus fugiadolor aperiam reiciendis."
  + "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque asperiores omnis, harum doloremque voluptates architecto quis aliquid deleniti"
  + "sequi a asumenda officiis, excepturi corrupti eum aperiam? Debitis sit non inventor assumenda.";

  constructor() { }

  ngOnInit(): void {
  }

}
