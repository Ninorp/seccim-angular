import { Component, OnInit } from '@angular/core';
import {Aluno} from '../aluno';
import {NgForm} from '@angular/forms';
import {AlunosService} from '../alunos.service';

@Component({
  selector: 'app-form-aluno',
  templateUrl:'form-aluno.template.html'
})
export class FormAlunoComponent implements OnInit {

  modelAluno = new Aluno('Chaves',76,186,92);
  listaAlunos : Aluno[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  fetchData(form: NgForm): void{
    let newAluno = new Aluno(
                    form.controls['nome'].value,
                    form.controls['idade'].value,
                    form.controls['altura'].value,
                    form.controls['peso'].value);
    
    this.listaAlunos.push(newAluno); 
    form.resetForm();               
  }
}
