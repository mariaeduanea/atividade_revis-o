"use strict";
class Projeto {
    name;
    data;
    descricao;
    tecnologia;
    constructor(name, data, descricao, tecnologia) {
        this.name = name;
        this.data = data;
        this.descricao = descricao;
        this.tecnologia = tecnologia;
    }
}
const projeto1 = new Projeto('projeto1', new Date('15-03-2024'), 'desenvolver software de expansão', 'linguagem de tecnologia');
console.log(projeto1);
