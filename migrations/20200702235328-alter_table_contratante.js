//alteração da tabela contratante para alterar tipo da coluna data_nascimento

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.changeColumn(
        'clientes',
        'data_nascimento',
        {
          type: Sequelize.DATEONLY,
        }
      );
  },

  down: (queryInterface, Sequelize) => {
  
    return queryInterface.changeColumn(
      'clientes',
      'data_nascimento',
      {
        type: Sequelize.DATE,
      }
    );
  }
};

