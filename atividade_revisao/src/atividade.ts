class Projeto {

    constructor(
        protected name: string,
         protected data: Date,
          protected descricao: string,
           protected tecnologia: string
           ) {
    }
}
const projeto1 = new Projeto('projeto1',new Date('05-03-2024'),'desenvolver software de expansão','linguagem de tecnologia')
console.log(projeto1)

class Funcionario{
    
    constructor(name: string,
        protected telefone: string,
          protected email:string,
           protected endereco:string,
            protected cpf: string,
            protected data_nascimento:Date,
              protected rg: string,
               protected cargo:string){
        
    }
}
const funcionario1 = new Funcionario('Martin Yago Souza','8439620681','martin_souza@predilectasorocaba.com.br','Rua Francisco Câncio','39.415.956-1',new Date('05-03-2004'),'870.003.484-37','programador')
console.log(funcionario1)
const funcionario2 = new Funcionario('Evelyn Emily','6337328417','evelyn_damata@ficopola.net','Rua Baltazar','377.539.141-03',new Date('03-02-1999'),'19.256.571-0','Operadora')
console.log(funcionario2)
class 