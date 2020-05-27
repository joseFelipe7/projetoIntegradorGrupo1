module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('itens_pedido', {
      idorcamentos:{
        primaryKey:true,
        autoIncrement:true,
        type:Sequelize.INTEGER 
      },
      valor:{
       type:Sequelize.INTEGER
      },
      item:{
        type:Sequelize.STRING(45)
      },
      descricao:{
        type:Sequelize.STRING(45)
      },
      pedidos_idpedidos:{
        type:Sequelize.INTEGER
      },
      pedidos_prestadores_idprestadores:{
        type:Sequelize.INTEGER
      },
      pedidos_cliente_id:{
        type:Sequelize.INTEGER
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('itens_pedido');
  }
};