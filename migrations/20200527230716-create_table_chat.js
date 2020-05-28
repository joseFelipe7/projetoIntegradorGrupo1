'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    
    return queryInterface.createTable('chats', 
    {
      id:{
        primaryKey:true,
        autoIncrement:true,
        type:Sequelize.INTEGER 
      },
      clientes_id:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
      prestadores_id:{
       type:Sequelize.INTEGER,
       allowNull:false
      },
       datainicio:Sequelize.DATE
     });
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('chats');
  }
};
