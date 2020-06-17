'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('clientes_endereco', 
      [{
        logradouro: 'rua das flores',
        uf: 'SP',
        cidade:'São Paulo',
        bairro: 'norte',
        cep:'62555444',
        numero:'22',
        complemento:null,
        fk_cliente:1
      },
      {
        logradouro: 'rua das margaridas',
        uf: 'SP',
        cidade:'São Paulo',
        bairro: 'sul',
        cep:'62555224',
        numero:'12',
        complemento:null,
        fk_cliente:2
       
      },
      {
        logradouro: 'rua das amelias',
        uf: 'SP',
        cidade:'São Paulo',
        bairro: 'leste',
        cep:'62555774',
        numero:'15',
        complemento:null,
        fk_cliente:3
      },
      {
        logradouro: 'rua das rosas',
        uf: 'SP',
        cidade:'São Paulo',
        bairro: 'oeste',
        cep:'62555488',
        numero:'13',
        complemento:null,
        fk_cliente:4
       
      }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('clientes_endereco', null, {});
    
  }
};
