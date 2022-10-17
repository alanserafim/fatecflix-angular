import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessoRequisicaoComponent } from './sucesso-requisicao.component';

describe('SucessoRequisicaoComponent', () => {
  let component: SucessoRequisicaoComponent;
  let fixture: ComponentFixture<SucessoRequisicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucessoRequisicaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucessoRequisicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
