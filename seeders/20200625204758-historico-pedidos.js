'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('historico_pedidos', [{
      pedidos_id: 1,
      status_: 'ENV',
      data_modificacao: new Date("2020-07-09 02:58:33")
    },{
      pedidos_id: 2,
      status_: 'ENV',
      data_modificacao: new Date("2020-07-09 02:58:33")
    },{
      pedidos_id: 3,
      status_: 'ENV',
      data_modificacao: new Date("2020-07-09 02:58:33")
    },{
      pedidos_id: 4,
      status_: 'ENV',
      data_modificacao: new Date("2020-07-09 02:58:33")
    },{
      pedidos_id: 1,
      status_: 'ANALI',
      data_modificacao: new Date("2020-07-07 03:58:33")
    },{
      pedidos_id: 2,
      status_: 'ANALI',
      data_modificacao: new Date("2020-07-08 02:58:33")
    },{
      pedidos_id: 1,
      status_: 'AGUAR',
      data_modificacao: new Date("2020-07-10 13:30:20")
    },{
      pedidos_id: 2,
      status_: 'AGUAR',
      data_modificacao: new Date("2020-07-08 10:00:33")
    }
    ,{
      pedidos_id: 2,
      status_: 'CANC',
      data_modificacao: new Date("2020-08-20 08:36:14")
    },{
      pedidos_id: 3,
      status_: 'CANC',
      data_modificacao: new Date("2020-07-10 07:58:33")
    },{
      pedidos_id: 4,
      status_: 'CANC',
      data_modificacao: new Date("2020-07-11 12:50:25")
    },{
      pedidos_id: 1,
      status_: 'CONC',
      data_modificacao: new Date("2020-07-15 16:40:35")
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('historico_pedidos', null, {});

  }
};