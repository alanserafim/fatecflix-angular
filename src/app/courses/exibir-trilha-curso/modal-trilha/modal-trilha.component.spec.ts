import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTrilhaComponent } from './modal-trilha.component';

describe('ModalTrilhaComponent', () => {
  let component: ModalTrilhaComponent;
  let fixture: ComponentFixture<ModalTrilhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTrilhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalTrilhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
