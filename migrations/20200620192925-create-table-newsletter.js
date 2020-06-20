'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('newsletter', { 
        id: {
          type:Sequelize.INTEGER,
          primaryKey:true,
          autoIncrement:true
        },
        nome: Sequelize.STRING,
        email: Sequelize.STRING,
        data_cadastro:Sequelize.DATE
      });
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('newsletter');
  }
};
