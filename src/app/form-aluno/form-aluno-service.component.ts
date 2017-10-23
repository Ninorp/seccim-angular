import { Component, OnInit } from '@angular/core';
import {Aluno} from '../aluno';
import {NgForm} from '@angular/forms';
import {AlunosService} from '../alunos.service';

@Component({
  selector: 'app-form-aluno',
  templateUrl:'form-aluno.template.html',
  providers: [AlunosService]
})
export class FormAlunoComponent implements OnInit {

  modelAluno = new Aluno('Chaves',76,186,92);
  listaAlunos : Aluno[] = [];

  constructor(private alunosService:AlunosService) {
    this.listaAlunos = this.alunosService.getAllAlunos();
  }

  ngOnInit() {
  }

  fetchData(form: NgForm): void{
    
    this.alunosService.newAluno(form.controls['nome'].value,
                                form.controls['idade'].value,
                                form.controls['altura'].value,
                                form.controls['peso'].value); 
    form.resetForm();               
  }
}
