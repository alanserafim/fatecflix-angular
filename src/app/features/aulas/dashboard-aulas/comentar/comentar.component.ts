import { ActivatedRoute, Router } from '@angular/router';
import { Comentario } from '../../../../types/Comentario';
import { Component, OnInit, Input } from '@angular/core';
import { ComentarioService } from 'src/app/services/aulas/comentario/comentario.service';
import { SweetalertService } from 'src/app/services/sweetalert/sweetalert.service';

@Component({
  selector: 'app-comentar',
  templateUrl: './comentar.component.html',
  styleUrls: ['./comentar.component.css'],
})
export class ComentarComponent implements OnInit {
  isComentando = false;
  comentario: Comentario = new Comentario();
  // @ts-ignore: Object is possibly 'undefined'.
  @Input() cursoId: number;
  // @ts-ignore: Object is possibly 'undefined'.
  @Input() aulaId: number;

  constructor(
    private route: ActivatedRoute,
    private comentarioService: ComentarioService,
    private router: Router,
    private sweeAlertService: SweetalertService
  ) {}

  ngOnInit(): void {
    this.comentario = new Comentario();
  }

  comentando(value: any) {
    if (value.target.value !== '') {
      console.log(this.aulaId);
    }
  }

  novoComentario(): void {
    this.comentario = new Comentario();
  }

  cadastrarComentario() {
    this.comentarioService.comentar(this.comentario, this.aulaId).subscribe(
      (data) => {
        console.log(data);
        this.sweeAlertService.sucessAndRefresh(
          'Comentário cadastrado com sucesso',
          'Sucesso'
        );
      },
      (error) => {
        this.sweeAlertService.error('Ação não realizada');
        console.log(error);
        console.log(this.comentario);
        console.log(this.cursoId);
      }
    );
    this.novoComentario();
  }

  onSubmit() {
    this.cadastrarComentario();
  }
}
