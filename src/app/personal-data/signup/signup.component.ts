import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RegistrationService } from '../../services/registration/registration.service';
import { Usuario } from './usuario';

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
    private registService: RegistrationService,
    private router:Router,
    ) { }

  ngOnInit(): void {

  }

  cadastra(){
    this.registService.cadastra(this.usuario
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
