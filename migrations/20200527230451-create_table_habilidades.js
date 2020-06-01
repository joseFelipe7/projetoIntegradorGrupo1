module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('habilidades', {
      id:{
        primaryKey:true,
        autoIncrement:true,
        type:Sequelize.INTEGER 
      },
      titulo:{
        type:Sequelize.STRING(190)
      },
      inicio_profissao:{
        type:Sequelize.DATE,
        allowNull:false
      },
      descricao:{
       type:Sequelize.STRING(290)
      },
      
      fk_prestador: { 
        type: Sequelize.INTEGER, 
        references:{
          model:{
            tableName: 'prestador'
          },
          key:'id'
        }
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('habilidades');
  }
};
