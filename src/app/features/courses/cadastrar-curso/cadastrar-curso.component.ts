import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NovoCurso } from 'src/app/types/NovoCurso';
import { Router } from '@angular/router';
import { NovoCursoService } from 'src/app/services/novo-curso/novo-curso.service';
import { SweetalertService } from 'src/app/services/sweetalert/sweetalert.service';

@Component({
  selector: 'app-cadastrar-curso',
  templateUrl: './cadastrar-curso.component.html',
  styleUrls: ['./cadastrar-curso.component.css'],
})
export class CadastrarCursoComponent implements OnInit {
  novoCursoForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private novoCursoService: NovoCursoService,
    private router: Router,
    private sweeAlertService: SweetalertService
  ) {}

  ngOnInit(): void {
    this.novoCursoForm = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      cargaHorario: ['', [Validators.required]],
      dataAtualizacao: ['', [Validators.required]],
      mediaAvaliacao: [{ value: 0, disabled: true }],
      categoria: ['', [Validators.required]],
    });
  }

  cadastrarCurso() {
    const novoCurso = this.novoCursoForm.getRawValue() as NovoCurso;
    this.novoCursoService.cadastrarNovoCursos(novoCurso).subscribe(
      () => {
        this.sweeAlertService.sucessAndMove(
          'Curso cadastrado com sucesso',
          'user/cursos/listar',
          'Sucesso'
        );
      },
      (error) => {
        this.sweeAlertService.error('Cadastro de curso não realizado');
        console.log(error);
        console.log(novoCurso);
      }
    );
  }
}
