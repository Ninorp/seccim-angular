import {Component, OnInit,EventEmitter,Input,Output} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl:'./list.template.html'
})
export class ListComponent implements OnInit {

  @Input('dataset') dataset : string[] = [];
  @Input('tituloLista') tituloLista: string;

  @Output() eventoDisparado = new EventEmitter<boolean>();

  controlDisplay: boolean = false;

  constructor() { }

  ngOnInit() { }

  disparaEventoExterno(): void {

    this.controlDisplay = !this.controlDisplay;

    this.eventoDisparado.emit(this.controlDisplay);
  }

}
