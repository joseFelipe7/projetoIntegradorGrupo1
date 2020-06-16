'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('clientes', 
      [{
        nome: 'Joana Maria',
        email: 'joana@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        data_nascimento: null,
        status_:'A',
        cpf:'02222211133',
        avatar:false,
        extensao_avatar:false
      },
      {
        nome: 'João Mario',
        email: 'joao@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        data_nascimento: null,
        status_:'A',
        cpf:'02222211122',
        avatar:false,
        extensao_avatar:false
       
      },
      {
        nome: 'Maria Joana',
        email: 'maria@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        data_nascimento: null,
        status_:'A',
        cpf:'02222211174',
        avatar:false,
        extensao_avatar:false
      },
      {
        nome: 'Marcos Melo',
        email: 'marcos@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        data_nascimento: null,
        status_:'A',
        cpf:'02222211154',
        avatar:false,
        extensao_avatar:false
       
      }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('clientes', null, {});
    
  }
};
