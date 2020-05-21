module.exports = (sequelize, DataTypes) => {
    const Prestador = sequelize.define("Prestador", {
        id_prestador: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        email: {type: Sequelize.STRING, allowNull: false},
        password: {type: Sequelize.INTEGER, allowNull: false},
        name: {type: Sequelize.STRING, allowNull: false},
        data_nascimento: Sequelize.DATE,
        cpf: {type: Sequelize.INTEGER, allowNull: false}, 
        telefone: Sequelize.INTEGER,
        celular: {type: Sequelize.INTEGER, allowNull: false}, 
        avatar: Sequelize.STRING, 
        createdAt: Sequelize.DATE, 
        updatedAt: Sequelize.DATE, 
        logradouro: Sequelize.STRING,
        numero: Sequelize.INTEGER,
        bairro: Sequelize.STRING,  
        cidade: Sequelize.STRING,  
        estado: Sequelize.STRING,  
        cep: {type: Sequelize.INTEGER, allowNull: false},
        cnpj: {type: Sequelize.INTEGER, allowNull: false},
        nome_fantasia: Sequelize.STRING,
    }, {
        tableName: 'prestador'
    });
    return Prestador;
};