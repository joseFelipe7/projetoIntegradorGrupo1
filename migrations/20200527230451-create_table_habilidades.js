module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('habilidades', {
      id:{
        primaryKey:true,
        autoIncrement:true,
        type:Sequelize.INTEGER 
      },
      descricao:{
       type:Sequelize.STRING(190)
      },
      titulo:{
        type:Sequelize.STRING(190)
      },
      prestadores_idprestadores:{
        type:Sequelize.INTEGER
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('habilidades');
  }
};
