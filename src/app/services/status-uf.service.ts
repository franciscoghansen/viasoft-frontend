import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UfCountDto } from '../dto/uf-count-dto';
import { UfStatusDto } from '../dto/uf-status-dto';
import { StatusUf } from '../model/status-uf';

@Injectable({
  providedIn: 'root'
})
export class StatusUfService {

  constructor(private http: HttpClient) { }

  private baseUrl(): string {
    return environment.api + '/status-uf';
  }

  maiorIndisponibilidade(servico: string): Promise<UfCountDto> {
    let url = this.baseUrl() + '/most-inactive/' + servico;
    return this.http.get<UfCountDto>(url).toPromise();
  }

  lastStatus(autorizador: string, servico: string): Promise<UfStatusDto> {
    let url = this.baseUrl() + '/last-status?autorizador=' + autorizador + '&servico=' + servico;
    return this.http.get<UfStatusDto>(url).toPromise();
  }

  count(uf?: string, dataInicial?: Date, dataFinal?: Date) : Promise<number>{
    const param: URLSearchParams = new URLSearchParams();
    param.append('by-uf', JSON.stringify(uf != undefined));
    param.append('by-date', JSON.stringify(dataInicial != undefined && dataFinal != undefined));
    if (uf) {
      param.append('uf', uf);
    }
    if (dataInicial) {
      let di = new Date( dataInicial.getTime() - ( dataInicial.getTimezoneOffset() * 60000 ) );
      param.append('start-date', JSON.stringify(di));
      console.log(JSON.stringify(di) );
    }
    if (dataFinal) {
      let df = new Date( dataFinal.getTime() - ( dataFinal.getTimezoneOffset() * 60000 ) );
      param.append('end-date', JSON.stringify(df));
      console.log(JSON.stringify(df) );
    }
    let url = this.baseUrl() + '/status-count?' + param.toString();
    return this.http.get<number>(url).toPromise();
  }

  findAll(start: number, length: number, uf?: string, dataInicial?: Date, dataFinal?: Date): Promise<StatusUf[]> {
    const param: URLSearchParams = new URLSearchParams();
    param.append('by-uf', JSON.stringify(uf != undefined));
    param.append('by-date', JSON.stringify(dataInicial != undefined && dataFinal != undefined));
    if (uf) {
      param.append('uf', uf);
    }
    if (dataInicial) {
      let di = new Date( dataInicial.getTime() - ( dataInicial.getTimezoneOffset() * 60000 ) );
      param.append('start-date', JSON.stringify(di));
      console.log(JSON.stringify(di) );
    }
    if (dataFinal) {
      let df = new Date( dataFinal.getTime() - ( dataFinal.getTimezoneOffset() * 60000 ) );
      param.append('end-date', JSON.stringify(df));
      console.log(JSON.stringify(df) );
    }
    console.log( param.toString() );
    let url = this.baseUrl() + '/status/' + start + '/' + length + '?' + param.toString();
    return this.http.get<StatusUf[]>(url).toPromise();
  }

}
