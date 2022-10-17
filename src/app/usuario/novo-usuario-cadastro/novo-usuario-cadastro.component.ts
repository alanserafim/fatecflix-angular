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
        nome: ['', [Validators.required]],
        dataNascimento: [''],
        ra: [''],
        curso: [''],
        anoIngresso: [''],
        semestreIngresso: [''],
        periodo: [''],
        senha: ['', [Validators.required, Validators.minLength(8)]],
        confirmacao: ['', [Validators.required]]
      },
      {
        validators: [
          controlValuesAreEqual("senha", "confirmacao"),
          controlValuesDifferent("senha", "email"),
          controlValuesDifferent("senha", "cpf"),
          cpfValido("cpf")
        ]
      }
    )
  }

  cadastrar(){
    const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario
    novoUsuario.perfil = ["user"]
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
