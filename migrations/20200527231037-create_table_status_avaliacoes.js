module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('status_avaliacoes', {
      id:{
        primaryKey:true,
        autoIncrement:true,
        type:Sequelize.INTEGER 
      },
      descricao:{
       type:Sequelize.STRING(30)
      },
      codigo:{
        type:Sequelize.INTEGER
      },
      avaliacoes_idavaliacoes_prestadores:{
        type:Sequelize.INTEGER
      },
      avaliacoes_prestadores_idavaliacoes:{
        type:Sequelize.INTEGER
      },
      avaliacoes_cliente_id:{
        type:Sequelize.INTEGER
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('status_avaliacoes');
  }
};