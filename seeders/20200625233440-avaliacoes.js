'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('avaliacoes', 
      [{
        nota:'5',
        comentario: '',
        status_avaliacao: '',
        prestadores_idprestadores: '1',
        clientes_id: '',
        data_cadastro: ''
      },
      {
        nota:'4',
        comentario: '',
        status_avaliacao: '',
        prestadores_idprestadores: '2',
        clientes_id: '',
        data_cadastro: ''
      },
      {
        nota:'1',
        comentario: '',
        status_avaliacao: '',
        prestadores_idprestadores: '3',
        clientes_id: '',
        data_cadastro: ''
      },
      {
        nota:'2',
        comentario: '',
        status_avaliacao: '',
        prestadores_idprestadores: '4',
        clientes_id: '',
        data_cadastro: ''
      }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('avaliacoes', null, {});
    
  }
};
