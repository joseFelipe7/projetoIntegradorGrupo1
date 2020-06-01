module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable("contatos", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      celular_principal: { 
        type: Sequelize.STRING(11),
        allowNull: false
      },
      celular_secundario: { 
        type: Sequelize.STRING(11),
        allowNull: true
      },
      telefone_residencial: { 
        type: Sequelize.STRING(10),
        allowNull: true
      },
      email_principal: { 
        type: Sequelize.STRING(190),
        allowNull: false
      },
      email_secundario: { 
        type: Sequelize.STRING(190),
        allowNull: true
      },
      fk_clientes: { 
        type: Sequelize.INTEGER, 
        references:{
          model:{
            tableName: 'clientes'
          },
          key:'id'
        }
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('contatos');
  }
};

