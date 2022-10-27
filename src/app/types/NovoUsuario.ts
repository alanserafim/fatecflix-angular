export interface NovoUsuario {
  userId: number;
  anoIngresso: string,
  cpf: string,
  cursoMatriculado: string,
  dtNascimento: string,
  email: string,
  lastname: string,
  name: string,
  password: string;
  periodo: string,
  ra?: number,
  roles: Array<string>,
  //semestreIngresso: string;
  //confirmacao: string,
  username: string
}
