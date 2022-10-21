import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  curso: string;
  posicao: number;
  progresso: number;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {posicao: 1, curso: 'Node', progresso: 40, status: 'Em andamento'},
  {posicao: 2, curso: 'Spring', progresso: 10, status: 'Em andamento'},
  {posicao: 3, curso: 'Estrutura de Dados', progresso: 100, status: 'Concluído'},
];



@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
