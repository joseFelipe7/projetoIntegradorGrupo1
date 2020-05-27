'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('galeria_prestadores', {
      id:{
        primaryKey:true,
        autoIncrement:true,
        type:Sequelize.INTEGER 
      },
      foto:{
        type:Sequelize.STRING(190)
      },
      extensao:{
       type:Sequelize.STRING(5)
       },
      titulo:{
        type:Sequelize.STRING(45)
        },
       descricao:{
       type:Sequelize.STRING(45)
      },
       data_cadastro:{
         type:Sequelize.DATE
       },
      
      prestadores_idprestadores:{
        type:Sequelize.INTEGER
      }
    });

  
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('galeria_prestadores');
  }
};
