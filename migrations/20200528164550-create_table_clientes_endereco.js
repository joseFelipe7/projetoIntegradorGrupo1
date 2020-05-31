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
         type:Sequelize.STRING(190),
         allowNull: false
         
        },
        uf:{
          type:Sequelize.CHAR(2),
          allowNull: false
        },
        cidade:{
          type:Sequelize.STRING(90),
          allowNull: false
        },
        bairro:{
          type:Sequelize.STRING(90)
        },
        cep:{
          type:Sequelize.INTEGER,
          allowNull: false
        },
        numero:{
          type:Sequelize.INTEGER,
          allowNull: false
        },
        complemento:{
          type:Sequelize.STRING(90)
        },
        tipo_endereco:{
          type:Sequelize.CHAR(1)
        },
        fk_clientes: { 
          type: Sequelize.INTEGER, 
          references:{
            model:{
              tableName: 'clientes'
            },
            key:'id'
          }
        }
          
      });
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.dropTable('clientes_endereco');
    
  }
};
