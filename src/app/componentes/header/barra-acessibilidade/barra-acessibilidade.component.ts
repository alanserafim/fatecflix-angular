import { Component, HostListener, OnInit } from '@angular/core';
import { ETheme } from '../ETheme';


@Component({
  selector: 'app-barra-acessibilidade',
  templateUrl: './barra-acessibilidade.component.html',
  styleUrls: ['./barra-acessibilidade.component.css']
})
export class BarraAcessibilidadeComponent implements OnInit {
  public nome: string = ETheme.NOME_COM_CONTRASTE;
  constructor() { }
  
  ngOnInit(): void {
  }

  font_size = 16;

  setFontSize(idd: string) {

     //calc font size
     if(idd === 'a+'){
      this.font_size += 1;
    } else if(idd === 'a-') {
      this.font_size -= 1;
    } else {
      this.font_size = 16;
    }

    //set font size
    let htmlRoot:HTMLElement = <HTMLElement> document.getElementsByTagName("body")[0];
    let main:HTMLElement = <HTMLElement> document.getElementsByClassName("content")[0];
    //https://www.w3schools.com/jsref/met_htmlcollection_item.asp
    let cards:HTMLCollection = <HTMLCollection> document.getElementsByClassName("example-card");
    let titles:HTMLCollection = <HTMLCollection> document.getElementsByClassName("mat-card-title");
    //let loginCard:HTMLElement = <HTMLElement> document.getElementsByClassName("card")[0];
    let footer:HTMLCollection = <HTMLCollection> document.getElementsByClassName("developed");
    //console.log(htmlRoot);
    //console.log(card);

    if (htmlRoot != null) {
      htmlRoot.style.fontSize = `${this.font_size}px`;
      main.style.fontSize = `${this.font_size}px`;
      //loginCard.style.fontSize = `${this.font_size}px`;
      for (let i = 0; i < footer.length; i++) {
        // @ts-ignore: Object is possibly 'null'.
        footer.item(i).style.fontSize = `${this.font_size}px`;
      }

      for (let i = 0; i < cards.length; i++) {
        // @ts-ignore: Object is possibly 'null'.
        cards.item(i).style.fontSize = `${this.font_size}px`;
      }

      for(let i = 0; i < titles.length; i++) {
        // @ts-ignore: Object is possibly 'null'.
        titles.item(i).style.fontSize = `${this.font_size}px`;
        // @ts-ignore: Object is possibly 'null'.
        titles.item(i).style.fontWeight = "500"
      }

    }
  }

  public toogle() {
    const theme = document.body.classList.toggle('contraste');

    if (theme) {
      return (this.nome = ETheme.NOME_SEM_CONTRASTE);
    }

    return (this.nome = ETheme.NOME_COM_CONTRASTE)
  }

  // atalhos acessibilidade
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if(event.key == '+'){
      // Your row selection code
      console.log(event.key);
      this.setFontSize("a+")
    }
    if(event.key == '-'){
      // Your row selection code
      console.log(event.key);
      this.setFontSize("a-")
    }
    if(event.key == 'c'){
      // Your row selection code
      console.log(event.key);
      this.toogle();
    }
  }

  toggleDestination() {
      
  }
}
