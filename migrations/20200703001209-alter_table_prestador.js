//alteração da tabela prestador para alterar tipo da coluna data_nascimento

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.changeColumn(
        'prestador',
        'data_nascimento',
        {
          type: Sequelize.DATEONLY,
        }
      );
  },

  down: (queryInterface, Sequelize) => {
  
    return queryInterface.changeColumn(
      'prestador',
      'data_nascimento',
      {
        type: Sequelize.DATE,
      }
    );
  }
};