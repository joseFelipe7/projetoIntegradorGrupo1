module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable("categorias", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      categoria: { 
        type: Sequelize.STRING(45), 
        allowNull: false, //pode ser nulo? não
        unique: true,
      },
      descricao: { 
        type: Sequelize.STRING(45), 
        allowNull: false, //pode ser nulo? não
        unique: true,
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('categorias');
  }
};
