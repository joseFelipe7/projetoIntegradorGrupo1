'use strict';
//alteração da tabela pedidos, para adicionar as colunas: valor, resumo e aprovacao_cliente_orcamento

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'pedidos',
        'valor',
        {
          type: Sequelize.DECIMAL(10,2),
          allowNull: true,
        }
      ),
      queryInterface.addColumn(
        'pedidos',
        'resumo',
        {
          type: Sequelize.STRING(900),
          allowNull: true,
        }
      ),
      queryInterface.addColumn(
        'pedidos',
        'aprovacao_cliente_orcamento',
        {
          type: Sequelize.BOOLEAN,
          allowNull: true,
        }
      ),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('pedidos', 'valor'),
      queryInterface.removeColumn('pedidos', 'resumo'),
      queryInterface.removeColumn('pedidos', 'aprovacao_cliente_orcamento')
    ]);
  }
};