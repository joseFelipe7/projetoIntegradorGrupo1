'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {   
      return queryInterface.createTable('prestador_endereco', { 
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
        },
        fk_prestador: { 
          type: Sequelize.INTEGER, 
          allowNull: false,
          references:{
            model:{
              tableName: 'prestador'
            },
            key:'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
          
      });
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.dropTable('prestador_endereco');
    
  }
};
