'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('prestador', { 
      id_prestador: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement:true
      },
      email: {type: Sequelize.STRING, allowNull: false},
      password: {type: Sequelize.STRING, allowNull: false},
      name: {type: Sequelize.STRING, allowNull: false},
      data_nascimento: Sequelize.DATE,
      cpf: {type: Sequelize.STRING, allowNull: false}, 
      telefone: Sequelize.STRING,
      celular: {type: Sequelize.STRING, allowNull: false}, 
      avatar: {type: Sequelize.STRING, allowNull: false}, 
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE, 
      logradouro: Sequelize.STRING, 
      numero: Sequelize.STRING, 
      bairro: Sequelize.STRING,  
      cidade: Sequelize.STRING,  
      estado: Sequelize.STRING,  
      cep: {type: Sequelize.STRING, allowNull: false},
      cnpj: {type: Sequelize.STRING, allowNull: false}, 
      nome_fantasia: Sequelize.STRING
  });

},

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.dropTable('prestador');
    
  }
};
