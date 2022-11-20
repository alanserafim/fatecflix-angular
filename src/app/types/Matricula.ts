import { Curso } from "./Curso";

export class Matricula {
  matriculaId?: number;
  avaliacaoCurso?: number;
  nota?: number;
  status?: string;
  curso?: Curso[];

  constructor (avaliacaoCurso: number, nota: number, status: string) {
    this.avaliacaoCurso = avaliacaoCurso
    this.nota = nota,
    this.status = status
  }
}
