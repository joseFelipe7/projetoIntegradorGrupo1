
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('clientes', 
      [{
        nome: 'Luana',
        email: 'analulencina@gmail.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        data_nascimento: new Date("2020-07-09 02:58:33"),
        status_:'A',
        cpf:'02222211133',
        avatar:"/uploads/c-mulher.jpg",
        extensao_avatar:false
      },
      {
        nome: 'João Mario',
        email: 'joao@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        data_nascimento: new Date("2020-07-09 02:58:33"),
        status_:'A',
        cpf:'02222211122',
        avatar:"/uploads/c-homem.png",
        extensao_avatar:false
       
      },
      {
        nome: 'Maria Joana',
        email: 'maria@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        data_nascimento: new Date("2020-07-09 02:58:33"),
        status_:'A',
        cpf:'02222211174',
        avatar:"/uploads/c-mulher2.png",
        extensao_avatar:false
      },
      {
        nome: 'Marcos Melo',
        email: 'marcos@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        data_nascimento: new Date("2020-07-09 02:58:33"),
        status_:'A',
        cpf:'02222211154',
        avatar:"/uploads/c-homem3.jpg",
        extensao_avatar:false
       
      },
      {
        nome: 'Luana',
        email: 'analulencina2@gmail.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        data_nascimento: new Date("2020-07-09 02:58:33"),
        status_:'A',
        cpf:'02211122287',
        avatar:"/uploads/c-mulher4.jpg",
        extensao_avatar:false
      },
      {
        nome: 'João Mario',
        email: 'joao2@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        data_nascimento: new Date("2020-07-09 02:58:33"),
        status_:'A',
        cpf:'02211122288',
        avatar:"/uploads/c-homens.jpeg",
        extensao_avatar:false
       
      },
      {
        nome: 'Maria Joana',
        email: 'maria2@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        data_nascimento: new Date("2020-07-09 02:58:33"),
        status_:'A',
        cpf:'02211122289',
        avatar:"/uploads/maria.jpg",
        extensao_avatar:false
      },
      {
        nome: 'Marcos Melo',
        email: 'marcos2@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        data_nascimento: new Date("2020-07-09 02:58:33"),
        status_:'A',
        cpf:'02211122291',
        avatar:"/uploads/c-homem.png",
        extensao_avatar:false
       
      },
      {
        nome: 'Luana',
        email: 'analulencina3@gmail.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        data_nascimento: new Date("2020-07-09 02:58:33"),
        status_:'A',
        cpf:'02211122292',
        avatar:"/uploads/c-mulher4.jpg",
        extensao_avatar:false
      },
      {
        nome: 'João Mario',
        email: 'joao3@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        data_nascimento: new Date("2020-07-09 02:58:33"),
        status_:'A',
        cpf:'02211122293',
        avatar:"/uploads/c-homem3.jpg",
        extensao_avatar:false
       
      },
      {
        nome: 'Maria Joana',
        email: 'maria3@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        data_nascimento: new Date("2020-07-09 02:58:33"),
        status_:'A',
        cpf:'02211122294',
        avatar:"/uploads/c-mulher3.jpeg",
        extensao_avatar:false
      },
      {
        nome: 'Marcos Melo',
        email: 'marco3s@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        data_nascimento: new Date("2020-07-09 02:58:33"),
        status_:'A',
        cpf:'02211122295',
        avatar:"/uploads/c-homens.jpeg",
        extensao_avatar:false
       
      },
      {
        nome: 'Luana',
        email: 'analulencina4@gmail.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        data_nascimento: new Date("2020-07-09 02:58:33"),
        status_:'A',
        cpf:'02211122296',
        avatar:"/uploads/c-mulher2.png",
        extensao_avatar:false
      },
      {
        nome: 'João Mario',
        email: 'joao4@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        data_nascimento: new Date("2020-07-09 02:58:33"),
        status_:'A',
        cpf:'02211122297',
        avatar:"/uploads/joao.jpg",
        extensao_avatar:false
       
      },
      {
        nome: 'Maria Joana',
        email: 'maria4@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        data_nascimento: new Date("2020-07-09 02:58:33"),
        status_:'A',
        cpf:'02211122298',
        avatar:"/uploads/c-mulher.jpg",
        extensao_avatar:false
      },
      {
        nome: 'Marcos Melo',
        email: 'marcos4@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        data_nascimento: new Date("2020-07-09 02:58:33"),
        status_:'A',
        cpf:'02211122299',
        avatar:"/uploads/marcos.png",
        extensao_avatar:false
       
      }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('clientes', null, {});
    
  }
};
