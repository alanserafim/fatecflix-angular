import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { controlValuesAreEqual } from './validators/campos-iguais.validator';

@Component({
  selector: 'app-novo-usuario-cadastro',
  templateUrl: './novo-usuario-cadastro.component.html',
  styleUrls: ['./novo-usuario-cadastro.component.css']
})
export class NovoUsuarioCadastroComponent implements OnInit {

  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {

    this.novoUsuarioForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        cpf: ['', [Validators.required, Validators.minLength(11)]],
        nome: ['', [Validators.required]],
        dataNascimento: [''],
        curso: [''],
        anoIngresso: [''],
        semestreIngresso: [''],
        periodo: [''],
        senha: ['', [Validators.required]],
        confirmacao: ['', [Validators.required]]
      },
      {
        validators: [controlValuesAreEqual("senha", "confirmacao")]
      }
    )
  }

  cadastrar(){

  }




}
