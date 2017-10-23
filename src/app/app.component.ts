import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.template.html',
  styles: []
})

export class AppComponent {
  title: string = 'app';
  mostraTexto: boolean = false;

  cursos: string[] = ['Angular',
                      'Linux Básico',
                      'Programação para Microcontroladores',
                      'Minicurso de Android'];
  
  pessoas: string[] = ['Paulo','Ricardo','José','Rick','John'];

  recebeEvento(event: Event): void{
     this.mostraTexto = event? true: false;
  }
}