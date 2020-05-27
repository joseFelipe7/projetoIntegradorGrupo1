module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable("agenda", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      dia: { 
        type: Sequelize.DATE 
      },
      status_: { 
        type: Sequelize.STRING(5), 
        allowNull: true
      },
      prestadores_id: { 
        type: Sequelize.INTEGER, 
        allowNull: false 
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('agenda');
  }
};
