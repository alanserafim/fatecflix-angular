import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirCursoComponent } from './exibir-curso.component';

describe('ExibirCursoComponent', () => {
  let component: ExibirCursoComponent;
  let fixture: ComponentFixture<ExibirCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExibirCursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExibirCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
