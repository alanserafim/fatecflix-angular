export class Exercicio {
  exercicioId?: number;
  titulo?: string;
  enunciado?: string;
  resposta?: string;
  afirmativas?: Array<string>;
}

export class ExercicioTrueFalse {
  exercicioId?: number;
  titulo?: string;
  enunciado?: string;
  proposicao?: string;
  afirmativas?: Array<Afirmativa>;
}

export class Afirmativa {
  identificador?: string;
  conteudo?: string;
  corretiva?: string;
  categoria?: boolean;
}

export interface Resposta {
  identificador?: string;
  categoria?: boolean;
}
