import { Comentario } from './../../types/Comentario';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComentarioService } from 'src/app/services/comentario/comentario.service';

@Component({
  selector: 'app-deleta-comentario',
  templateUrl: './deleta-comentario.component.html',
  styleUrls: ['./deleta-comentario.component.css']
})
export class DeletaComentarioComponent implements OnInit {
// @ts-ignore: Object is possibly 'undefined'.
  comentario: Comentario;
   // @ts-ignore: Object is possibly 'undefined'.
   id: number;
   // @ts-ignore: Object is possibly 'undefined'.
   cursoId:number
  constructor(private router: Router, private route: ActivatedRoute, private comentarioService: ComentarioService) { }

  ngOnInit(): void {
    this.comentario = new Comentario();

    this.id = this.route.snapshot.params['id'];
    this.cursoId = this.route.snapshot.params['cursoId'];

    this.comentarioService.getComentarioById(this.id)
      .subscribe(data => {
        console.log(data);
        this.comentario = data;
      }, error => console.log(error)
    );
  }

  deleteComentario() {
    console.log(this.cursoId);
    this.comentarioService.deletaComentario(this.id).subscribe(() => {
      this.router.navigate(["usuario/sucesso"]);
    })
  }

  cancel() {
    console.log(this.cursoId);
    this.router.navigate(["aulas/dashboard", this.cursoId]);
  }

}
