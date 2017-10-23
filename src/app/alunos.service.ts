import { Injectable } from '@angular/core';
import {Aluno} from './aluno';

@Injectable()
export class AlunosService {

  listaAlunos: Aluno[] = [];

  constructor() {
    let a = new Aluno('Chaves',66,190,80);
    let b = new Aluno('Chiquinha',70,165,60);
    let c = new Aluno('Nhonho',75,165,110);
    let d = new Aluno('Kiko',64,190,85);
    
    this.listaAlunos.push(a,b,c,d);
  }
  
  getAlunoByName(nomeAluno: string): Aluno{
    return this.listaAlunos.find(x => x.nome == nomeAluno);
  }

  getAllAlunos(): Aluno[]{
    return this.listaAlunos;
  }

  newAluno(nome:string,idade:number,altura:number,peso:number): void{
    let newAluno = new Aluno(nome,idade,altura,peso);
    
    this.listaAlunos.push(newAluno);
  }

}
