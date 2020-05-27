module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable("cbo", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      codigo: { 
        type: Sequelize.INTEGER,
        allowNull: false, //pode ser nulo? não
        unique: true,
      },
      descricao: { 
        type: Sequelize.STRING(45), 
        allowNull: false, //pode ser nulo? não
        unique: true,
      },
      prestadores_id: { 
        type: Sequelize.INTEGER, 
        allowNull: false 
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cbo');
  }
};
