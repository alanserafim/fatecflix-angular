import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-cursos',
  templateUrl: './categoria-cursos.component.html',
  styleUrls: ['./categoria-cursos.component.css']
})
export class CategoriaCursosComponent implements OnInit {

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  constructor() { }

  ngOnInit(): void {
  }

}
