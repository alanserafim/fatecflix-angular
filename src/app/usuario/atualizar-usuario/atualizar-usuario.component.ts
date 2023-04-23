import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultarUsuariosService } from 'src/app/services/consultar-usuarios/consultar-usuarios.service';
import { Usuario } from 'src/app/types/Usuario';
import { FormArray, FormBuilder, ValidatorFn, FormGroup, FormControl, Validators } from '@angular/forms';
import { Roles } from 'src/app/types/Roles';
import { __values } from 'tslib';

@Component({
  selector: 'app-atualizar-usuario',
  templateUrl: './atualizar-usuario.component.html',
  styleUrls: ['./atualizar-usuario.component.css']
})
export class AtualizarUsuarioComponent implements OnInit {

  formRole = this.fb.group({
    roles: new FormArray([])
  });

  submitted = false;
  // @ts-ignore: Object is possibly 'undefined'.
  userId: number;
  // @ts-ignore: Object is possibly 'undefined'.
  usuario: Usuario;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private atualizaUsuario: ConsultarUsuariosService,
    private fb: FormBuilder) {

  }

  roles = this.formRole.get('roles') as FormArray;


  addRoles() {
    this.roles.push(
      this.fb.group({
        role: ''
      })
    );
  }



  ngOnInit() {
    this.usuario = new Usuario();

    this.userId = this.route.snapshot.params['id'];

    this.atualizaUsuario.getUsuarioById(this.userId)
      .subscribe(data => {
        console.log(data)
        this.usuario = data;
        // Object is possibly 'undefined'.
        /*for(const role of this.usuario.roles) {
          this.roles.push(new FormControl(role, Validators.required));
        }*/
      }, error => console.log(error)
    );

    console.log(this.roles);
  }

  getRoles(form: FormArray) {
    // @ts-ignore: Object is possibly 'null'.
    return form.get('roles').controls;
  }

  removeDoFormArray(controls: FormArray, index: number) {
    controls.removeAt(index);
    this.usuario.roles?.pop()?.at(index);
  }

  remove(index: number){
    this.usuario.roles?.pop()?.at(index);
  }

  updateUsuario() {
    for(let value of this.roles.value) {
      console.log(value.role);
      this.usuario.roles?.push(value.role);
    }

    this.atualizaUsuario.updateUsuario(this.userId, this.usuario)
      .subscribe(data => console.log(data), error => console.log(error));
      this.usuario = new Usuario();
      // @ts-ignore: Object is possibly 'undefined'.
      this.gotoList();
  }

  onSubmit() {
    this.updateUsuario();
  }

  updateRole(value: Event, index: number) {
    // @ts-ignore: Object is possibly 'null'.
    console.log("changed", value.target.value);
// @ts-ignore: Object is possibly 'undefined'.
    this.usuario.roles[index] = value.target.value
  }

  gotoList() {
    this.router.navigate(['user/usuario/sucesso']);
  }
}

