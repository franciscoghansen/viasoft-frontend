import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardConsultaServicoUfComponent } from './card-consulta-servico-uf.component';

describe('CardConsultaServicoUfComponent', () => {
  let component: CardConsultaServicoUfComponent;
  let fixture: ComponentFixture<CardConsultaServicoUfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardConsultaServicoUfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardConsultaServicoUfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
