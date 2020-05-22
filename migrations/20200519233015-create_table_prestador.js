'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('prestador', { 
        id:{
          primaryKey:true,
          autoIncrement:true,
          type:Sequelize.INTEGER 
        },
        nome:{
          type:Sequelize.STRING(190),
          allowNull:false
        },
        email:{
         type:Sequelize.STRING(190),
         allowNull:false
        },
        senha:{
          type:Sequelize.STRING,
          allowNull:false
        },
         data_nascimento:Sequelize.DATE,
         status_:Sequelize.CHAR(1),
         cpf:Sequelize.STRING(11),
         avatar:Sequelize.STRING(190),
         extensao_avatar:Sequelize.CHAR(5),
         data_cadastro:Sequelize.DATE
       });

},

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.dropTable('prestador');
    
  }
};
