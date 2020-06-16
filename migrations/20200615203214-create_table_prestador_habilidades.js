'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.createTable('prestador_habilidades', { 
        id:{
          primaryKey:true,
          autoIncrement:true,
          type:Sequelize.INTEGER 
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
        },
        fk_habilidades: { 
          type: Sequelize.INTEGER, 
          allowNull: false,
          references:{
            model:{
              tableName: 'habilidades'
            },
            key:'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        createdAt:{
          type: Sequelize.DATE,
          allowNull:false
        }, 
        updatedAt:{
          type: Sequelize.DATE,
          allowNull:false
        }
          
      });
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.dropTable('prestador_habilidades');
    
  }
};
