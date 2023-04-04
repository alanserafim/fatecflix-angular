import { NovoUsuario } from './../../types/NovoUsuario';
import { NovoUsuarioService } from './../../services/novo-usuario/novo-usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { controlValuesDifferent } from './validators/campos-diferentes.validator';

import { controlValuesAreEqual } from './validators/campos-iguais.validator';
import { cpfValido } from './validators/cpf-valido.validator';
import { Router } from '@angular/router';

import { imageCheck } from '../../../assets/imagens/icon-check.png';
import { imageClose } from '../../../assets/imagens/icon-close.png';

@Component({
  selector: 'app-novo-usuario-cadastro-home',
  templateUrl: './novo-usuario-cadastro.component.html',
  styleUrls: ['./novo-usuario-cadastro.component.css']
})
export class NovoUsuarioCadastroHomeComponent implements OnInit {

  novoUsuarioForm!: FormGroup;

  password: string = '';
  hasMinimumLength: boolean = true;
  hasUppercaseLetter: boolean = true;
  hasLowercaseLetter: boolean = true;
  hasNumber: boolean = true;

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
        //password: ['', [Validators.required, Validators.minLength(8)]],
        password: ['', [Validators.required]],
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

  updateRequirements(): void {
    this.hasMinimumLength = this.password.length >= 8;
    this.hasUppercaseLetter = /[A-Z]/.test(this.password);
    this.hasLowercaseLetter = /[a-z]/.test(this.password);
    this.hasNumber = /\d/.test(this.password);
  }

  cadastrar(){
    const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario
    novoUsuario.roles = ["ALUNO"]
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
