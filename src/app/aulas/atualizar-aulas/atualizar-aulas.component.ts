import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastrarAulaService } from 'src/app/services/cadastrar-aula/cadastrar-aula.service';
import { ConsultarCursoService } from 'src/app/services/consultar-curso/consultar-curso.service';
import { Aula } from 'src/app/types/Aula';

@Component({
  selector: 'app-atualizar-aulas',
  templateUrl: './atualizar-aulas.component.html',
  styleUrls: ['./atualizar-aulas.component.css']
})
export class AtualizarAulasComponent implements OnInit {
  // @ts-ignore: Object is possibly 'undefined'.
  aula: Aula;
  // @ts-ignore: Object is possibly 'undefined'.
  id: number;
  // @ts-ignore: Object is possibly 'undefined'.
  cursoId: number;

  submitted = false;

  constructor(private consultaAula: CadastrarAulaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.aula = new Aula();

    this.id = this.route.snapshot.params['id'];
    this.cursoId = this.route.snapshot.params['cursoId'];
    console.log(this.cursoId);

    this.consultaAula.getAulaById(this.id)
      .subscribe(data => {
        console.log(data)
        this.aula = data;
      }, error => console.log(error)
    );
  }

  updateAula() {
    this.consultaAula.atualizarAula(this.aula, this.id, this.cursoId)
      .subscribe(data => console.log(data), error => console.log(error));
    this.aula = new Aula();
    this.gotoList();
  }

  onSubmit() {
    this.updateAula();
  }

  gotoList() {
    this.router.navigate(['/usuario/sucesso']);
  }

  gotoAula() {
    this.router.navigate(['/aulas/dashboard', this.id]);
  }
}
