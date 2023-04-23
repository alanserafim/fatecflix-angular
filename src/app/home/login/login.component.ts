import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/login/authentication.service';


@Component({
  selector: 'app-login-home',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginHomeComponent implements OnInit {

  hide = true;
  email = '';
  senha = '';

  constructor(
    private authService: AuthenticationService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.autentica(this.email, this.senha).subscribe(()=>{
    this.router.navigate(['user/cursos/menu']);
    }, (error)=> {
      alert("Usuário ou senha inválida");
      console.log(this.email, this.senha);
      console.log(error);
    }
    )
  }

  loginAutomaticoInstrutor() {
    const email = "instrutor";
    const senha = "12345678"
    this.authService.autentica(email, senha).subscribe(()=>{
      this.router.navigate(['user/cursos/menu']);
      }, (error)=> {
        alert("Usuário ou senha inválida");
        console.log(email, senha);
        console.log(error);
      }
      )
  }


  loginAutomaticoAluno() {
    const email = "aluno";
    const senha = "12345678"
    this.authService.autentica(email, senha).subscribe(()=>{
      this.router.navigate(['user/cursos/menu']);
      }, (error)=> {
        alert("Usuário ou senha inválida");
        console.log(email, senha);
        console.log(error);
      }
      )
    }
}
