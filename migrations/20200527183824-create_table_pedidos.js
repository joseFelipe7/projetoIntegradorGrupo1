'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pedidos', {
      id:{
        primaryKey:true,
        autoIncrement:true,
        type:Sequelize.INTEGER 
      },
      status_andamento:{
        type:Sequelize.STRING(5)
      },
      data_solicitacao:{
       type:Sequelize.DATE
       },
      titulo:{
        type:Sequelize.STRING(45)
        },
       descricao:{
       type:Sequelize.STRING(345)
      },
       idprestadores:{
         type:Sequelize.INTEGER
       },
       clientes_id:{
         type:Sequelize.INTEGER
       },
       forma_pagamento:{
         type:Sequelize.STRING(45),
         allowNull:false
       },
       idchat:{
         type:Sequelize.INTEGER
     },
      chats_clientes_id:{
        type:Sequelize.INTEGER
      },
      chats_prestadores_idprestadores:{
        type:Sequelize.INTEGER
      }
    });

  
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pedidos');
  }
};
