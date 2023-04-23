import { CadastrarAulaService } from './../../../services/cadastrar-aula/cadastrar-aula.service';
import { Aula } from './../../../types/Aula';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-aulas',
  templateUrl: './cadastrar-aulas.component.html',
  styleUrls: ['./cadastrar-aulas.component.css']
})
export class CadastrarAulasComponent implements OnInit {
  aula: Aula = new Aula();
  submitted = false;
  // @ts-ignore: Object is possibly 'undefined'.
  cursoId: number;


  constructor(
    private router: Router,
    private cadastrarAulaService : CadastrarAulaService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.aula = new Aula();
    this.cursoId = this.activatedRoute.snapshot.params['id'];
  }

  novaAula(): void {
    this.submitted = true;
    this.aula = new Aula();
  }

  cadastraNovaAula(){

    this.cadastrarAulaService.cadastrarNovaAula(this.aula, this.cursoId)
    .subscribe((data) => {
      console.log(data);
      this.router.navigate(['user/usuario/sucesso']);
    },
    (error)=>{
      alert("Cadastro não realizado!");
      console.log(error);
      console.log(this.aula);
      console.log(this.cursoId)
    })
  }

  onSubmit() {
    this.submitted = true;
    this.cadastraNovaAula();
  }

  gotoCurso(id: number) {
    this.router.navigate(['user/cursos/detalhar', id]);
  }
}
