'use strict';

//alteração da tabela prestador para adicionar a coluna nota

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.addColumn(
        'prestador',
         'nota',
          { 
            type: Sequelize.DECIMAL,
            allowNull: true 
          }
        );
    
  },

  down: (queryInterface, Sequelize) => {
  
      return queryInterface.removeColumn('prestador', 'nota');
 
  }
};
