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
      email2: {type: Sequelize.STRING, allowNull: false},
      password: {type: Sequelize.STRING, allowNull: false},
      password2: {type: Sequelize.STRING, allowNull: false},
      name: {type: Sequelize.STRING, allowNull: false},
      sobrenome: Sequelize.STRING,
      sexo: Sequelize.STRING,
      data_nascimento: Sequelize.DATE,
      rg: Sequelize.STRING,
      emissor: Sequelize.STRING,
      data_emissao: Sequelize.DATE,
      telefone: Sequelize.STRING,
      celular: {type: Sequelize.STRING, allowNull: false}, 
      email3: Sequelize.STRING,
      endereco: Sequelize.STRING,
      numero: Sequelize.STRING,
      bairro: Sequelize.STRING,  
      cidade: Sequelize.STRING,  
      estado: Sequelize.STRING,  
      cep: {type: Sequelize.STRING, allowNull: false},
      cpf: {type: Sequelize.STRING, allowNull: false}, 
      cnpj: {type: Sequelize.STRING, allowNull: false},
      nome_fantasia: Sequelize.STRING,
      endereco2: Sequelize.STRING,
      numero2: Sequelize.STRING,
      bairro2: Sequelize.STRING, 
      cidade2: Sequelize.STRING,  
      estado2: Sequelize.STRING,  
      cep2: Sequelize.STRING,
      telefone2: Sequelize.STRING,
      celular2: Sequelize.STRING, 
      email4: Sequelize.STRING,
       
      nome_fantasia: Sequelize.STRING
  });

},

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.dropTable('prestador');
    
  }
};
