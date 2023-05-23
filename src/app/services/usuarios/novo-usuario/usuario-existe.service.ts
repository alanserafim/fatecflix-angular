import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs';

import { NovoUsuarioService } from './novo-usuario.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

constructor(private novoUsuarioService : NovoUsuarioService) { }

//Validação assíncrona 
usuarioJaExiste(){
  return (control: AbstractControl) => {
    return control.valueChanges.pipe(
      //switch map para trocar o fluxo
      switchMap((email) => this.novoUsuarioService.verificaUsuarioExistente(email)
      ),
      // map para trocar o resultado
      map((emailExiste) =>
        emailExiste ? { emailExistente : true} : null
      ),
      //encerrar o fluxo / observable
      first()
  );
  };
}

}
