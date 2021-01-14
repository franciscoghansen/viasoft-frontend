import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUfsComponent } from './lista-ufs.component';

describe('ListaUfsComponent', () => {
  let component: ListaUfsComponent;
  let fixture: ComponentFixture<ListaUfsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaUfsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaUfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
