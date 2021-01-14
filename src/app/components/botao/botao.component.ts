import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'vs-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.sass']
})
export class BotaoComponent implements OnInit {

  @ViewChild('button')
  _element: ElementRef;

  @Input()
  label: string = '';
  @Input()
  type: string;
  @Input()
  icon: string = null;
  @Input()
  iconPos: string = 'left';
  @Output()
  onClick: EventEmitter<any> = new EventEmitter<any>();
  @Input('disabled')
  _disabled: boolean = false;
  @Input()
  style: string = null;
  @Input('class')
  _class: string = null;

  constructor() { }

  ngOnInit(): void {
    switch (this.type) {
      case 'salvar': {
        this.icon = this.icon != undefined ? this.icon : 'pi pi-check';
        break;
      }
      case 'editar': {
        this.icon = this.icon != undefined ? this.icon : 'pi pi-pencil';
        break;
      }
      case 'novo':
      case 'adicionar': {
        this.icon = this.icon != undefined ? this.icon : 'pi pi-plus';
        break;
      }
      case 'excluir': {
        this.icon = this.icon != undefined ? this.icon : 'pi pi-trash';
        this._class = "ui-button-danger";
        break;
      }
      case 'cancelar': {
        this.icon = this.icon != undefined ? this.icon : 'pi pi-times';
        break;
      }
      case 'fechar': {
        this.icon = this.icon != undefined ? this.icon : 'pi pi-times';
        break;
      }
      case 'abrir': {
        this.icon = this.icon != undefined ? this.icon : 'pi pi-folder-open';
        break;
      }
    }

  }

  doClick() {
    this.onClick.emit();
  }

}
