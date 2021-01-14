import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { EEstado } from 'src/app/enums/e-estado';
import { StatusUf } from 'src/app/model/status-uf';
import { StatusUfService } from 'src/app/services/status-uf.service';
import { DateUtils } from 'src/app/util/date-utils';

@Component({
  selector: 'vs-card-grid-consulta-servico',
  templateUrl: './card-grid-consulta-servico.component.html',
  styleUrls: ['./card-grid-consulta-servico.component.sass'],
  providers: [MessageService]
})
export class CardGridConsultaServicoComponent implements OnInit {

  constructor(private service: StatusUfService, private messageService: MessageService) { }

  _autorizadores = EEstado.estados;

  _status: StatusUf[] = [];
  _autorizador: string = 'TODOS';
  _filtraDatas: boolean = false;
  _dataInicial: Date = new Date();
  _dataFinal: Date = new Date();
  ptBr = DateUtils.ptBr;

  _recordCount: number = 0;
  _pSize: number = 10;

  ngOnInit(): void {
  }

  onBuscarClick() {
    this.reset();
  }

  reset() {
    let uf = this._autorizador == 'TODOS' ? undefined : this._autorizador;
    let dI = this._filtraDatas ? this._dataInicial : undefined;
    let dF = this._filtraDatas ? this._dataFinal : undefined;
    this.service.count(uf, dI, dF)
      .then(count => {
        this._recordCount = count;
        let pages = count / this._pSize;
        if (pages - Math.trunc(pages) > 0) {
          pages++;
        }
        this.onPageChange({ first: 0, rows: this._pSize, page: 0, pageCount: pages })
      }, (e) => this.messageService.add({ severity: 'error', summary: 'Erro', detail: e }));
  }

  onPageChange(event: any) {
    let uf = this._autorizador == 'TODOS' ? undefined : this._autorizador;
    let dI = this._filtraDatas ? this._dataInicial : undefined;
    let dF = this._filtraDatas ? this._dataFinal : undefined;
    this._pSize = event.rows;
    this.service.findAll(event.page * event.rows, event.rows, uf, dI, dF)
      .then(objs => {
        if (objs != undefined && objs != null) {
          this._status = [...objs];
        } else {
          this._status = [];
        }
      }, (e) => this.messageService.add({ severity: 'error', summary: 'Erro', detail: e }));
  }

}
