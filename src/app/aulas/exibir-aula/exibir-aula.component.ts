import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Aula } from 'src/app/types/Aula';
@Component({
  selector: 'app-exibir-aula',
  templateUrl: './exibir-aula.component.html',
  styleUrls: ['./exibir-aula.component.css']
})
export class ExibirAulaComponent implements OnInit {

  // @ts-ignore: Object is possibly 'undefined'.
  aula: Aula;
  safeURL: SafeResourceUrl;

  constructor(private _sanitizer: DomSanitizer) {
      this.aula = new Aula();
      let videoUrl: string = this.aula.video!;
      this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(videoUrl);

   }

  ngOnInit(): void {
  }

}
