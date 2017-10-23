export class TSBasics {

    public nomeCurso: string;

    constructor(){
        this.nomeCurso = 'Curso de Angular';

        console.log(this.funcao_teste(4));
    }
    
    funcao_teste(a:number): number {
        return a*3;
    }

}
