import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGridConsultaServicoComponent } from './card-grid-consulta-servico.component';

describe('CardGridConsultaServicoComponent', () => {
  let component: CardGridConsultaServicoComponent;
  let fixture: ComponentFixture<CardGridConsultaServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGridConsultaServicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGridConsultaServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
