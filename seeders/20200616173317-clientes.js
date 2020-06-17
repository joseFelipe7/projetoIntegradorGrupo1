'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      
      return queryInterface.bulkInsert('prestador', 
      [{
        nome: 'Luan Julio',
        email: 'luan@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211144',
        data_nascimento: null,
        status_:'A',        
        avatar:false,
        extensao_avatar:false
      },
      {
        nome: 'Lais Maria',
        email: 'lais@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211154',
        data_nascimento: null,
        status_:'A',        
        avatar:false,
        extensao_avatar:false
      },
      {
        nome: 'Julio João',
        email: 'joao@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211147',
        data_nascimento: null,
        status_:'A',        
        avatar:false,
        extensao_avatar:false
      },
      {
        nome: 'Ana Maria',
        email: 'ana@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211132',
        data_nascimento: null,
        status_:'A',        
        avatar:false,
        extensao_avatar:false
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('prestador', null, {});
    
  }
};
