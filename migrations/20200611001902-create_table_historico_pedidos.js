module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('historico_pedidos', { 
      id:{
        primaryKey:true,
        autoIncrement:true,
        type:Sequelize.INTEGER 
      },
      pedidos_id:{
        type:Sequelize.INTEGER,
        allowNull:false //pode ser falso? Não
      },
      status_:{
       type:Sequelize.STRING(5),
       allowNull:false
      },
       data_modificacao:{
        type: Sequelize.DATE,
        allowNull:false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('historico_pedidos');
  }
};
