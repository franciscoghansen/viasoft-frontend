import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { DefaultValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { StatusUf } from 'src/app/model/status-uf';

@Component({
  selector: 'vs-lista-ufs',
  templateUrl: './lista-ufs.component.html',
  styleUrls: ['./lista-ufs.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ListaUfsComponent),
      multi: true,
    },
  ]
})
export class ListaUfsComponent extends DefaultValueAccessor {

  _value: StatusUf[] = [];

  set value(value: StatusUf[]) {
    this._value = value
  }

  get value() {
    return this._value;
  }

  _disabled: boolean = false;

  writeValue(value: StatusUf[]): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this._disabled = isDisabled;
  }
}
