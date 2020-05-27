module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable("contatos", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      celular_principal: { 
        type: Sequelize.STRING(11),
        allowNull: true
      },
      celular_secundario: { 
        type: Sequelize.STRING(11),
        allowNull: true
      },
      telefone_residencial: { 
        type: Sequelize.STRING(10),
        allowNull: true
      },
      telefone_comercial: { 
        type: Sequelize.STRING(10),
        allowNull: true
      },
      email_secundario: { 
        type: Sequelize.STRING(190),
        allowNull: true
      },
      clientes_id: { 
        type: Sequelize.INTEGER, 
        allowNull: true 
      },
      prestadores_id: { 
        type: Sequelize.INTEGER, 
        allowNull: true 
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('contatos');
  }
};

