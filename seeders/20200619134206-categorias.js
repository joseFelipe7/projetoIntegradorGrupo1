module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categorias', [{
        categoria: 'Medicina',
        descricao: 'Profissional que atua na área médica'
      },
      {
        categoria: 'Segurança',
        descricao: 'Profissional que atua na área de segurança'
      },
      {
        categoria: 'Estética',
        descricao: 'Profissional que atua na área de cuidados com o corpo'
      },
      {
        categoria: 'Jardinagem',
        descricao: 'Profissional que atua na área de jardinagens em geral'
      },
      {
        categoria: 'Educação',
        descricao: 'Profissional que atua na área de educação em geral'
      },
      {
        categoria: 'Culinária',
        descricao: 'Profissional que atua na área de culinária em geral'
      },
      {
        categoria: 'Escritório',
        descricao: 'Profissional que atua na área na área de administração e etc...'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categorias', null, {});
  }
};
