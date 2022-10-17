import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-curso',
  templateUrl: './cadastrar-curso.component.html',
  styleUrls: ['./cadastrar-curso.component.css']
})
export class CadastrarCursoComponent implements OnInit {

  novoCursoForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }


  ngOnInit(): void {

    this.novoCursoForm = this.formBuilder.group(
      {
        titulo: ['',[Validators.required]],
        descricao:['',[Validators.required]],
        cargaHoraria: ['',[Validators.required]],
        dataAtualizacao: ['', [Validators.required]],
        mediaAvaliacao: [{value: '', disabled: true}]
      })
  }

  cadastrarCurso(){

  }

}
