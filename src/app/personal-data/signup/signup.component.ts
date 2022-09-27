import { RegistrationService } from './../../registration/registration.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email = '';
  cpf = '';
  nome = '';
  dataNascimento = '';
  ra = 1;
  curso = '';
  anoIngresso = '';
  semestreIngresso = '';
  periodo = '';
  senha = '';
  confimacao = '';
  perfil="user"


  constructor(private registServive: RegistrationService) { }

  ngOnInit(): void {
  }

  cadastra(){
    this.registServive.cadastra(
      this.email,
      this.cpf,
      this.nome,
      //this.dataNascimento,
      //this.ra,
      //this.curso,
      //this.anoIngresso,
      //this.semestreIngresso,
      //this.periodo,
      this.senha,
      //this.confimacao,
      this.perfil
      ).subscribe(()=>{
      console.log("cadastrado com sucesso");
    }, (error)=> {
      alert("Cadastro não realizado!");
      console.log(error);

    }
    )
  }
  }
