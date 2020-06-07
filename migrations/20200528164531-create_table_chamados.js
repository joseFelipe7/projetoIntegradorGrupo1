module.exports = {
  up: (queryInterface, Sequelize) => {
 
      return queryInterface.createTable('chamados', { 
        id:{
          primaryKey:true,
          autoIncrement:true,
          type:Sequelize.INTEGER 
        },
        assunto:{
          type:Sequelize.STRING(190),
          allowNull:false //pode ser nulo? Não
        },
        nome:{
          type:Sequelize.STRING(190),
          allowNull:false //pode ser nulo? Não
        },
        email:{
          type:Sequelize.STRING(190),
          allowNull:false //pode ser nulo? Não
        },
        celular:{
          type:Sequelize.STRING(11),
          allowNull:false //pode ser nulo? Não
        },
        telefone:{
          type:Sequelize.STRING(10),
          allowNull:true //pode ser nulo? Sim
        },
        mensagem:{
          type:Sequelize.STRING(500),
          allowNull:false
        },
        tipo_remetente:{
          type:Sequelize.CHAR(1),
          allowNull:false //pode ser nulo? Não
        },
        data_chamado:{
          type:Sequelize.DATE,
          allowNull:false
        },
        status:{
          type:Sequelize.CHAR(2),
          allowNull:true //pode ser nulo? Sim
        },
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('chamados');
  }
};
