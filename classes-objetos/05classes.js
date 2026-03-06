class Senai  {
    codigo;
    cidade;
    // dentro de uma classe nã precisa da palavra function

    descreverEscola (){
        // a palavra reservada this refere ao objeto no contexto atual. É USADO PARA ACESAR PROPRIEDADEZ E METADOS DO OBJETO CORRENTE
        console.log (`o codigo ${senai.codigo} pertence a escola SENAI de ${this.cidade}.`)


    }

}
// instancia é uma ocorrencia. criação de um novo objeto
// criando uma instancia (uma nova escola)

const senaiArqa = new Senai();
// incrementando o objeto 
senaiArqa.codigo = 604;
senaiMat.cidade = 'Araraquara';

const senaiMat = new Senai();
senaiMat.codigo = 145;
senaiMat.cidade = 'Matão';
senaiMat.rua = 'Rua das flores'


senaiArqa.descreverEscola();
senaiMat.descreverEscola();