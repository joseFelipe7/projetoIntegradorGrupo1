'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('token_cliente', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      hash: { 
        type: Sequelize.STRING(255),
        allowNull: false, //pode ser nulo? não
        unique: true,
      },
      usado: { 
        type: Sequelize.BOOLEAN, 
        allowNull: false, //pode ser nulo? não
        unique: false,
      },
      clientes_id: { 
        type: Sequelize.INTEGER, 
        allowNull: false 
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('token_cliente');
  }
};
