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
         allowNull: true
         
        },
        uf:{
          type:Sequelize.CHAR(2),
          allowNull: true
        },
        cidade:{
          type:Sequelize.STRING(90),
          allowNull: true
        },
        bairro:{
          type:Sequelize.STRING(90)
        },
        cep:{
          type:Sequelize.INTEGER,
          allowNull: true
        },
        numero:{
          type:Sequelize.INTEGER,
          allowNull:true        },
        complemento:{
          type:Sequelize.STRING(90)
        },
        tipo_endereco:{
          type:Sequelize.CHAR(1)
        },
        fk_cliente: { 
          type: Sequelize.INTEGER, 
          allowNull: false,
          references:{
            model:{
              tableName: 'clientes'
            },
            key:'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
          
      });
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.dropTable('clientes_endereco');
    
  }
};
