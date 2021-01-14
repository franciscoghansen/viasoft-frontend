import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UfStatusDto } from 'src/app/dto/uf-status-dto';
import { EEstado } from 'src/app/enums/e-estado';
import { EServico } from 'src/app/enums/e-servico';
import { StatusUf } from 'src/app/model/status-uf';
import { StatusUfService } from 'src/app/services/status-uf.service';

@Component({
  selector: 'vs-card-consulta-servico-uf',
  templateUrl: './card-consulta-servico-uf.component.html',
  styleUrls: ['./card-consulta-servico-uf.component.sass'],
  providers: [MessageService]
})
export class CardConsultaServicoUfComponent implements OnInit {

  constructor(private service: StatusUfService, private messageService: MessageService) { }

  _servicos = EServico.servicos;
  _autorizadores = EEstado.estados.filter(aut => aut.value != 'TODOS');

  _servico: string;
  _autorizador: string;

  _status: UfStatusDto;

  ngOnInit(): void {
  }

  onProperyChange(){
    this._status = undefined;
  }

  onBuscarClick() {
    this._status = undefined;
    this.service.lastStatus(this._autorizador, this._servico)
      .then(status => {
        this._status = {...status};
      })
      .catch(error => {
        this.messageService.add({ severity: 'error', summary: 'erro', detail: error });
      })
  }

}
