import { Usuario } from './usuario';
import { RegistrationService } from './../../registration/registration.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    ra : 1,
    curso : '',
    anoIngresso : '',
    semestreIngresso : '',
    periodo : '',
    senha : '',
    confimacao : '',
    perfil : ["user"]

  }

  // email = '';
  // cpf = '';
  // nome = '';
  // dataNascimento = '';
  // ra = 1;
  // curso = '';
  // anoIngresso = '';
  // semestreIngresso = '';
  // periodo = '';
  // senha = '';
  // confimacao = '';
  // perfil=["user"];


  constructor(private registServive: RegistrationService, private router:Router) { }

  ngOnInit(): void {
  }

  cadastra(){
    this.registServive.cadastra(this.usuario
      // this.email,
      // this.cpf,
      // this.nome,
      //this.dataNascimento,
      //this.ra,
      //this.curso,
      //this.anoIngresso,
      //this.semestreIngresso,
      //this.periodo,
      // this.senha,
      //this.confimacao,
      // this.perfil
      ).subscribe(()=>{
      //this.router.navigate(['sucesso'])
      console.log("Deu certo");

    }, (error)=> {
      alert("Cadastro não realizado!");
      console.log(error);
      console.log(this.usuario);

    }
    )
  }
  }
