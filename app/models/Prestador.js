module.exports = (sequelize, DataTypes) => {
    const Prestador = sequelize.define("Prestador", {
<<<<<<< HEAD
        id:{
            primaryKey:true,
            autoIncrement:true,
            type:DataTypes.INTEGER 
          },
        nome:{
            type:DataTypes.STRING(190),
            allowNull:false
          },
        email:{
           type:DataTypes.STRING(190),
           allowNull:false
          },
        senha:{
            type:DataTypes.STRING,
            allowNull:false
          },
        data_nascimento:DataTypes.DATE,
        status_:DataTypes.CHAR(1),
        cpf:DataTypes.INTEGER,
        avatar:DataTypes.STRING(190),
        extensao_avatar:DataTypes.CHAR(5),
        data_cadastro:DataTypes.DATE
         
=======
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
>>>>>>> 92eca4af5fad1b8a071ec3fd83897376eaf04481
    }, {
        timestamps:false,
        tableName: 'prestador'
    });
    return Prestador;
};