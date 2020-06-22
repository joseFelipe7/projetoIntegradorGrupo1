module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'prestador',
      'categoria_id',
      {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('prestador', 'categoria_id');
  }
};
