'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('habilidades', 
      [{
        titulo:'Arquiteto',
        inicio_profissao:new Date("2016-06-10 02:58:33"),
        descricao:'Arquiteto especialista em interiores',
        fk_prestador:'1'
      },
      {
        titulo:'Médica',
        inicio_profissao:new Date("2015-06-10 02:58:33"),
        descricao:'Médica da familia',
        fk_prestador:'2'
       
      },
      {
        titulo:'Pintor',
        inicio_profissao:new Date("2010-02-15 02:58:33"),
        descricao:'Pintor profissional com 10 anos de experiência',
        fk_prestador:'3'
      },
      {
        titulo:'Cozinheira',
        inicio_profissao:new Date("2008-07-19 02:58:33"),
        descricao:'Cozinheira especialista em frutos do mar',
        fk_prestador:'4'
       
      }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('habilidades', null, {});
    
  }
};
