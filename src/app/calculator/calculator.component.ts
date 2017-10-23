import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.template.html',
  styles: []
})
export class CalculatorComponent implements OnInit {

  v1: number = 0;
  v2: number = 0;

  soma: number;
  subtracao: number;
  multiplicacao: number;
  divisao: number;

  constructor() {}

  ngOnInit() {
  }

  efetuaOperacoes(): void {
    this.soma = this.v1+this.v2;
    this.subtracao = this.v1-this.v2;
    this.multiplicacao = this.v1*this.v2;
    
    if(this.v2 > 0)
      this.divisao = this.v1/this.v2;
    else
      this.divisao = 0;
  }

}
