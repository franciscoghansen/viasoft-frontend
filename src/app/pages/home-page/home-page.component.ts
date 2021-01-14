import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UfCountDto } from 'src/app/dto/uf-count-dto';
import { EEstado } from 'src/app/enums/e-estado';
import { EServico } from 'src/app/enums/e-servico';
import { StatusUf } from 'src/app/model/status-uf';
import { StatusUfService } from 'src/app/services/status-uf.service';
import { DateUtils } from 'src/app/util/date-utils';

@Component({
  selector: 'vs-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass'],
  providers: [MessageService]
})
export class HomePageComponent implements OnInit {

  constructor(private messageService: MessageService) { }



  ngOnInit(): void {

  }

  




}
