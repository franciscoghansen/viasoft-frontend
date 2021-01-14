import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'vs-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.sass']
})
export class GrupoComponent implements OnInit {

  @Input('header')
  header: string;
  @Input('showCloseButton')
  showClose: boolean = false;
  @Output()
  onClick : EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }
  close(){
    this.onClick.emit();
  }

}
