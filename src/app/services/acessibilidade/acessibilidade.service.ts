import { Injectable } from '@angular/core';

const KEY = 'contraste';

@Injectable({
  providedIn: 'root'
})
export class AcessibilidadeService {

  retornaOpcaoContraste(){
    return sessionStorage.getItem(KEY) ?? "";
  }

  salvaOpcaoContraste(contraste : string){
    sessionStorage.setItem(KEY, contraste);
  }

  excluiOpcaoContraste(){
    sessionStorage.removeItem(KEY);
  }

  possuiOpcaoContraste(){
    return !!this.retornaOpcaoContraste();
  }
}
