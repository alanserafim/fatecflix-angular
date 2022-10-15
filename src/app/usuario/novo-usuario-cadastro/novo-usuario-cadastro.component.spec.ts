import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoUsuarioCadastroComponent } from './novo-usuario-cadastro.component';

describe('NovoUsuarioCadastroComponent', () => {
  let component: NovoUsuarioCadastroComponent;
  let fixture: ComponentFixture<NovoUsuarioCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoUsuarioCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoUsuarioCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
