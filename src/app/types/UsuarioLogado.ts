import { NovoCurso } from "./NovoCurso";

export interface UsuarioLogado {
  name: string,
  email: string,
  cpf: string,
  perfil: Array<string>,
  anoIngresso: string,
  cursoMatriculado: string,
  periodo: string,
  dtNascimento: string,
  lastname: string,
  ra?: number,
  roles: Array<string>,
  username: string,
  cursos: Array<NovoCurso[]>,
  matriculas: Array<string[]>,
}
