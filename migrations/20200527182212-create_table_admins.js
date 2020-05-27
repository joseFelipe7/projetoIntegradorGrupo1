'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('admins', {
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
        type:Sequelize.STRING(255),
        allowNull:false
      },
       data_nascimento:{
       type:Sequelize.DATE,
       allowNull:false
      },
       status_:{
         type:Sequelize.CHAR(1),
         allowNull:false
       },
       data_cadastro:{
         type:Sequelize.DATE,
         allowNull:false
       },
       avatar:{
         type:Sequelize.STRING(45),
         allowNull:false
       },
       extensao_avatar:{
         type:Sequelize.CHAR(5),
         allowNull:false 
     }});

  
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('admins');
  }
};
