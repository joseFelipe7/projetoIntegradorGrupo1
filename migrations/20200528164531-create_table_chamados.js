'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
 
      return queryInterface.createTable('chamados', { 
        id:{
          primaryKey:true,
          autoIncrement:true,
          type:Sequelize.INTEGER 
        },
        data_chamado:{
          type:Sequelize.DATE,
          allowNull:false
        },
        status:{
          type:Sequelize.CHAR(2)
        },
        motivo:{
          type:Sequelize.STRING(190),
          allowNull:false
        },
        mensagem:{
          type:Sequelize.STRING(290),
          allowNull:false
        },
        tipo_remetente:{
          type:Sequelize.CHAR(1)
        },
        nome:{
          type:Sequelize.STRING(190)
        },
        email:{
          type:Sequelize.STRING(190)
        },
        celular:{
          type:Sequelize.STRING(190)
        }
        
      });
    
  },

  down: (queryInterface, Sequelize) => {
  
      return queryInterface.dropTable('chamados');
    
  }
};
