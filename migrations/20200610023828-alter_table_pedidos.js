'use strict';
//alteração da tabela pedidos, para adicionar a coluna: data_serviço
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'pedidos',
      'data_servico',
      {
        type: Sequelize.DATE,
        allowNull: false
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('pedidos', 'data_servico');
  }
};
