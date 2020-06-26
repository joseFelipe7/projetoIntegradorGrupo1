'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('avaliacoes', 
      [{
        nota:'5',
        comentario: 'Resolveu o meu problema! Muito obrigada.',
        status_avaliacao: '',
        prestadores_idprestadores: '1',
        clientes_id: '',
        data_cadastro: ''
      },
      {
        nota:'4',
        comentario: '',
        status_avaliacao: 'Adorei o atendimento',
        prestadores_idprestadores: '2',
        clientes_id: '',
        data_cadastro: ''
      },
      {
        nota:'1',
        comentario: 'Muito educado e rápido',
        status_avaliacao: '',
        prestadores_idprestadores: '3',
        clientes_id: '',
        data_cadastro: ''
      },
      {
        nota:'2',
        comentario: 'Recomendo a todos',
        status_avaliacao: '',
        prestadores_idprestadores: '4',
        clientes_id: '',
        data_cadastro: ''
      },
      {
        nota:'4',
        comentario: 'Muito prestativo!',
        status_avaliacao: '',
        prestadores_idprestadores: '5',
        clientes_id: '',
        data_cadastro: ''
      }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('avaliacoes', null, {});
    
  }
};
