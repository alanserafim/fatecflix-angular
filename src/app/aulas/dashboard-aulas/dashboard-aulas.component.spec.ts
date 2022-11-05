import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAulasComponent } from './dashboard-aulas.component';

describe('DashboardAulasComponent', () => {
  let component: DashboardAulasComponent;
  let fixture: ComponentFixture<DashboardAulasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAulasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
