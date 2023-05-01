import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/login/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private router:Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.autentica(this.email, this.senha).subscribe(()=>{
    this.openSnackBar2("Login realizado com sucesso","");
    setTimeout(()=>{this.router.navigate(['cursos/menu'])}, 1000)

    }, (error)=> {
      this.openSnackBar("usuário ou senha inválida","Cadastre-se");
      console.log(this.email, this.senha);
      console.log(error);
    }
    )
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000
    });
    this._snackBar._openedSnackBarRef?.onAction().subscribe(()=>{
      this.router.navigate(['home/cadastro'])
    })
  }

  openSnackBar2(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000
    });
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
