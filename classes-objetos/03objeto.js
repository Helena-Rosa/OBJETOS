/*  declaração de um objeto. Chave: 
valor;

01 - craiar objeto quadrado
02 - criar funçoes (método areas e perimetro)
03 - entender o contexto this
04 - escrever de forma abreviada
05 - acessar os dados do objeto 

*/

// foema literal
let quadrado = {
    lados: 4, 
    area: function(lado){
        return lado * lado
    }, 
    perimetro: function(lados){
        return lados + lados 
    },

    perimetro: function(lado){
        return this.lados * 4
    }

};


// forma reduzida
let quadrado2 = {
    lados: 4, 
    area (lado) {
        return lado * lado 
    },

    perimetro(lado) {
        return this. lado * lado 

    },
};

console.log(quadrado.perimetro(5))



let quadrado3 = [{}];




/* 01 - criar um objeto seai
02- acessar os dados da chave
03 - incrementar dados/alterar o objeto
04- excluir um valor do objeto*/


const senai = {
    codigo: 603,
    cidade: 'Araraquara'


};


console.log('-----------------------');

senai.telefone = 1633035252;
senai.rua ='Hugo Negrini';
senai.telefone = 1723158968;
delete senai.rua;


senai.endereco = {rua: 'Hugo Negrini', bairro: 'Quitandinha', numero: 60}
senai.alunos = ['SESI', 'EEBA', 'comunidade']

senai.endereco.numero = 62;
senai.alunos[2] = 'tecnico';


console.log(senai); 


