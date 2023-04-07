import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/login/authentication.service';
import { RefreshService } from 'src/app/services/refresh/refresh.service';


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
    private refreshService: RefreshService
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.autentica(this.email, this.senha).subscribe(()=>{
    this.refreshService.setTrue;
    this.router.navigateByUrl('cursos/listar', { skipLocationChange: true}).then( () => {
      this.router.navigate(['cursos/listar'])
    });

    }, (error)=> {
      alert("Usuário ou senha inválida");
      console.log(this.email, this.senha);
      console.log(error);
    }
    )
  }
}
