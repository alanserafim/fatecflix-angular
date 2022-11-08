import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastrarAulaService } from 'src/app/services/cadastrar-aula/cadastrar-aula.service';
import { Aula } from 'src/app/types/Aula';

@Component({
  selector: 'app-deletar-aulas',
  templateUrl: './deletar-aulas.component.html',
  styleUrls: ['./deletar-aulas.component.css']
})
export class DeletarAulasComponent implements OnInit {
  // @ts-ignore: Object is possibly 'undefined'.
  aula: Aula;
  // @ts-ignore: Object is possibly 'undefined'.
  id: number;

  constructor(private router: Router,  private route: ActivatedRoute, private deletaAulaService: CadastrarAulaService) { }

  ngOnInit() {
    this.aula = new Aula();

    this.id = this.route.snapshot.params['id'];

    this.deletaAulaService.getAulaById(this.id)
      .subscribe(data => {
        console.log(data)
        this.aula = data;
      }, error => console.log(error)
    );
  }

  deleteAula() {
    this.deletaAulaService.deletaAula(this.id).subscribe(() => {
      this.router.navigate(["/usuario/sucesso"]);
    });
  }

  cancel() {
    this.router.navigate(["/cursos/listar"]);
  }

}
