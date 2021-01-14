import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UfCountDto } from 'src/app/dto/uf-count-dto';
import { EServico } from 'src/app/enums/e-servico';
import { StatusUfService } from 'src/app/services/status-uf.service';

@Component({
  selector: 'vs-card-maior-inatividade',
  templateUrl: './card-maior-inatividade.component.html',
  styleUrls: ['./card-maior-inatividade.component.sass'],
  providers: [MessageService]
})
export class CardMaiorInatividadeComponent implements OnInit {

  constructor(private service: StatusUfService, private messageService: MessageService) { }

  ngOnInit(): void {
  }

  _servicos = EServico.servicos;
  _servico: string;
  _dto: UfCountDto;


  onServicoChange(servico: any) {
    if (servico.value) {
      this.service.maiorIndisponibilidade(servico.value)
        .then(count => {
          this._dto = { ...count }
        })
        .catch(error => {
          console.log(error);
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: error });
        });
    } else {
      this._dto = undefined;
    }
  }
}
