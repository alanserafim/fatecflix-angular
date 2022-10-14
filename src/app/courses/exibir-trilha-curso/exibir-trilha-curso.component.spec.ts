import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirTrilhaCursoComponent } from './exibir-trilha-curso.component';

describe('ExibirTrilhaCursoComponent', () => {
  let component: ExibirTrilhaCursoComponent;
  let fixture: ComponentFixture<ExibirTrilhaCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExibirTrilhaCursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExibirTrilhaCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
