'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('avaliacoes', 
      [{
        nota:'5',
        comentario: '',
        status_avaliacao: '',
        fk_prestador: '1',
        fk_cliente: '4',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'4',
        comentario: '',
        status_avaliacao: '',
        fk_prestador: '2',
        fk_cliente: '1',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'1',
        comentario: '',
        status_avaliacao: '',
        fk_prestador: '3',
        fk_cliente: '2',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'2',
        comentario: '',
        status_avaliacao: '',
        fk_prestador: '4',
        fk_cliente: '3',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'5',
        comentario: '',
        status_avaliacao: '',
        fk_prestador: '5',
        fk_cliente: '16',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'4',
        comentario: '',
        status_avaliacao: '',
        fk_prestador: '6',
        fk_cliente: '15',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'1',
        comentario: '',
        status_avaliacao: '',
        fk_prestador: '7',
        fk_cliente: '14',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'2',
        comentario: '',
        status_avaliacao: '',
        fk_prestador: '8',
        fk_cliente: '13',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'5',
        comentario: '',
        status_avaliacao: '',
        fk_prestador: '9',
        fk_cliente: '12',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'4',
        comentario: '',
        status_avaliacao: '',
        fk_prestador: '10',
        fk_cliente: '11',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'1',
        comentario: '',
        status_avaliacao: '',
        fk_prestador: '11',
        fk_cliente: '10',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'2',
        comentario: '',
        status_avaliacao: '',
        fk_prestador: '12',
        fk_cliente: '9',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'5',
        comentario: '',
        status_avaliacao: '',
        fk_prestador: '13',
        fk_cliente: '8',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'4',
        comentario: '',
        status_avaliacao: '',
        fk_prestador: '14',
        fk_cliente: '7',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'1',
        comentario: '',
        status_avaliacao: '',
        fk_prestador: '15',
        fk_cliente: '6',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'2',
        comentario: '',
        status_avaliacao: '',
        fk_prestador: '16',
        fk_cliente: '5',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('avaliacoes', null, {});
    
  }
};
