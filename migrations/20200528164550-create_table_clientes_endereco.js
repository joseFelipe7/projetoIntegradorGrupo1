'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.createTable('clientes_endereco', { 
        id:{
          primaryKey:true,
          autoIncrement:true,
          type:Sequelize.INTEGER 
        },
        logradouro:{
         type:Sequelize.STRING(190)
        },
        uf:{
          type:Sequelize.CHAR(2)
        },
        cidade:{
          type:Sequelize.STRING(90)
        },
        bairro:{
          type:Sequelize.STRING(90)
        },
        cep:{
          type:Sequelize.INTEGER
        },
        numero:{
          type:Sequelize.INTEGER
        },
        complemento:{
          type:Sequelize.STRING(90)
        },
        tipo_endereco:{
          type:Sequelize.CHAR(1)
        }
          
      });
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.dropTable('clientes_endereco');
    
  }
};
