export interface NovoUsuario {
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
  confirmacao: string,
  perfil: Array<string>
}
