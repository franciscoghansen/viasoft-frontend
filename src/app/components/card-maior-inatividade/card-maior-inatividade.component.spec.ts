import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMaiorInatividadeComponent } from './card-maior-inatividade.component';

describe('CardMaiorInatividadeComponent', () => {
  let component: CardMaiorInatividadeComponent;
  let fixture: ComponentFixture<CardMaiorInatividadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMaiorInatividadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMaiorInatividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
