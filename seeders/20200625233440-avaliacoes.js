'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('avaliacoes', 
      [{
        nota:'5',
        comentario: '',
        status_avaliacoes: '',
        prestadores_idprestadores: '1',
        cliente_id: '',
        data_cadastro: ''
      },
      {
        nota:'4',
        comentario: '',
        status_avaliacoes: '',
        prestadores_idprestadores: '2',
        cliente_id: '',
        data_cadastro: ''
      },
      {
        nota:'1',
        comentario: '',
        status_avaliacoes: '',
        prestadores_idprestadores: '3',
        cliente_id: '',
        data_cadastro: ''
      },
      {
        nota:'2',
        comentario: '',
        status_avaliacoes: '',
        prestadores_idprestadores: '4',
        cliente_id: '',
        data_cadastro: ''
      }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('avaliacoes', null, {});
    
  }
};
