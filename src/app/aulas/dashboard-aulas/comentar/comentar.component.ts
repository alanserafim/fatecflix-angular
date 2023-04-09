import { ActivatedRoute, Router } from '@angular/router';
import { Comentario } from '../../../types/Comentario';
import { Component, OnInit, Input } from '@angular/core';
import { ComentarioService } from 'src/app/services/comentario/comentario.service';

@Component({
  selector: 'app-comentar',
  templateUrl: './comentar.component.html',
  styleUrls: ['./comentar.component.css']
})
export class ComentarComponent implements OnInit {
  isComentando = false;
  comentario: Comentario = new Comentario();
  submitted = false;
  // @ts-ignore: Object is possibly 'undefined'.
  @Input() cursoId: number;
  // @ts-ignore: Object is possibly 'undefined'.
  @Input() aulaId: number;


  constructor(private route: ActivatedRoute, private comentarioService: ComentarioService, private router: Router) { }

  ngOnInit(): void {
    this.comentario = new Comentario();
  }

  comentando(value: any) {
    if(value.target.value !== '') {
      console.log(this.aulaId);
    }
  }

  novoComentario(): void {
    this.submitted = true;
    this.comentario = new Comentario();
  }

  cadastrarComentario() {
    this.comentarioService.comentar(this.comentario, this.aulaId)
      .subscribe((data) => {
        console.log(data);
        this.router.navigate(['/usuario/sucesso']);
      },
      (error) => {
        alert("Cadastro não realizado!");
        console.log(error);
        console.log(this.comentario);
        console.log(this.cursoId);
      })
  }

  onSubmit() {
    this.submitted = true;
    this.cadastrarComentario();
  }
}
