import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms"

export function cpfValido(cpf: any): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const formGroup = control as FormGroup
      const inputCpf = formGroup.get(cpf)?.value

      if (validaCpf(inputCpf)) {
        return null
      } else {
        return { cpfInvalido: true }
      }
    }
}

function validaCpf(inputCpf: string){
  const cpfFormatado = inputCpf.replace(/\D/g, '');
  if(checaCPFRepetido(cpfFormatado) && checaEstruturaCPF(cpfFormatado)) {
      return true;
  }
  else {
    return false
  }
}


function checaCPFRepetido(cpf: string) {
  const valoresRepetidos = [
      '00000000000',
      '11111111111',
      '22222222222',
      '33333333333',
      '44444444444',
      '55555555555',
      '66666666666',
      '77777777777',
      '88888888888',
      '99999999999'
  ]
  let cpfValido = true
  valoresRepetidos.forEach(valor => {
      if(valor == cpf) {
          cpfValido = false
      }
  })
  return cpfValido
}



function checaEstruturaCPF(cpf: string){
  var soma = 0
    var resto
    for (var i = 1; i <= 9; i++)
        soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
    if (resto != parseInt(cpf.substring(9, 10)) ) return false
    soma = 0
    for (var i = 1; i <= 10; i++)
        soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
    if (resto != parseInt(cpf.substring(10, 11) ) ) return false
    return true
}



