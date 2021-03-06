'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('avaliacoes', {
      id:{
        primaryKey:true,
        autoIncrement:true,
        type:Sequelize.INTEGER 
      },
      nota:{
        type:Sequelize.INTEGER
      },
      comentario:{
       type:Sequelize.STRING(190)
       },
      status_avaliacao:{
        type:Sequelize.CHAR(2)
        },  
      fk_prestador:{
        type:Sequelize.INTEGER
      },
      fk_cliente:{
        type:Sequelize.INTEGER
      },
      data_cadastro:{
        type:Sequelize.DATE,
        allowNull:false
      }
    });

  
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('avaliacoes');
  }
};
