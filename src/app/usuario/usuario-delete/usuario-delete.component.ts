import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultarUsuariosService } from 'src/app/services/consultar-usuarios/consultar-usuarios.service';
import { DeletarUsuarioService } from 'src/app/services/deletar-usuario/deletar-usuario.service';
import { NovoUsuario } from 'src/app/types/NovoUsuario';
import { Usuario } from 'src/app/types/Usuario';

@Component({
  selector: 'app-usuario-delete',
  templateUrl: './usuario-delete.component.html',
  styleUrls: ['./usuario-delete.component.css']
})
export class UsuarioDeleteComponent implements OnInit {
  // @ts-ignore: Object is possibly 'undefined'.
  usuario: Usuario;
  // @ts-ignore: Object is possibly 'undefined'.
  userId: number;
  constructor(private deletarUsuario: DeletarUsuarioService, private consultaUsuario: ConsultarUsuariosService,  private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.usuario = new Usuario();

    this.userId = this.route.snapshot.params['id'];

    this.consultaUsuario.getUsuarioById(this.userId)
      .subscribe(data => {
        console.log(data)
        this.usuario = data;
      }, error => console.log(error)
    );
    // @ts-ignore: Object is possibly 'null'.
    /*const id = +this.route.snapshot.paramMap.get('id');
    this.consultaUsuario.getUsuarioById(id).subscribe((usuario) => {
      this.usuario = usuario;
    })*/

  }

  deleteUsuario(): void {
    this.deletarUsuario.deletaUsuario(this.userId).subscribe(() => {
      this.router.navigate(["/usuario/lista"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/usuario/lista"]);
  }

}
