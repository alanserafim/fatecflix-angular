import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-aulas',
  templateUrl: './listar-aulas.component.html',
  styleUrls: ['./listar-aulas.component.css']
})
export class ListarAulasComponent implements OnInit {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  
  constructor() { }

  ngOnInit(): void {
  }

}
