import { FormGroup } from '@angular/forms';

export function confirmacaoSenhaValidator(formGroup : FormGroup){
  const senha = formGroup.get('senha')?.value ?? '';
  const confirmacao = formGroup.get('confirmacao')?.value ?? '';

  if(senha.trim() + confirmacao.trim()){
    return senha === confirmacao ? null : { senhaDiferenteConfirmacao: true}
  } else {
    return null
  }

}
