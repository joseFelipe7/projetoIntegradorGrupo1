'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('token_prestador', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      hash: { 
        type: Sequelize.STRING(255),
        allowNull: false, 
        unique: true,
      },
      usado: { 
        type: Sequelize.BOOLEAN, 
        allowNull: false, 
        unique: false,
      },
      prestador_id: { 
        type: Sequelize.INTEGER, 
        allowNull: false 
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('token_prestador');
  }
};
