import { NovoUsuario } from './../../types/NovoUsuario';
import { NovoUsuarioService } from './../../services/novo-usuario/novo-usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { controlValuesDifferent } from './validators/campos-diferentes.validator';

import { controlValuesAreEqual } from './validators/campos-iguais.validator';
import { cpfValido } from './validators/cpf-valido.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo-usuario-cadastro',
  templateUrl: './novo-usuario-cadastro.component.html',
  styleUrls: ['./novo-usuario-cadastro.component.css']
})
export class NovoUsuarioCadastroComponent implements OnInit {

  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService,
    private router:Router
  ) { }

  ngOnInit(): void {

    this.novoUsuarioForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        cpf: ['', [Validators.required, Validators.minLength(11)]],
        name: ['', [Validators.required]],
        dtNascimento: [''],
        ra: [''],
        cursoMatriculado: [''],
        anoIngresso: [''],
        //semestreIngresso: [''],
        periodo: [''],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmacao: ['', [Validators.required]],
      },
      {
        validators: [
          controlValuesAreEqual("password", "confirmacao"),
          controlValuesDifferent("password", "email"),
          controlValuesDifferent("password", "cpf"),
          cpfValido("cpf")
        ]
      }
    )
  }

  cadastrar(){
    const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario
    novoUsuario.roles = ["aluno"]
    this.novoUsuarioService.cadastraNovoUsuario(novoUsuario).subscribe(()=> {
      this.router.navigate(['usuario/sucesso'])
    },
    (error)=> {
      alert("Cadastro não realizado!");
      console.log(error);
      console.log(novoUsuario);
    })
  }




}
