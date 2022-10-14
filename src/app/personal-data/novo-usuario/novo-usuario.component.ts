import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NovoUsuarioService } from './../../services/novo-usuario/novo-usuario.service';
import { NovoUsuario } from './novo-usuario';
import { confirmacaoSenhaValidator } from './validators/confirmacao-senha-diferentes.validator';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.novoUsuarioForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        cpf: ['', [Validators.required, Validators.minLength(4)]],
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
        validators: [confirmacaoSenhaValidator]
      }
    )


  }

  cadastrar() {
    if(this.novoUsuarioForm.valid){
      const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
      //console.log(novoUsuario);
      this.novoUsuarioService.cadastraNovoUsuario(novoUsuario).subscribe(
      ()=> {
        this.router.navigate(['']);
      },
      (error) => {
        console.log(error);
      }
      );
    }
  }
}
