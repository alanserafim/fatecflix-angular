export interface Usuario {
  email: string ,
  cpf: string,
  nome: string,
  dataNascimento: string,
  ra?: number,
  curso: string,
  anoIngresso: string,
  semestreIngresso: string;
  periodo: string,
  senha: string;
  confimacao: string,
  perfil: Array<string>
}
