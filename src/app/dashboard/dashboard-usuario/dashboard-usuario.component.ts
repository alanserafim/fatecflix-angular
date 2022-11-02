import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-usuario',
  templateUrl: './dashboard-usuario.component.html',
  styleUrls: ['./dashboard-usuario.component.css']
})
export class DashboardUsuarioComponent implements OnInit {

  submitted = false;
  // @ts-ignore: Object is possibly 'undefined'.
  userId: number;
  // @ts-ignore: Object is possibly 'undefined'.
  usuario: Usuario;
  
  constructor() { }

  ngOnInit(): void {
  }

}
