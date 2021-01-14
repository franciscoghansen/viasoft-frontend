import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vs-status-color',
  templateUrl: './status-color.component.html',
  styleUrls: ['./status-color.component.sass']
})
export class StatusColorComponent implements OnInit {


  _status: string;
  _color: any;
  _none = { r: 255, g: 255, b: 255 };
  _verde = { r: 0, g: 145, b: 0 };
  _amarelo = { r: 255, g: 255, b: 0 };
  _vermelho = { r: 255, g: 0, b: 0 };

  @Input("status")
  set status(status: string) {
    this._status = status;
    switch (this._status) {
      case 'VERDE': {
        this._color = { ...this._verde };
        break;
      }
      case 'AMARELO': {
        this._color = { ...this._amarelo };
        break;
      }
      case 'VERMELHO': {
        this._color = { ...this._vermelho };
        break;
      }
      default:
        this._color = { ...this._none };
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
