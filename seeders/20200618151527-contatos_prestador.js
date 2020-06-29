'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('contatos_prestador', 
      [{
        celular_principal: '11888888888',
        celular_secundario: '11888888877',
        telefone_residencial:'1188888855',
        telefone_comercial:'1122225522',
        email_principal: 'email1@email.com',
        email_secundario:'email2@email.com',
        fk_prestador:'1'
      },
      {
        celular_principal: '11888888889',
        celular_secundario: '11888888810',
        telefone_residencial:'1188888856',
        telefone_comercial:'1122225528',
        email_principal: 'email4@email.com',
        email_secundario:'email5@email.com',
        fk_prestador:'2'
       
      },
      {
        celular_principal: '11888888811',
        celular_secundario: '11888888812',
        telefone_residencial:'1188888857',
        telefone_comercial:'1122225527',
        email_principal: 'email6@email.com',
        email_secundario:'email7@email.com',
        fk_prestador:'3'
      },
      {
        celular_principal: '11888888813',
        celular_secundario: '11888888814',
        telefone_residencial:'1188888858',
        telefone_comercial:'1122225532',
        email_principal: 'email8@email.com',
        email_secundario:'email9@email.com',
        fk_prestador:'4'
       
      },
      {
        celular_principal: '11888888888',
        celular_secundario: '11888888877',
        telefone_residencial:'1188888855',
        telefone_comercial:'1122225522',
        email_principal: 'email1@email.com',
        email_secundario:'email2@email.com',
        fk_prestador:'5'
      },
      {
        celular_principal: '11888888889',
        celular_secundario: '11888888810',
        telefone_residencial:'1188888856',
        telefone_comercial:'1122225528',
        email_principal: 'email4@email.com',
        email_secundario:'email5@email.com',
        fk_prestador:'6'
       
      },
      {
        celular_principal: '11888888811',
        celular_secundario: '11888888812',
        telefone_residencial:'1188888857',
        telefone_comercial:'1122225527',
        email_principal: 'email6@email.com',
        email_secundario:'email7@email.com',
        fk_prestador:'7'
      },
      {
        celular_principal: '11888888813',
        celular_secundario: '11888888814',
        telefone_residencial:'1188888858',
        telefone_comercial:'1122225532',
        email_principal: 'email8@email.com',
        email_secundario:'email9@email.com',
        fk_prestador:'8'
       
      },
      {
        celular_principal: '11888888888',
        celular_secundario: '11888888877',
        telefone_residencial:'1188888855',
        telefone_comercial:'1122225522',
        email_principal: 'email1@email.com',
        email_secundario:'email2@email.com',
        fk_prestador:'9'
      },
      {
        celular_principal: '11888888889',
        celular_secundario: '11888888810',
        telefone_residencial:'1188888856',
        telefone_comercial:'1122225528',
        email_principal: 'email4@email.com',
        email_secundario:'email5@email.com',
        fk_prestador:'10'
       
      },
      {
        celular_principal: '11888888811',
        celular_secundario: '11888888812',
        telefone_residencial:'1188888857',
        telefone_comercial:'1122225527',
        email_principal: 'email6@email.com',
        email_secundario:'email7@email.com',
        fk_prestador:'11'
      },
      {
        celular_principal: '11888888813',
        celular_secundario: '11888888814',
        telefone_residencial:'1188888858',
        telefone_comercial:'1122225532',
        email_principal: 'email8@email.com',
        email_secundario:'email9@email.com',
        fk_prestador:'12'
       
      },
      {
        celular_principal: '11888888888',
        celular_secundario: '11888888877',
        telefone_residencial:'1188888855',
        telefone_comercial:'1122225522',
        email_principal: 'email1@email.com',
        email_secundario:'email2@email.com',
        fk_prestador:'13'
      },
      {
        celular_principal: '11888888889',
        celular_secundario: '11888888810',
        telefone_residencial:'1188888856',
        telefone_comercial:'1122225528',
        email_principal: 'email4@email.com',
        email_secundario:'email5@email.com',
        fk_prestador:'14'
       
      },
      {
        celular_principal: '11888888811',
        celular_secundario: '11888888812',
        telefone_residencial:'1188888857',
        telefone_comercial:'1122225527',
        email_principal: 'email6@email.com',
        email_secundario:'email7@email.com',
        fk_prestador:'15'
      },
      {
        celular_principal: '11888888813',
        celular_secundario: '11888888814',
        telefone_residencial:'1188888858',
        telefone_comercial:'1122225532',
        email_principal: 'email8@email.com',
        email_secundario:'email9@email.com',
        fk_prestador:'16'
       
      }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('contatos_prestador', null, {});
    
  }
};
