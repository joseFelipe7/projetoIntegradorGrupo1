module.exports = (sequelize, DataTypes) => {
    const Prestador = sequelize.define("Prestador", {
        id_prestador: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        email: {type: DataTypes.STRING, allowNull: false},
        password: {type: DataTypes.INTEGER, allowNull: false},
        name: {type: DataTypes.STRING, allowNull: false},
        data_nascimento: DataTypes.DATE,
        cpf: {type: DataTypes.INTEGER, allowNull: false}, 
        telefone: DataTypes.INTEGER,
        celular: {type: DataTypes.INTEGER, allowNull: false}, 
        avatar: DataTypes.STRING, 
        createdAt: DataTypes.DATE, 
        updatedAt: DataTypes.DATE, 
        logradouro: DataTypes.STRING,
        numero: DataTypes.INTEGER,
        bairro: DataTypes.STRING,  
        cidade: DataTypes.STRING,  
        estado: DataTypes.STRING,  
        cep: {type: DataTypes.INTEGER, allowNull: false},
        cnpj: {type: DataTypes.INTEGER, allowNull: false},
        nome_fantasia: DataTypes.STRING,
    }, {
        tableName: 'prestador'
    });
    return Prestador;
};