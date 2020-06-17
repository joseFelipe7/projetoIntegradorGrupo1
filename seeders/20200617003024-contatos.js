'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('contatos', 
      [{
        celular_principal: '11888888888',
        celular_secundario: '11888888877',
        telefone_residencial:'1188888855',
        email_principal: 'email1@email.com',
        email_secundario:'email2@email.com',
        fk_cliente:'1'
      },
      {
        celular_principal: '11888888889',
        celular_secundario: '11888888810',
        telefone_residencial:'1188888856',
        email_principal: 'email4@email.com',
        email_secundario:'email5@email.com',
        fk_cliente:'2'
       
      },
      {
        celular_principal: '11888888811',
        celular_secundario: '11888888812',
        telefone_residencial:'1188888857',
        email_principal: 'email6@email.com',
        email_secundario:'email7@email.com',
        fk_cliente:'3'
      },
      {
        celular_principal: '11888888813',
        celular_secundario: '11888888814',
        telefone_residencial:'1188888858',
        email_principal: 'email8@email.com',
        email_secundario:'email9@email.com',
        fk_cliente:'4'
       
      }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('contatos', null, {});
    
  }
};
