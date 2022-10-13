import { Usuario } from './usuario';
import { RegistrationService } from './../../registration/registration.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {





  usuario: Usuario = {
    email : '',
    cpf : '',
    nome : '',
    dataNascimento : '',
    curso : '',
    anoIngresso : '',
    semestreIngresso : '',
    periodo : '',
    senha : '',
    confimacao : '',
    perfil : ["user"]

  }

  constructor(
    private registServive: RegistrationService,
    private router:Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      email : [''],
      cpf : [''],
      nome : [''],
      dataNascimento : [''],
      curso : [''],
      anoIngresso : [''],
      semestreIngresso : [''],
      periodo : [''],
      senha : [''],
      confimacao : [''],
      perfil : ["user"]

    })
  }

  cadastra(){
    const novoUsuario = this.novoUsuarioForm.getRawValue() as Usuario
    this.registServive.cadastra(this.usuario
      ).subscribe(()=>{
      this.router.navigate(['dados/sucesso'])

    }, (error)=> {
      alert("Cadastro não realizado!");
      console.log(error);
      console.log(this.usuario);

    }
    )
  }
  }
