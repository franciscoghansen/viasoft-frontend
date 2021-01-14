import { AbstractModel } from "./abstract-model";

export class StatusUf extends AbstractModel {
    autorizador: string = '';
    data: Date = new Date();
    autorizacao: string = 'NONE';
    retAutorizacao: string = 'NONE';
    inutilizacao: string = 'NONE';
    consultaProtocolo: string = 'NONE';
    statusServico: string = 'NONE';
    consultaCadastro: string = 'NONE';
    recepcaoEvento: string = 'NONE';
}
