export class Matricula {
  id?: number;
  avaliacaoCurso?: number;
  nota?: number;
  status?: string;

  constructor (avaliacaoCurso: number, nota: number, status: string) {
    this.avaliacaoCurso = avaliacaoCurso
    this.nota = nota,
    this.status = status
  }
}
