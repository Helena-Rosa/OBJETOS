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





let quadrado3 = [{}];

