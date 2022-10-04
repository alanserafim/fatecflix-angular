import { AuthenticationService } from './../../authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  email = '';
  senha = '';

  constructor(private authService: AuthenticationService, private router:Router) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.autentica(this.email, this.senha).subscribe(()=>{
      this.router.navigate(['dados/sucesso']);
    }, (error)=> {
      alert("Usuário ou senha inválida");
      console.log(this.email, this.senha);

      console.log(error);

    }
    )
  }

}
