import { Component, OnInit } from '@angular/core';
import { UsuarioLogadoService } from 'src/app/services/authentication/usuario-logado/usuario-logado.service';
import { NovoUsuario } from 'src/app/types/NovoUsuario';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultarUsuariosService } from 'src/app/services/consultar-usuarios/consultar-usuarios.service';
import { Usuario } from 'src/app/types/Usuario';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-atualizar-usuario',
  templateUrl: './atualizar-usuario.component.html',
  styleUrls: ['./atualizar-usuario.component.css']
})
export class AtualizarUsuarioComponent implements OnInit {
  myForm: FormGroup;

  submitted = false;
  // @ts-ignore: Object is possibly 'undefined'.
  userId: number;
  // @ts-ignore: Object is possibly 'undefined'.
  usuario: Usuario;

  constructor(private usuarioLogadoService: UsuarioLogadoService,
    private route: ActivatedRoute,
    private router: Router,
    private atualizaUsuario: ConsultarUsuariosService,
    private fb: FormBuilder) {
      this.myForm = this.fb.group({
        roles: this.fb.array([this.createItem()])
      })

      console.log(this.myForm)
    }

    get rolesForms() {
      return this.myForm.get('roles') as FormArray
    }

    createItem(): FormGroup {
      return this.fb.group({
        role: [],
      });
    }

    addRole() {
      const role = this.fb.group({
        role: [],
      })

      this.rolesForms.push(role);

      this.usuario.roles?.push(''+role.value);

      console.log(this.myForm)
    }

    deleteRole(i: number) {
      this.rolesForms.removeAt(i)
      console.log(this.myForm)

    }

  ngOnInit() {
    this.usuario = new Usuario();

    this.userId = this.route.snapshot.params['id'];

    this.atualizaUsuario.getUsuarioById(this.userId)
      .subscribe(data => {
        console.log(data)
        this.usuario = data;
      }, error => console.log(error)
    );
  }

  updateUsuario() {
    this.atualizaUsuario.updateUsuario(this.userId, this.usuario)
      .subscribe(data => console.log(data), error => console.log(error));
      this.usuario = new Usuario();

      // @ts-ignore: Object is possibly 'undefined'.
      this.gotoList();
  }

  onSubmit() {
    this.updateUsuario();
  }

  gotoList() {
    this.router.navigate(['/usuario/lista']);
  }


}
