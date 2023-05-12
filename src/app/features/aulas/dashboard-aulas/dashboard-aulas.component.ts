import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Aula } from 'src/app/types/Aula';
@Component({
  selector: 'app-dashboard-aulas',
  templateUrl: './dashboard-aulas.component.html',
  styleUrls: ['./dashboard-aulas.component.css']
})
export class DashboardAulasComponent implements OnInit {
  // @ts-ignore: Object is possibly 'undefined'.
  aulas: Observable<Aula[]>;

  videoId = "https://www.youtube.com/watch?v=wlTa_yTElGM"
  width = 1100;
  height = 500;

  constructor() {
   }

  ngOnInit(): void {
  }



}
