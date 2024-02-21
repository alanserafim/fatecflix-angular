import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.css']
})
export class BarraPesquisaComponent implements OnInit {

  @Input() categorias: any[] = [];

  categoriasControl = new FormControl('')
  @Output() categoriaSelected = ""
  @Output() novaCategoriaSelecionadaEvento = new EventEmitter<string>();

  constructor() {

  }

  ngOnInit(): void {
    this.categoriasControl.setValue("Todos")
    //@ts-ignore
    this.categoriaSelected = this.categoriasControl.value
    this.categoriasControl.valueChanges.subscribe(value => {
      //@ts-ignore
      this.categoriaSelected = value
    })

  }

  selecionaCategoria(value: string){
    this.novaCategoriaSelecionadaEvento.emit(value)
  }






  /*
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  //@ts-ignore
  filteredOptions: Observable<string[]>;

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

   private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }


  */



}
