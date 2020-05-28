'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('mensagens', {
      id:{
        primaryKey:true,
        autoIncrement:true,
        type:Sequelize.INTEGER 
      },
      mensagem:{
        type:Sequelize.STRING(999),
        allowNull:false
      },
      datamensagem:{
       type:Sequelize.DATE,
       allowNull:false
      },
      status_:{
        type:Sequelize.CHAR(1),
        allowNull:false
      },
      remetente:{
        type:Sequelize.CHAR(1),
        allowNull:false
      },
      id_chats:{
        type:Sequelize.INTEGER,
        allowNull:false
      }
    });
  
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('mensagens');
    
  }
};
